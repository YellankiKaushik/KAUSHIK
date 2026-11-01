import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  PenTool,
  Server,
  Trophy,
  Users,
} from "lucide-react";


const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    /* context: "Used across AI prototypes, React/Vite interfaces, Python ML workflows, and deployed portfolio projects.", */
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="w-4 h-4" />,
    /* context: "Visible in AGROGUIA.AI, YouTube Review, AI Crowd Intelligence, Sistemaa Electoral, and internship ML evaluation work.", */
    items: [
      "scikit-learn",
      "PyTorch",
      "Hugging Face Transformers",
      "NLTK",
      "OpenAI API",
      "Gemini API",
      "OpenRouter",
      "Model Deployment",
      "ML Inference Pipelines",
    ],
  },
  {
    category: "Web Development",
    icon: <PenTool className="w-4 h-4" />,
    /* context: "Used to build recruiter-facing dashboards, AI product interfaces, case-study pages, and the portfolio assistant UI.", */
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Streamlit",
    ],
  },
  {
    category: "Backend / APIs",
    icon: <Server className="w-4 h-4" />,
    /* context: "Supported by full-stack projects with serverless routes, API integrations, auth foundations, and data-backed workflows.", */
    items: [
      "Node.js",
      "Express",
      "Flask",
      "FastAPI",
      "MongoDB",
      "Mongoose",
      "Vercel Serverless Functions",
      "Google Apps Script",
      "JWT",
      "REST APIs",
      "YouTube Data API",
      "Notion API",
      "OpenWeather API",
    ],
  },
  {
    category: "Data & Visualization",
    icon: <Database className="w-4 h-4" />,
    /* context: "Shown through Tableau work, Recharts dashboards, sentiment analysis views, and model-output interpretation.", */
    items: [
      "Tableau",
      "Recharts",
      "Streamlit",
      "Data Analysis",
      "Data Visualization",
      "Sentiment Visualization",
      "Google Trends Analysis",
    ],
  },
  {
    category: "Tools & Development Workflow",
    icon: <GitBranch className="w-4 h-4" />,
    /* context: "Used for open-source project work, documentation, version control, testing, and deployment-ready builds.", */
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Vitest",
      "Technical Documentation",
      "Project Case Studies",
    ],
  },
  {
    category: "Deployment & Platforms",
    icon: <Cloud className="w-4 h-4" />,
    /* context: "Supported by live projects deployed across frontend, serverless, Streamlit, and Google Cloud environments.", */
    items: [
      "GitHub Pages",
      "Vercel",
      "Google Cloud Run",
      "Streamlit Community Cloud",
      "Render",
    ],
  },
  {
    category: "Product / Builder Skills",
    icon: <Trophy className="w-4 h-4" />,
    /* context: "Demonstrated through practical AI products, hackathon prototypes, and challenge participation pages.", */
    items: [
      "Hackathon Execution",
      "Time-Bound Building",
      "Fast Learning",
      "Proof-of-Work",
      "Product Thinking",
      "Problem Framing",
      "Technical Writing",
    ],
  },
  {
    category: "Professional Skills",
    icon: <Users className="w-4 h-4" />,
    /* context: "Supported by internship work, community roles, event promotion, team collaboration, and technical communication.", */
    items: [
      "Analytical Thinking",
      "Structured Problem Solving",
      "Communication",
      "Team Collaboration",
      "Community Engagement",
      "Content Coordination",
      "Data Interpretation",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* SAME background as Education */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      {/* SAME floating glows as Education */}
      <motion.div
        className="absolute top-32 right-16 w-32 h-32 bg-gradient-neon rounded-full blur-3xl opacity-8"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-cosmic rounded-full blur-2xl opacity-8"
        animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* SAME heading style as Education */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-start gap-4">

                {/* ORIGINAL ICON STYLE (UNCHANGED) */}
                <div className="p-2 bg-gradient-cosmic rounded-lg">
                  <div className="w-4 h-4 text-white flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.category}
                  </h3>

                  <p className="mb-5 max-w-3xl text-sm leading-relaxed text-white/65">
                    {"context" in category ? String(category.context) : null}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="
                          px-4 py-2
                          bg-gradient-cosmic/20
                          text-primary-light
                          rounded-full
                          text-sm
                          border border-primary/30
                          hover:border-primary/60
                          transition-all
                          backdrop-blur-sm
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
