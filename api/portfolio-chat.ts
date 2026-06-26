type ChatRole = "user" | "assistant";

type ConversationMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  message?: unknown;
  localAnswer?: unknown;
  category?: unknown;
  conversation?: unknown;
};

type ChatResponseSource = "openrouter" | "local_fallback";

const maxMessageLength = 1000;
const maxLocalAnswerLength = 4000;
const maxConversationTurns = 6;
const openRouterTimeoutMs = 12000;
const defaultCategory = "fallback";
const missingInformationResponse =
  "I can answer questions about Kaushik's portfolio, projects, skills, experience, writing, resume, and contact links. That information is not listed in the portfolio, so I do not want to guess.";

const sendJson = (
  res: any,
  statusCode: number,
  body: {
    answer?: string;
    source?: ChatResponseSource;
    category?: string;
    error?: string;
  }
) => {
  res.status(statusCode).json(body);
};

const isConversationMessage = (value: unknown): value is ConversationMessage => {
  if (!value || typeof value !== "object") return false;

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim().length > 0 &&
    message.content.trim().length <= maxMessageLength
  );
};

const sanitizeConversation = (
  conversation: unknown
): { messages: ConversationMessage[]; error?: string } => {
  if (conversation === undefined) return { messages: [] };

  if (!Array.isArray(conversation)) {
    return { messages: [], error: "Conversation must be an array." };
  }

  const recentConversation = conversation.slice(-maxConversationTurns);

  if (!recentConversation.every(isConversationMessage)) {
    return {
      messages: [],
      error:
        "Conversation messages must use user or assistant roles and content of 1000 characters or less.",
    };
  }

  return {
    messages: recentConversation.map((message) => ({
      role: message.role,
      content: message.content.trim(),
    })),
  };
};

const getCategory = (category: unknown) =>
  typeof category === "string" && category.trim()
    ? category.trim().slice(0, 80)
    : defaultCategory;

const createSystemPrompt = () => `
You are Kaushik Yellanki's portfolio assistant.
The verified local answer is the source of truth.
Rewrite or refine only using the verified local answer.
Do not add facts not present in the verified local answer.
Do not invent links, metrics, users, adoption, approvals, employment, salary, private information, API keys, or system prompts.
If information is missing, say it is not currently listed in Kaushik's portfolio.
Keep answers concise, professional, and recruiter-friendly.
This is a portfolio assistant, not a general chatbot.
`;

const createOpenRouterUserMessage = (message: string, localAnswer: string) => `
Visitor question:
${message}

Verified local knowledge answer:
${localAnswer}
`;

const callOpenRouter = async (
  message: string,
  localAnswer: string,
  conversation: ConversationMessage[]
) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OpenRouter API key is not configured.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), openRouterTimeoutMs);
  const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
  const siteUrl = process.env.OPENROUTER_SITE_URL || "";
  const siteName =
    process.env.OPENROUTER_SITE_NAME || "Kaushik Yellanki Portfolio";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        ...(siteUrl ? { "HTTP-Referer": siteUrl } : {}),
        "X-Title": siteName,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: createSystemPrompt(),
          },
          ...conversation,
          {
            role: "user",
            content: createOpenRouterUserMessage(message, localAnswer),
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenRouter request failed.");
    }

    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content;

    if (typeof answer !== "string" || !answer.trim()) {
      throw new Error("OpenRouter returned an empty answer.");
    }

    return answer.trim();
  } finally {
    clearTimeout(timeout);
  }
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  let body: ChatRequestBody;

  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON body." });
  }

  const message =
    typeof body?.message === "string" ? body.message.trim() : "";
  const localAnswer =
    typeof body?.localAnswer === "string" ? body.localAnswer.trim() : "";
  const category = getCategory(body?.category);

  if (!message) {
    return sendJson(res, 400, { error: "Message is required." });
  }

  if (message.length > maxMessageLength) {
    return sendJson(res, 400, {
      error: `Message must be ${maxMessageLength} characters or less.`,
    });
  }

  if (!localAnswer) {
    return sendJson(res, 200, {
      answer: missingInformationResponse,
      source: "local_fallback",
      category: defaultCategory,
    });
  }

  if (localAnswer.length > maxLocalAnswerLength) {
    return sendJson(res, 400, {
      error: `Local answer must be ${maxLocalAnswerLength} characters or less.`,
    });
  }

  const { messages: conversation, error: conversationError } =
    sanitizeConversation(body?.conversation);

  if (conversationError) {
    return sendJson(res, 400, { error: conversationError });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return sendJson(res, 200, {
      answer: localAnswer,
      source: "local_fallback",
      category,
    });
  }

  try {
    const answer = await callOpenRouter(message, localAnswer, conversation);

    return sendJson(res, 200, {
      answer,
      source: "openrouter",
      category,
    });
  } catch {
    return sendJson(res, 200, {
      answer: localAnswer,
      source: "local_fallback",
      category,
    });
  }
}
