import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";

export const projects = [
  {
    slug: "youtube-review",
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "Built an AI-powered review intelligence system that transforms thousands of YouTube comments into actionable sentiment insights and summaries, reducing manual review effort by 70%+ and accelerating content and marketing decisions.",
    image: youtubeImg,
    github: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    live: "",
    medium: "",
    tags: [
      "NLP",
      "Sentiment Analysis",
      "Hugging Face",
      "OpenAI API",
      "YouTube Data API",
    ],
  },
  {
    slug: "vaaniplan",
    title: "VaaniPlan — Voice-First AI Daily Planning Assistant",
    description:
      "Created a voice-first AI planning prototype that eliminates typing and manual task structuring by using LLM reasoning, reducing planning effort by 60–70%, improving efficiency by ~50%, and earning acceptance in the Unleash LLM Innovation Challenge.",
    image: vaaniplanImg,
    github: "",
    live: "https://yellankikaushik.github.io/VaaniPlan/",
    medium: "https://medium.com/@kaushikyellanki/️-vaaniplan-voice-first-ai-daily-planning-assistant-26f7477d35a6",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    slug: "gym-membership",
    title: "Gym Membership Management System",
    description:
      "Created a zero-cost, production-ready membership management system that replaces manual tracking with automated expiry alerts, reducing admin effort by 65–70% and preventing 30–40% of missed renewals for small gyms.",
    image: gymImg,
    github: "https://github.com/YellankiKaushik/Gym-Membership",
    live: "",
    medium: "",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
  {
    slug: "google-product-analysis",
    title: "Public Interest Analysis of Google Products",
    description:
      "Created an interactive Tableau dashboard that translates Google Trends data into clear product insights.",
    image: TabImg,
    github: "",
    live: "https://public.tableau.com/app/profile/yellanki.kaushik",
    medium: "",
    tags: ["Tableau", "Google Trends", "Data Visualization"],
  },
];