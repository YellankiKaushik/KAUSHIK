import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";

const projects = [
  {
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "Built an AI-powered review intelligence system that transforms thousands of YouTube comments into actionable sentiment insights and summaries, reducing manual review effort by 70%+ and accelerating content and marketing decisions.",
    image: youtubeImg,
    link: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    tags: [
      "NLP",
      "Sentiment Analysis",
      "Hugging Face",
      "OpenAI API",
      "YouTube Data API",
    ],
  },
  {
    title: "VaaniPlan — Voice-First AI Daily Planning Assistant",
    description:
      "Created a voice-first AI planning prototype that eliminates typing and manual task structuring by using LLM reasoning, reducing planning effort by 60–70%, improving efficiency by ~50%, and earning acceptance in the Unleash LLM Innovation Challenge.",
    image: vaaniplanImg,
    link: "https://yellankikaushik.github.io/VaaniPlan/",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    title: "Gym Membership Management System",
    description:
      "Created a zero-cost, production-ready membership management system that replaces manual tracking with automated expiry alerts, reducing admin effort by 65–70% and preventing 30–40% of missed renewals for small gyms.",
    image: gymImg,
    link: "https://github.com/YellankiKaushik/Gym-Membership",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
  {
    title: "Public Interest Analysis of Google Products",
    description:
      "Created an interactive Tableau dashboard that translates Google Trends data into clear product insights, showing 65–70% sustained interest in YouTube and Search and 30%+ emerging growth in Gemini.",
    image: TabImg,
    link: "https://public.tableau.com/app/profile/yellanki.kaushik/viz/PublicInterestAnalysisofGoogleProducts/Dashboard2",
    tags: ["Tableau", "Google Trends", "Data Cleaning", "Data Visualization"],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextProject = () => {
    setIndex([(index + 1) % projects.length, 1]);
  };

  const prevProject = () => {
    setIndex([(index - 1 + projects.length) % projects.length, -1]);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl font-bold text-white text-center mb-12 text-glow">
          Projects
        </h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevProject}
            className="absolute left-0 md:-left-14 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* PROJECT CARD */}
          <div className="w-full overflow-hidden">

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-card p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">

                  <img
                    src={projects[index].image}
                    alt={projects[index].title}
                    loading="lazy"
                    className="rounded-xl shadow-lg"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {projects[index].title}
                    </h3>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {projects[index].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[index].tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-neon/20 text-accent-light border border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={projects[index].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-light hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextProject}
            className="absolute right-0 md:-right-14 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;