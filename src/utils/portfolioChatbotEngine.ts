import { portfolioKnowledge } from "@/data/portfolioKnowledge";

export type ChatbotAnswer = {
  content: string;
  category:
    | "identity"
    | "projects"
    | "project_detail"
    | "skills"
    | "experience"
    | "education"
    | "certifications"
    | "achievements"
    | "writing"
    | "contact"
    | "resume"
    | "refusal"
    | "fallback";
};

const refusalResponse =
  "I can answer questions about Kaushik's portfolio, projects, skills, experience, writing, resume, and contact links. That information is not listed in the portfolio, so I do not want to guess.";

const fallbackResponse =
  'I can help with Kaushik\'s projects, skills, experience, education, certifications, achievements, writing, resume, and contact links. Try asking "What are Kaushik\'s strongest AI projects?" or "How can I contact him?"';

const normalizeQuestion = (question: string) =>
  question
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[''']/g, "'")
    .replace(/[^a-z0-9.+#\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasAny = (question: string, keywords: string[]) =>
  keywords.some((keyword) => question.includes(keyword));

const joinList = (items: readonly string[]) => items.join(", ");

const getProjectBySlug = (slug: string) =>
  portfolioKnowledge.projects.find((project) => project.slug === slug);

const projectAliases = [
  {
    slug: "agroguia-ai",
    aliases: ["agroguia", "agroguia ai", "farm advisory", "farm", "agriculture"],
  },
  {
    slug: "youtube-review",
    aliases: [
      "youtube review",
      "youtube ai review",
      "integrated review",
      "youtube videos",
      "youtube project",
    ],
  },
  { slug: "hazlo", aliases: ["hazlo", "notion sync", "voice task"] },
  {
    slug: "ai-crowd-intelligence",
    aliases: ["crowd intelligence", "ai crowd", "crowd navigation"],
  },
  {
    slug: "sistemaa-electoral",
    aliases: ["sistemaa", "electoral", "election", "voter"],
  },
  {
    slug: "gym-membership",
    aliases: ["fitzone", "gym membership", "gym"],
  },
  {
    slug: "krishi-seva",
    aliases: ["krishi", "krishi seva", "weather advisory"],
  },
  { slug: "psymatch", aliases: ["psymatch", "dating", "personality"] },
  { slug: "vaaniplan", aliases: ["vaaniplan", "vaani plan", "daily planning"] },
  {
    slug: "google-product-analysis",
    aliases: ["public interest", "google products", "tableau", "google trends"],
  },
] as const;

const findNamedProject = (question: string) => {
  const match = projectAliases.find(({ aliases }) =>
    aliases.some((alias) => question.includes(alias))
  );

  return match ? getProjectBySlug(match.slug) : undefined;
};

const formatProjectLinks = (
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
) => {
  const links = [
    project.github
      ? `GitHub: ${project.github}`
      : "GitHub link: That link is not currently listed in the portfolio.",
    project.live
      ? `Live link: ${project.live}`
      : "Live link: That link is not currently listed in the portfolio.",
    project.medium
      ? `Medium write-up: ${project.medium}`
      : "Medium link: That link is not currently listed in the portfolio.",
  ];

  return links.join(" ");
};

const answerProjectDetail = (
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
): ChatbotAnswer => ({
  category: "project_detail",
  content: `${project.title}: ${project.description} Tech stack: ${joinList(
    project.techStack
  )}. ${formatProjectLinks(project)}`,
});

const answerProjects = (question: string): ChatbotAnswer => {
  const visibleProjects = portfolioKnowledge.projectMetadata.visibleHomepageProjectSlugs
    .map(getProjectBySlug)
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const hiddenProjects = portfolioKnowledge.projectMetadata.hiddenPreservedProjectSlugs
    .map(getProjectBySlug)
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const isAiFocused = hasAny(question, ["strongest", "ai project", "ai roles"]);
  const isFullStackFocused = hasAny(question, ["full stack", "full-stack"]);

  if (isAiFocused) {
    return {
      category: "projects",
      content:
        "Based on the portfolio, Kaushik shows AI/software proof through AGROGUIA.AI, Integrated Review of YouTube Videos, Hazlo, AI Crowd Intelligence Assistant, and Sistemaa Electoral. This is portfolio evidence, not an employment guarantee.",
    };
  }

  if (isFullStackFocused) {
    return {
      category: "projects",
      content:
        "For full-stack relevance, the portfolio highlights AGROGUIA.AI, Integrated Review of YouTube Videos, Hazlo, Sistemaa Electoral, and FitZone Gym Membership Management System. These show React/Next.js/Vite frontends, backend or serverless flows, APIs, dashboards, and deployment work.",
    };
  }

  return {
    category: "projects",
    content: `Visible homepage projects: ${visibleProjects
      .map((project) => project.title)
      .join("; ")}. Hidden/preserved project routes also exist for: ${hiddenProjects
      .map((project) => project.title)
      .join("; ")}.`,
  };
};

const answerIdentity = (): ChatbotAnswer => ({
  category: "identity",
  content: `${portfolioKnowledge.identity.fullName} is an ${portfolioKnowledge.identity.currentPositioning}. ${portfolioKnowledge.identity.summary} He works across ${portfolioKnowledge.positioning.aboutHighlights[1].description}`,
});

const answerSkills = (): ChatbotAnswer => ({
  category: "skills",
  content: `Kaushik's verified skills include languages: ${joinList(
    portfolioKnowledge.skills.languages
  )}. AI/ML: ${joinList(
    portfolioKnowledge.skills.aiMachineLearning
  )}. Web: ${joinList(
    portfolioKnowledge.skills.webDevelopment
  )}. Tools/deployment: ${joinList(
    portfolioKnowledge.skills.toolsDeployment
  )}. Visualization: ${joinList(portfolioKnowledge.skills.visualization)}.`,
});

const answerExperience = (): ChatbotAnswer => ({
  category: "experience",
  content: portfolioKnowledge.experiences
    .map((experience) => {
      const linkText = experience.projectLink
        ? ` Proof/work link: ${experience.projectLink}`
        : "";
      return `${experience.title} at ${experience.company} (${experience.period}): ${experience.description}${linkText}`;
    })
    .join("\n\n"),
});

const answerEducation = (): ChatbotAnswer => ({
  category: "education",
  content: portfolioKnowledge.education
    .map(
      (item) =>
        `${item.degree}, ${item.school}, ${item.period}, score: ${item.score}.`
    )
    .join(" "),
});

const answerCertifications = (question: string): ChatbotAnswer => {
  const wantsAll = hasAny(question, ["all", "list", "every"]);
  const certifications = wantsAll
    ? portfolioKnowledge.certifications
    : portfolioKnowledge.certifications.slice(0, 5);
  const suffix = wantsAll
    ? ""
    : " Ask for all certifications if you want the full list.";

  return {
    category: "certifications",
    content: `Verified certifications include: ${certifications
      .map((certification) => `${certification.title} (${certification.issuer})`)
      .join("; ")}.${suffix}`,
  };
};

const answerAchievements = (): ChatbotAnswer => ({
  category: "achievements",
  content: `Verified achievements include: ${portfolioKnowledge.achievements
    .map((achievement) => `${achievement.title} (${achievement.year})`)
    .join("; ")}.`,
});

const answerWriting = (): ChatbotAnswer => ({
  category: "writing",
  content: `Kaushik writes on Medium and Dev.to. Medium: ${portfolioKnowledge.writing.mediumProfile}. Dev.to: ${portfolioKnowledge.writing.devToProfile}. Project-level Medium article links are only shown when added; the current project Medium fields are empty. Verified achievement-level Medium article: ${portfolioKnowledge.writing.achievementLevelMediumArticle}.`,
});

const answerContact = (): ChatbotAnswer => ({
  category: "contact",
  content: `You can contact or view Kaushik here: Email: ${portfolioKnowledge.contact.email}. GitHub: ${portfolioKnowledge.contact.github}. LinkedIn: ${portfolioKnowledge.contact.linkedIn}. Medium: ${portfolioKnowledge.contact.medium}. Dev.to: ${portfolioKnowledge.contact.devTo}.`,
});

const answerResume = (): ChatbotAnswer => ({
  category: "resume",
  content: `Kaushik's resume link is: ${portfolioKnowledge.contact.resume}`,
});

const answerRoleRelevance = (question: string): ChatbotAnswer => {
  if (
    hasAny(question, [
      "recruiter",
      "evaluating",
      "evaluate",
      "candidate",
      "role fit",
      "hiring",
      "ai software role",
      "software role",
    ])
  ) {
    return {
      category: "projects",
      content:
        "From a recruiter's perspective, Kaushik's portfolio shows relevant evidence for AI/software roles through projects such as AGROGUIA.AI, YouTube Review, Hazlo, and AI Crowd Intelligence Assistant. It demonstrates practical work across AI-assisted products, full-stack interfaces, NLP-style analysis, dashboards, and deployment-focused project building. This is portfolio evidence, not an employment guarantee.",
    };
  }

  if (hasAny(question, ["full stack", "full-stack", "software developer"])) {
    return {
      category: "projects",
      content:
        "Based on the portfolio, Kaushik shows relevant proof for software/full-stack roles through projects like AGROGUIA.AI, YouTube Review, Hazlo, Sistemaa Electoral, and FitZone. This is portfolio evidence, not an employment guarantee.",
    };
  }

  return {
    category: "projects",
    content:
      "Based on the portfolio, Kaushik shows relevant proof for AI/software roles through projects like AGROGUIA.AI, YouTube Review, Hazlo, and AI Crowd Intelligence Assistant. This is portfolio evidence, not an employment guarantee.",
  };
};

const shouldRefuse = (question: string) =>
  hasAny(question, [
    "salary",
    "compensation",
    "ctc",
    "api key",
    "apikey",
    "secret key",
    "system prompt",
    "internal instruction",
    "private",
    "phone number",
    "home address",
    "passport",
    "aadhaar",
    "fake",
    "employment verification",
    "verify employment",
    "real users",
    "production users",
    "adoption",
    "revenue",
    "healthcare advice",
    "medical advice",
    "legal advice",
    "financial advice",
    "government approved",
    "official endorsement",
  ]);

export const getPortfolioAnswer = (question: string): ChatbotAnswer => {
  const normalizedQuestion = normalizeQuestion(question);

  if (!normalizedQuestion) {
    return { category: "fallback", content: fallbackResponse };
  }

  if (shouldRefuse(normalizedQuestion)) {
    return { category: "refusal", content: refusalResponse };
  }

  const namedProject = findNamedProject(normalizedQuestion);
  if (namedProject) {
    return answerProjectDetail(namedProject);
  }

  if (
    hasAny(normalizedQuestion, [
      "relevant",
      "suitable",
      "recruiter",
      "evaluating",
      "evaluate",
      "candidate",
      "role fit",
      "hiring",
      "ai roles",
      "ai role",
      "ai software role",
      "software role",
      "full stack roles",
      "full-stack roles",
      "software developer",
      "ai builder",
    ])
  ) {
    return answerRoleRelevance(normalizedQuestion);
  }

  if (
    hasAny(normalizedQuestion, [
      "who is kaushik",
      "tell me about kaushik",
      "who are you",
      "portfolio summary",
      "about kaushik",
    ])
  ) {
    return answerIdentity();
  }

  if (
    hasAny(normalizedQuestion, [
      "projects",
      "built",
      "strongest projects",
      "ai projects",
      "full stack projects",
      "full-stack projects",
      "list projects",
    ])
  ) {
    return answerProjects(normalizedQuestion);
  }

  if (
    hasAny(normalizedQuestion, [
      "technical skills",
      "skills",
      "tech stack",
      "technologies",
    ])
  ) {
    return answerSkills();
  }

  if (
    hasAny(normalizedQuestion, [
      "experience",
      "internship",
      "internships",
      "work experience",
      "professional experience",
    ])
  ) {
    return answerExperience();
  }

  if (hasAny(normalizedQuestion, ["education", "degree", "college", "school"])) {
    return answerEducation();
  }

  if (
    hasAny(normalizedQuestion, [
      "certification",
      "certifications",
      "certificate",
      "certificates",
    ])
  ) {
    return answerCertifications(normalizedQuestion);
  }

  if (hasAny(normalizedQuestion, ["achievement", "achievements", "awards"])) {
    return answerAchievements();
  }

  if (
    hasAny(normalizedQuestion, [
      "medium",
      "dev.to",
      "devto",
      "articles",
      "writing",
      "project notes",
    ])
  ) {
    return answerWriting();
  }

  if (hasAny(normalizedQuestion, ["resume", "cv", "download resume"])) {
    return answerResume();
  }

  if (
    hasAny(normalizedQuestion, [
      "contact",
      "email",
      "linkedin",
      "github",
      "reach him",
      "reach kaushik",
    ])
  ) {
    return answerContact();
  }

  return { category: "fallback", content: fallbackResponse };
};
