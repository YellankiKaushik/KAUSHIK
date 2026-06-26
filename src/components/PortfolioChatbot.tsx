import { FormEvent, KeyboardEvent, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { suggestedChatbotQuestions } from "@/data/portfolioKnowledge";
import { getPortfolioAnswer } from "@/utils/portfolioChatbotEngine";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const initialAssistantMessage =
  "Hi, I'm Kaushik's portfolio assistant. I can help visitors explore his projects, skills, experience, writing, resume, and contact links.";

const createMessage = (
  role: ChatMessage["role"],
  content: string
): ChatMessage => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  role,
  content,
});

const getRecentConversation = (messages: ChatMessage[]) =>
  messages
    .filter((message) => message.content !== initialAssistantMessage)
    .slice(-6)
    .map(({ role, content }) => ({ role, content }));

const aiEnhancedCategories = new Set([
  "identity",
  "projects",
  "project_detail",
  "skills",
  "experience",
  "achievements",
  "writing",
]);

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", initialAssistantMessage),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const starterQuestions = useMemo(
    () => suggestedChatbotQuestions.slice(0, 6),
    []
  );

  const addUserPrompt = async (prompt: string) => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt || isLoading) return;

    const userMessage = createMessage("user", trimmedPrompt);
    const localResult = getPortfolioAnswer(trimmedPrompt);
    const localAnswer = localResult.content;
    const shouldUseAI = aiEnhancedCategories.has(localResult.category);
    const assistantMessage = createMessage(
      "assistant",
      shouldUseAI ? "Thinking..." : localAnswer
    );

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      assistantMessage,
    ]);
    setInputValue("");

    if (!shouldUseAI) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedPrompt,
          localAnswer,
          category: localResult.category,
          conversation: getRecentConversation(messages),
        }),
      });

      if (!response.ok) {
        throw new Error("Portfolio chat API request failed.");
      }

      const data = await response.json();
      let answer = localAnswer;

      if (
        data?.source !== "local_fallback" &&
        typeof data?.answer === "string" &&
        data.answer.trim()
      ) {
        answer = data.answer.trim();
      }

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessage.id
            ? { ...message, content: answer }
            : message
        )
      );
    } catch {
      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessage.id
            ? { ...message, content: localAnswer }
            : message
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUserPrompt(inputValue);
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      addUserPrompt(inputValue);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
        <button
          type="button"
          aria-label="Open Kaushik portfolio assistant"
          onClick={() => setIsOpen(true)}
          className="glass-card hover-glow flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white shadow-neon"
        >
          <MessageCircle className="h-4 w-4 text-primary-light" aria-hidden="true" />
          <span>Ask about Kaushik</span>
        </button>
      </div>
    );
  }

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-label="Kaushik Portfolio Assistant"
      className="fixed bottom-4 left-3 right-3 z-[70] mx-auto w-auto max-w-[420px] sm:left-auto sm:right-6 sm:bottom-6"
    >
      <div className="glass-card flex max-h-[min(680px,calc(100vh-2rem))] flex-col overflow-hidden rounded-2xl border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-cosmic text-white shadow-neon">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">
                Kaushik Portfolio Assistant
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/65">
                Ask about projects, skills, experience, writing, and contact.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close Kaushik portfolio assistant"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>

        <div className="border-b border-white/10 px-4 py-3">
          <p className="mb-2 text-xs font-medium text-white/70">
            Starter questions
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {starterQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => addUserPrompt(question)}
                disabled={isLoading}
                className="shrink-0 rounded-full border border-primary/30 bg-gradient-cosmic/15 px-3 py-2 text-left text-xs text-primary-light transition hover:border-primary-light/60 hover:text-white"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-primary text-white"
                    : "border border-white/10 bg-white/8 text-white/80"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-2 border-t border-white/10 p-3"
        >
          <textarea
            ref={inputRef}
            aria-label="Ask Kaushik portfolio assistant a question"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleInputKeyDown}
            rows={1}
            placeholder="Ask about projects, skills, resume..."
            disabled={isLoading}
            className="max-h-24 min-h-10 flex-1 resize-none rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
          <button
            type="submit"
            aria-label="Send message to Kaushik portfolio assistant"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-cosmic text-white transition hover:shadow-neon disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!inputValue.trim() || isLoading}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default PortfolioChatbot;
