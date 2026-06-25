const projectImage = (fileName: string) =>
  `${import.meta.env.BASE_URL}projects/${fileName}`;

export type PortfolioProject = {
  slug: string;
  title: string;
  image?: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  results?: string[];
  screenshots?: string[];
  github?: string;
  live?: string;
  medium?: string;
  order?: number;
  visible?: boolean;
  featured?: boolean;
  caseStudy?: {
    whyItMatters?: string;
    architecture?: string[];
    workflow?: string[];
    features?: string[];
    myContribution?: string[];
    challenges?: string[];
    howISolved?: string[];
    learnings?: string[];
    limitations?: string[];
  };
};

export const projects: PortfolioProject[] = [
  {
    slug: "agroguia-ai",
    title: "AGROGUIA.AI",
    image: projectImage("agroguia-ai.png"),
    description:
      "A full-stack AI farm advisory dashboard that turns farmer profiles and local weather context into structured agricultural decision modules.",
    highlights: [
      "Full-stack AI product architecture",
      "OpenRouter structured advisory generation",
      "OpenWeather PIN-code weather enrichment",
      "MongoDB persistence and authenticated user flows",
      "Dashboard-safe LLM response handling",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "OpenRouter",
      "OpenWeather",
      "JWT",
      "bcrypt",
    ],
    overview:
      "AGROGUIA.AI is a full-stack agricultural intelligence platform built around profile-driven farm advisory. It captures farmer, crop, soil, finance, insurance, language, and PIN-code context, enriches advisory generation with OpenWeather data, and uses OpenRouter to generate structured AI modules for a dashboard experience.",
    problem:
      "Farmers often make connected decisions across crop, weather, finance, insurance, schemes, and risk using fragmented information. The project explores how these inputs can be brought into one structured advisory workflow.",
    solution:
      "The app combines authenticated flows, farmer profile onboarding, MongoDB persistence, OpenWeather enrichment, OpenRouter-powered advisory generation, and dashboard modules for weather, pest, crop strategy, schemes, insurance, loans, fraud awareness, and waste value.",
    results: [
      "Built a working full-stack AI advisory MVP with authentication, MongoDB-backed data flows, weather-enriched AI advisory generation, structured response handling, and modular dashboard rendering.",
    ],
    github: "https://github.com/YellankiKaushik/Agroguia-AI",
    live: "",
    medium: "",
    order: 1,
    featured: true,
  },
  {
    slug: "youtube-review",
    title: "Integrated Review of YouTube Videos",
    image: projectImage("youtube-review.png"),
    description:
      "A full-stack AI dashboard that analyzes YouTube comments and transcripts to generate sentiment breakdowns and viewer feedback summaries.",
    highlights: [
      "Built an AI/NLP dashboard for comment analysis, transcript review, summaries, and sentiment visualization.",
      "Connected YouTube API data with backend processing and dashboard-ready viewer feedback insights.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Flask",
      "Python",
      "OpenAI API",
      "YouTube Data API",
      "YouTube Transcript API",
      "Recharts",
      "Tailwind CSS",
    ],
    overview:
      "Integrated Review of YouTube Videos is a full-stack AI dashboard for analyzing YouTube comments and transcripts. It combines YouTube API data, transcript extraction, AI-generated summaries, and sentiment visualization to help inspect viewer feedback in one interface.",
    problem:
      "Video feedback is spread across comments, transcripts, and audience signals, making it difficult to review themes and sentiment manually.",
    solution:
      "The project brings YouTube comments and transcript data into a dashboard workflow with backend processing, OpenAI-powered summaries, and visual sentiment breakdowns.",
    results: [
      "Built a working full-stack review dashboard with YouTube API integration, transcript analysis, AI summaries, and sentiment visualization.",
    ],
    screenshots: [projectImage("youtube-review.png")],
    github: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    live: "",
    medium: "",
    order: 2,
    featured: true,
  },
  {
    slug: "hazlo",
    title: "Hazlo",
    image: projectImage("hazlo.png"),
    description:
      "A voice-first productivity app that captures spoken thoughts, extracts likely tasks locally, and syncs structured notes to Notion.",
    highlights: [
      "Voice capture using browser Web Speech API",
      "Local task extraction from raw speech",
      "Zustand state with localStorage persistence",
      "Notion sync through Vercel serverless API",
      "Retry flow and unit-tested logic",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Web Speech API",
      "Notion API",
      "Vercel Serverless Functions",
      "Vitest",
    ],
    overview:
      "Hazlo is a voice-first task capture app built with React, TypeScript, and Vite. It uses the browser Web Speech API to capture spoken thoughts, extracts likely tasks locally, stores entries in browser state/localStorage, and syncs transcripts plus tasks to Notion through a Vercel serverless API.",
    problem:
      "People often lose tasks and ideas because thoughts are messy, fast, and not immediately organized. Hazlo explores a workflow where voice becomes structured task capture.",
    solution:
      "The app combines speech capture, transcript preview, local task extraction, persisted task state, task lifecycle controls, retryable Notion sync, and a serverless API with API-secret validation.",
    results: [
      "Built a working voice-first productivity prototype with local task extraction, persistent browser state, Notion sync flow, retry states, and unit-tested task/sync behavior.",
    ],
    github: "https://github.com/YellankiKaushik/Hazlo-OpenSource",
    live: "https://hazlo-opensource.vercel.app",
    medium: "",
    order: 3,
    featured: true,
  },
  {
    slug: "ai-crowd-intelligence",
    title: "AI Crowd Intelligence Assistant",
    image: projectImage("ai-crowd-intelligence.png"),
    description:
      "A simulated crowd navigation assistant that recommends routes using crowd-aware scoring and Gemini-generated explanations.",
    highlights: [
      "Rule-based route scoring engine",
      "Gemini-generated route explanations",
      "Simulated Low, Normal, and Peak crowd scenarios",
      "Multilingual UI support",
      "Dashboard with route metrics and emergency simulation",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Gemini API",
      "Google Cloud Run",
    ],
    overview:
      "AI Crowd Intelligence Assistant is a hackathon prototype for helping users navigate crowded temple or event environments. It uses predefined route data, simulated crowd scenarios, and location context to recommend routes, while Gemini generates short explanations for the recommendation.",
    problem:
      "In crowded public venues, visitors may struggle to decide which route to take, where to go next, and how to avoid congestion.",
    solution:
      "The app uses intent selection, crowd scenario simulation, route scoring, dashboard metrics, multilingual UI, live-style updates, emergency route simulation, and a Gemini-powered explanation layer.",
    results: [
      "Built a working full-stack hackathon prototype with simulated crowd-aware route recommendations, Gemini explanations, multilingual support, dashboard metrics, and a documented Cloud Run demo.",
    ],
    github: "https://github.com/YellankiKaushik/AI-Crowd-Intelligence-Assistant.git",
    live: "https://ai-crowd-intelligence-148352897207.asia-south1.run.app",
    medium: "",
    order: 4,
    featured: true,
  },
  {
    slug: "sistemaa-electoral",
    title: "Sistemaa Electoral",
    image: projectImage("sistemaa-electoral.png"),
    description:
      "A multilingual AI election education assistant that combines a rule-based learning flow with Gemini fallback for open-ended questions.",
    highlights: [
      "Hybrid rule-based + Gemini architecture",
      "Multilingual and Hinglish handling",
      "Guided 5-step voter education flow",
      "Confusion recovery and toxicity filtering",
      "Docker and Google Cloud Run deployment",
    ],
    techStack: [
      "Node.js",
      "Express",
      "JavaScript",
      "Google Gemini",
      "Google Cloud Translation API",
      "Docker",
      "Google Cloud Run",
      "Rate Limiting",
    ],
    overview:
      "Sistemaa Electoral is an AI-powered civic education assistant designed to guide first-time voters through the election process. It uses a hybrid intelligence architecture where a deterministic rule engine handles guided learning and confusion recovery, while Gemini is used as a fallback for open-ended queries.",
    problem:
      "First-time voters can face confusion around electoral procedures, voting steps, and language accessibility when trying to understand the election process.",
    solution:
      "The system provides a guided 5-step educational flow, multilingual and Hinglish handling, translation support, toxicity filtering, rate limiting, and Gemini fallback for safe open-ended support.",
    results: [
      "Built a working multilingual AI assistant prototype with rule-based guidance, LLM fallback, translation pipeline, confusion recovery, Docker/Cloud Run deployment, and safety controls.",
    ],
    github: "https://github.com/YellankiKaushik/Sistemaa-Electoral",
    live: "https://election-app-116362886136.asia-south1.run.app/",
    medium: "",
    order: 5,
    featured: true,
  },
  {
    slug: "gym-membership",
    title: "FitZone Gym Membership Management System",
    image: projectImage("fitzone-gym-membership.png"),
    description:
      "A serverless gym membership management app with public member lookup, admin CRUD workflows, renewal handling, and Google Sheets-backed persistence.",
    highlights: [
      "Public member lookup and admin management workflows",
      "Google Sheets-backed persistence through Google Apps Script",
      "Renewal handling, search, filters, and pagination",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Google Apps Script",
      "Google Sheets",
      "GitHub Pages",
    ],
    overview:
      "FitZone Gym Membership Management System is a serverless small-business membership app built around Google Sheets-backed persistence and admin workflows.",
    problem:
      "Small gyms need simple ways to manage member records, renewal dates, and lookup workflows without maintaining a traditional backend server.",
    solution:
      "The app combines a React and TypeScript frontend with Google Apps Script and Google Sheets for member lookup, admin CRUD operations, renewal handling, search, filters, and pagination.",
    results: [
      "Built a working serverless membership management app with public lookup, admin workflows, renewal handling, and Google Sheets persistence.",
    ],
    screenshots: [projectImage("fitzone-gym-membership.png")],
    github: "https://github.com/YellankiKaushik/Gym-Membership.git",
    live: "https://yellankikaushik.github.io/Gym-Membership/",
    medium: "",
    order: 6,
    featured: true,
  },
  {
    slug: "krishi-seva",
    title: "Krishi Seva AI Agent",
    image: projectImage("krishi-seva.png"),
    description:
      "A Python agricultural advisory agent that turns live weather data into explainable farming risk alerts and simple action recommendations.",
    highlights: [
      "Live weather data lookup through OpenWeatherMap API",
      "Rule-based farming risk detection",
      "Explainable advisory output for simple action recommendations",
    ],
    techStack: [
      "Python",
      "OpenWeatherMap API",
      "requests",
      "Rule-Based Logic",
      "GitAgent-style Documentation",
      "GitHub",
    ],
    overview:
      "Krishi Seva AI Agent is a Python CLI agricultural decision-support project that converts weather inputs into explainable farming risk alerts and simple recommendations.",
    problem:
      "Raw weather data does not directly tell a farmer what risks may matter for crop decisions, especially around rain, heat, and humidity-related conditions.",
    solution:
      "The agent fetches weather data, applies rule-based farming risk checks, and returns simple advisory messages that explain the detected condition and suggested action.",
    results: [
      "Built a Python rule-based agricultural advisory agent with live weather lookup, farming risk detection, and explainable recommendations.",
    ],
    screenshots: [projectImage("krishi-seva.png")],
    github: "https://github.com/YellankiKaushik/Krishi-Seva-AI.git",
    live: "",
    medium: "",
    order: 7,
    visible: false,
    featured: true,
  },
  {
    slug: "psymatch",
    title: "PsyMatch",
    image: projectImage("psymatch.png"),
    description:
      "A personality matching prototype that converts questionnaire answers into trait profiles and ranks compatible demo users using cosine similarity.",
    highlights: [
      "20-question personality questionnaire",
      "Normalized 15-trait profile scoring",
      "Cosine similarity matching",
      "Dashboard and match card UI",
      "FastAPI JWT auth foundation",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "JWT",
      "bcrypt",
      "Cosine Similarity",
    ],
    overview:
      "PsyMatch is a React and TypeScript personality matching prototype built around a 20-question assessment. It scores answers across Big Five traits, values, and life goals, converts the profile into a 15-dimensional vector, and ranks compatible seeded profiles using cosine similarity. The project also includes a FastAPI authentication foundation.",
    problem:
      "Many social discovery products rely on surface-level profile fields. PsyMatch explores how questionnaire responses can become structured signals for compatibility-style recommendations.",
    solution:
      "The project uses a guided questionnaire, normalized trait scoring, cosine similarity ranking, dashboard visualizations, match cards, mock chat, and a separate FastAPI auth module.",
    results: [
      "Built a working React + TypeScript matching prototype with questionnaire scoring, 15-trait profile modeling, cosine similarity ranking, dashboard UI, mock chat, and FastAPI auth foundation.",
    ],
    github: "https://github.com/YellankiKaushik/Dating.git",
    live: "",
    medium: "",
    order: 8,
    visible: false,
    featured: false,
  },
  {
    slug: "vaaniplan",
    title: "VaaniPlan - Voice-First AI Daily Planning Assistant",
    image: projectImage("vaaniplan.png"),
    description:
      "A voice-first AI planning assistant that removes the need for manual typing and automatically structures daily tasks using LLM reasoning.",
    highlights: [
      "Reduced daily planning effort by 60-70% through voice-driven AI task generation.",
      "Improved productivity by about 50% by eliminating manual task structuring.",
    ],
    techStack: [
      "FastAPI",
      "LLMs",
      "Web Speech API",
      "AI Assistants",
      "Python",
    ],
    overview:
      "VaaniPlan is a voice-first planning assistant where users speak their tasks and the AI structures them into a daily plan.",
    problem:
      "Most productivity tools require manual typing and task organization, which can slow down planning.",
    solution:
      "Built a voice interface using the Web Speech API and integrated LLM reasoning to organize spoken tasks into structured daily schedules.",
    results: [
      "Built a voice-driven productivity prototype accepted into the Unleash LLM Innovation Challenge.",
    ],
    screenshots: [projectImage("vaaniplan.png")],
    github: "https://github.com/YellankiKaushik/VaaniPlan",
    live: "https://yellankikaushik.github.io/VaaniPlan/",
    medium: "",
    order: 90,
    visible: false,
  },
  {
    slug: "google-product-analysis",
    title: "Public Interest Analysis of Google Products",
    image: projectImage("google-product-analysis.png"),
    description:
      "An interactive Tableau dashboard that analyzes Google Trends data to reveal product popularity patterns.",
    highlights: [
      "Converted raw Google Trends data into interactive product insight dashboards.",
      "Enabled quick comparison of search interest across multiple Google products.",
    ],
    techStack: [
      "Tableau",
      "Google Trends",
      "Data Visualization",
      "Data Analysis",
    ],
    overview:
      "This project analyzes Google Trends data and visualizes product popularity trends using an interactive Tableau dashboard.",
    problem:
      "Raw search trend data is difficult to interpret without visualization and comparison tools.",
    solution:
      "Built an interactive Tableau dashboard that visualizes search interest trends and enables comparison across different Google products.",
    results: [
      "Built an interactive analytics dashboard for exploring product search trends.",
    ],
    screenshots: [projectImage("google-product-analysis.png")],
    github: "",
    live: "https://public.tableau.com/app/profile/yellanki.kaushik",
    medium: "",
    order: 91,
    visible: false,
  },
];
