export type ProjectStory = {
  category: string;
  theme: "farm" | "video" | "voice" | "navigation" | "civic" | "member";
  flow: string[];
  decisions: string[];
  boundaries: string[];
  contribution?: string;
  evidence?: { label: string; href: string };
};

export const projectStories: Record<string, ProjectStory | undefined> = {
  "agroguia-ai": {
    category: "AI decision support",
    theme: "farm",
    flow: ["Farm profile", "Weather lookup", "OpenRouter", "Advisory dashboard"],
    decisions: [
      "The onboarding wizard captures crop, soil, irrigation, language, and PIN code. The server stores the profile in MongoDB and uses the PIN code to request recent conditions and a short forecast.",
      "The model returns a structured advisory. A normalization step fills missing fields with defaults so the dashboard can render the same modules even when the response is incomplete.",
      "Weather enrichment has its own failure path. If the lookup fails, the system can still build an advisory from the saved profile.",
    ],
    boundaries: [
      "The repository describes a working MVP and its fallback behavior. Field accuracy and farm outcomes have not been measured in the supplied evidence.",
      "The interface can render an advisory after a provider failure. It is important to make the difference between live context and fallback data clear to the reader.",
    ],
  },
  "youtube-review": {
    category: "NLP & analytics",
    theme: "video",
    flow: ["Video URL", "Comments & transcript", "Flask analysis", "Recharts"],
    decisions: [
      "A Next.js frontend collects the video URL and renders the results. The Flask service handles fetching and text processing so charts can use structured results.",
      "Sentiment labels and AI summaries answer different questions. The dashboard combines categorical distributions with a readable summary of what viewers are saying.",
      "The repository documents separate setup for the web frontend and Python service, including the provider credentials required for fetching and summarization.",
    ],
    boundaries: [
      "The analysis depends on available public comments and transcripts. Sentiment reflects the fetched sample and can miss sarcasm or context.",
      "The repository documents implementation and local setup. It provides no public accuracy benchmark.",
    ],
  },
  hazlo: {
    category: "Voice & automation",
    theme: "voice",
    flow: ["Speak or type", "Extract tasks", "Save locally", "Sync to Notion"],
    contribution: "I created and maintain Hazlo. I built speech and typed capture, local task extraction, and the Vercel endpoint that handles Notion sync.",
    decisions: [
      "The raw thought stays attached to its extracted tasks. Simple phrase and list rules run in the browser, so users can inspect the original when an extraction misses something.",
      "Zustand and localStorage save the entry before the Notion request. If sync fails, the saved entry remains available with a retry action.",
      "The Notion token stays on the server. Typed capture is available when the browser cannot recognize speech or the user prefers to type.",
    ],
    boundaries: [
      "Voice capture depends on browser speech support. The local parser works with simple task patterns and can miss implicit or ambiguous actions.",
      "Local persistence keeps a capture usable through a failed network request. Cross-device availability depends on a successful sync and the destination workspace.",
    ],
    evidence: { label: "Open the product preview", href: "https://github.com/YellankiKaushik/Hazlo-OpenSource#preview" },
  },
  "ai-crowd-intelligence": {
    category: "Routing prototype",
    theme: "navigation",
    flow: ["Visitor intent", "Simulated conditions", "Rank routes", "Explain with Gemini"],
    decisions: [
      "Express receives the visitor’s intent and current location, then compares predefined routes using travel time and a crowd penalty.",
      "The scoring rules select a route before Gemini is asked to explain it. The explanation layer can then translate a decision that already has inspectable inputs.",
      "Low, normal, and peak scenarios let a reviewer compare the route behavior under different simulated conditions.",
    ],
    boundaries: [
      "This is a hackathon prototype with simulated crowd data and predefined locations. It has no live sensor feed or venue safety validation.",
      "Using separate selection and explanation layers makes it possible to inspect why a route won even when a generated explanation is unavailable.",
    ],
  },
  "sistemaa-electoral": {
    category: "Multilingual AI",
    theme: "civic",
    flow: ["Language input", "Guided intent", "Rules or Gemini", "Localized reply"],
    decisions: [
      "The Express backend recognizes common intents and confusion signals to guide a first-time voter through five steps.",
      "Gemini handles open questions outside the guided paths. Translation, validation, and rate limiting sit around the request flow.",
      "The project treats mixed-language input as part of the interface, supporting Hinglish along with translated requests.",
    ],
    boundaries: [
      "The demo teaches general concepts. Current rules, deadlines, and eligibility need official election sources.",
      "Guided intents give the assistant a repeatable path. Open questions and mixed-language inputs still require evaluation across languages.",
    ],
  },
  "gym-membership": {
    category: "Serverless operations",
    theme: "member",
    flow: ["React interface", "Apps Script API", "Private Google Sheet"],
    decisions: [
      "A member checks their plan with an ID. The owner signs in to a separate interface for renewals, record edits, filtering, and pagination.",
      "Apps Script handles API requests and persists data in a private Google Sheet. Each installation has a separate sheet and script configuration.",
      "The current implementation documents calendar-aware expiries, stable member IDs, and row versions that protect against stale edits.",
    ],
    boundaries: [
      "A sheet is a familiar storage surface for a single gym. It also ties throughput and maintenance to Google Apps Script and its quotas.",
      "The owner dashboard refreshes after writes. The implementation does not stream changes across simultaneous browser sessions.",
    ],
    evidence: { label: "Read the implementation guide", href: "https://github.com/YellankiKaushik/Gym-Membership/blob/main/PROJECT_EXPLANATION.md" },
  },
};
