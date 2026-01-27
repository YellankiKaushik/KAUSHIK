import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";

const projects = [
  {
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "A full-stack AI analytics platform that analyzes YouTube comments to generate sentiment insights and engagement trends for data-driven content decisions.",
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
      "A voice-driven AI assistant that converts spoken daily plans into structured schedules using LLMs and speech-based interfaces.",
    image: vaaniplanImg,
    link: "https://yellankikaushik.github.io/VaaniPlan/",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    title: "Gym Membership Management System",
    description:
      "A full-stack web application to manage gym memberships, plans, attendance, and administrative workflows.",
    image: gymImg,
    link: "https://github.com/YellankiKaushik/Gym-Membership",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute top-8 md:top-16 left-10 md:left-20 w-20 md:w-28 h-20 md:h-28 bg-gradient-cosmic rounded-full blur-3xl opacity-8"
        animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-center text-glow"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card overflow-hidden hover-glow group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-cosmic/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold text-white mb-2 font-display">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-3 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-neon/20 text-accent-light rounded-full text-xs border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-xs md:text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
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
