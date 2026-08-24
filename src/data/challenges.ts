export type ChallengeDataStatus = "verified" | "needs-details";

export type ChallengeParticipation = {
  id: string;
  slug: string;
  title: string;
  organizer: string | null;
  platform: string | null;
  category: string;
  date: string | null;
  timeframe: string | null;
  status: string;
  dataStatus: ChallengeDataStatus;
  summary: string;
  problemStatement: string;
  whatIBuilt: string;
  myRole: string;
  technologies: string[];
  skillsDemonstrated: string[];
  outcome: string;
  learnings: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  mediumUrl: string | null;
  devtoUrl: string | null;
  certificateUrl: string | null;
  participationUrl: string | null;
  linkedinPostUrl: string | null;
  socialPostUrl: string | null;
  projectUrl: string | null;
  relatedProjectSlug: string | null;
  image: string | null;
  featured: boolean;
  displayOrder: number;
};

export const challenges: ChallengeParticipation[] = [
  {
    id: "farmer-os-lyzr-agentathon-2026",
    slug: "farmer-os-lyzr-agentathon-2026",
    title: "Farmer OS - Lyzr Agentathon 2026",
    organizer: "Lyzr",
    platform: "Lyzr Agentathon",
    category: "AI agents / agriculture",
    date: "2026",
    timeframe: "Agentathon 2026",
    status: "Top 50 team recognition listed in Achievements",
    dataStatus: "verified",
    summary:
      "Participated with Farmer OS, an AI-agent-based agricultural decision-support project focused on crop planning, advisory workflows, and farmer-focused automation.",
    problemStatement:
      "Agricultural decision-making often requires combining crop planning, advisory context, and farmer needs into a practical workflow.",
    whatIBuilt:
      "Worked on Farmer OS as an AI-agent-oriented agricultural decision-support concept for the Lyzr Agentathon context.",
    myRole:
      "Participated as a builder, focusing on practical AI workflow design, agricultural advisory logic, and clear project storytelling.",
    technologies: [
      "AI Agents",
      "Agricultural Decision Support",
      "Workflow Design",
      "Technical Documentation",
    ],
    skillsDemonstrated: [
      "Time-bound building",
      "AI product thinking",
      "Problem framing",
      "Technical communication",
    ],
    outcome:
      "Listed in the portfolio Achievements section as Top 50 at Lyzr Agentathon 2026.",
    learnings: [
      "Practiced translating an agricultural problem space into an AI-agent workflow.",
      "Strengthened challenge-style project positioning and proof-of-work presentation.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: "https://www.lyzr.ai/agentathon/",
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: true,
    displayOrder: 1,
  },
  {
    id: "ai-crowd-intelligence-assistant",
    slug: "ai-crowd-intelligence-assistant",
    title: "AI Crowd Intelligence Assistant",
    organizer: null,
    platform: "Hackathon prototype",
    category: "AI crowd navigation",
    date: null,
    timeframe: "Time-bound hackathon build",
    status: "Working prototype with GitHub and live demo listed",
    dataStatus: "verified",
    summary:
      "Built a simulated crowd navigation assistant that recommends routes using crowd-aware scoring and Gemini-generated explanations.",
    problemStatement:
      "In crowded public venues, visitors may struggle to choose routes, avoid congestion, and understand where to go next.",
    whatIBuilt:
      "Built a full-stack prototype with route scoring, simulated crowd scenarios, multilingual UI support, route metrics, emergency simulation, and Gemini-generated explanations.",
    myRole:
      "Owned the builder workflow from problem framing to route logic, UI behavior, AI explanation layer, deployment, and documentation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Gemini API",
      "Google Cloud Run",
    ],
    skillsDemonstrated: [
      "Hackathon execution",
      "Route scoring logic",
      "AI-assisted explanations",
      "Dashboard building",
      "Deployment",
    ],
    outcome:
      "Built and deployed a working hackathon prototype with GitHub and live demo links listed in the portfolio.",
    learnings: [
      "Practiced turning a time-bound problem statement into a usable prototype.",
      "Improved clarity around combining deterministic scoring with AI-generated explanations.",
    ],
    githubUrl:
      "https://github.com/YellankiKaushik/AI-Crowd-Intelligence-Assistant.git",
    liveUrl:
      "https://ai-crowd-intelligence-148352897207.asia-south1.run.app",
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: "/project/ai-crowd-intelligence",
    relatedProjectSlug: "ai-crowd-intelligence",
    image: null,
    featured: true,
    displayOrder: 2,
  },
  {
    id: "vaaniplan-unleash-llm-innovation-challenge",
    slug: "vaaniplan-unleash-llm-innovation-challenge",
    title: "VaaniPlan - Unleash LLM Innovation Challenge",
    organizer: null,
    platform: "Unleash LLM Innovation Challenge",
    category: "Voice-first AI productivity",
    date: null,
    timeframe: null,
    status: "Accepted into challenge as listed in project results",
    dataStatus: "verified",
    summary:
      "Built a voice-first AI daily planning assistant that converts spoken tasks into structured plans using LLM reasoning.",
    problemStatement:
      "Daily planning tools can slow users down when they require manual typing and task structuring.",
    whatIBuilt:
      "Created a voice-driven planning prototype using Web Speech API workflows and LLM-based task organization.",
    myRole:
      "Built the prototype flow and positioned it as a practical AI planning assistant for fast task capture.",
    technologies: [
      "FastAPI",
      "LLMs",
      "Web Speech API",
      "AI Assistants",
      "Python",
    ],
    skillsDemonstrated: [
      "Voice-first UX",
      "LLM workflow design",
      "Rapid prototyping",
      "Technical documentation",
    ],
    outcome:
      "Project results list that VaaniPlan was accepted into the Unleash LLM Innovation Challenge.",
    learnings: [
      "Explored how voice input can reduce friction in productivity workflows.",
      "Practiced explaining LLM-powered task structuring through a focused prototype.",
    ],
    githubUrl: "https://github.com/YellankiKaushik/VaaniPlan",
    liveUrl: "https://yellankikaushik.github.io/VaaniPlan/",
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: "/project/vaaniplan",
    relatedProjectSlug: "vaaniplan",
    image: null,
    featured: true,
    displayOrder: 3,
  },
  {
    id: "prompt-wars",
    slug: "prompt-wars",
    title: "Prompt Wars",
    organizer: null,
    platform: null,
    category: "AI challenge participation",
    date: null,
    timeframe: null,
    status: "Details to add",
    dataStatus: "needs-details",
    summary:
      "Participation was mentioned in the upgrade brief, but exact proof links, dates, organizer details, and outcomes are not listed in the current repository.",
    problemStatement:
      "Challenge context has not been added to the portfolio data yet.",
    whatIBuilt:
      "Build details are intentionally left blank until verified project or proof information is added.",
    myRole:
      "Participation role needs to be verified before publishing stronger claims.",
    technologies: [],
    skillsDemonstrated: ["Prompting", "Rapid learning", "Time-bound thinking"],
    outcome: "Outcome not listed in the current portfolio data.",
    learnings: [
      "Add verified notes once the challenge submission, proof, or write-up is available.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: false,
    displayOrder: 20,
  },
  {
    id: "hack-culture-challenges",
    slug: "hack-culture-challenges",
    title: "Hack Culture Challenges",
    organizer: null,
    platform: "Hack Culture",
    category: "Builder challenge participation",
    date: null,
    timeframe: null,
    status: "Details to add",
    dataStatus: "needs-details",
    summary:
      "Participation was mentioned in the upgrade brief, but exact submissions, proof links, dates, and outcomes are not listed in the current repository.",
    problemStatement:
      "Challenge context has not been added to the portfolio data yet.",
    whatIBuilt:
      "Build details are intentionally left blank until verified project or proof information is added.",
    myRole:
      "Participation role needs to be verified before publishing stronger claims.",
    technologies: [],
    skillsDemonstrated: ["Rapid prototyping", "Problem solving", "Documentation"],
    outcome: "Outcome not listed in the current portfolio data.",
    learnings: [
      "Add verified challenge notes, project links, or write-ups when available.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: false,
    displayOrder: 21,
  },
  {
    id: "luma-builder-events",
    slug: "luma-builder-events",
    title: "Luma Builder Events",
    organizer: null,
    platform: "Luma",
    category: "Builder event participation",
    date: null,
    timeframe: null,
    status: "Details to add",
    dataStatus: "needs-details",
    summary:
      "Builder-event participation was mentioned in the upgrade brief, but event links, exact dates, and project outcomes are not listed in the current repository.",
    problemStatement:
      "Event context has not been added to the portfolio data yet.",
    whatIBuilt:
      "Build or participation details are intentionally left blank until verified information is added.",
    myRole:
      "Participation role needs to be verified before publishing stronger claims.",
    technologies: [],
    skillsDemonstrated: ["Builder community participation", "Fast learning"],
    outcome: "Outcome not listed in the current portfolio data.",
    learnings: [
      "Add event URLs, submissions, or public posts when they are available.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: false,
    displayOrder: 22,
  },
  {
    id: "ai-for-good-hackathon-june-5",
    slug: "ai-for-good-hackathon-june-5",
    title: "AI for Good Hackathon",
    organizer: null,
    platform: null,
    category: "AI for social impact",
    date: "June 5 (year not listed)",
    timeframe: "June 5",
    status: "Details to add",
    dataStatus: "needs-details",
    summary:
      "The June 5 AI for Good Hackathon was mentioned in the upgrade brief, but the repository does not list the year, organizer, proof links, submission, or outcome.",
    problemStatement:
      "Hackathon context has not been added to the portfolio data yet.",
    whatIBuilt:
      "Build details are intentionally left blank until verified project or proof information is added.",
    myRole:
      "Participation role needs to be verified before publishing stronger claims.",
    technologies: [],
    skillsDemonstrated: ["AI problem solving", "Time-bound building"],
    outcome: "Outcome not listed in the current portfolio data.",
    learnings: [
      "Add the exact organizer, year, project, and proof links when verified.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: false,
    displayOrder: 23,
  },
  {
    id: "uptoskills-ai-building-hackathon",
    slug: "uptoskills-ai-building-hackathon",
    title: "UptoSkills AI Building Hackathon",
    organizer: "UptoSkills",
    platform: null,
    category: "AI building challenge",
    date: null,
    timeframe: null,
    status: "Details to add",
    dataStatus: "needs-details",
    summary:
      "The upgrade brief mentions an UptoSkills AI Building Hackathon, but the current repository only verifies UptoSkills internship experience. Hackathon-specific details are not listed yet.",
    problemStatement:
      "Hackathon context has not been added to the portfolio data yet.",
    whatIBuilt:
      "Build details are intentionally left blank until verified project or proof information is added.",
    myRole:
      "Participation role needs to be verified before publishing stronger claims.",
    technologies: [],
    skillsDemonstrated: ["AI building", "Rapid implementation"],
    outcome: "Outcome not listed in the current portfolio data.",
    learnings: [
      "Add challenge submission, proof, project links, or certificate links when available.",
    ],
    githubUrl: null,
    liveUrl: null,
    mediumUrl: null,
    devtoUrl: null,
    certificateUrl: null,
    participationUrl: null,
    linkedinPostUrl: null,
    socialPostUrl: null,
    projectUrl: null,
    relatedProjectSlug: null,
    image: null,
    featured: false,
    displayOrder: 24,
  },
];

export const sortedChallenges = [...challenges].sort(
  (a, b) => a.displayOrder - b.displayOrder
);

export const verifiedChallenges = sortedChallenges.filter(
  (challenge) => challenge.dataStatus === "verified"
);

export const challengeProofLinkKeys = [
  "githubUrl",
  "liveUrl",
  "mediumUrl",
  "devtoUrl",
  "certificateUrl",
  "participationUrl",
  "linkedinPostUrl",
  "socialPostUrl",
  "projectUrl",
] as const;

export type ChallengeProofLinkKey = (typeof challengeProofLinkKeys)[number];
