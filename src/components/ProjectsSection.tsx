import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
      "Created an interactive Tableau dashboard that translates Google Trends data into clear product insights.",
    image: TabImg,
    link: "https://public.tableau.com/app/profile/yellanki.kaushik",
    tags: ["Tableau", "Google Trends", "Data Visualization"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-12 text-center text-glow"
        >
          Projects
        </motion.h2>

        {/* 🔥 Clean Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 hover-glow flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow">

                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-gradient-neon/20 text-accent-light
                                 border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-light hover:text-white transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;