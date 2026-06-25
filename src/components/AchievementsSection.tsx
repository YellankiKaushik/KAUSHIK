import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Farmer OS - Top 50 at Lyzr Agentathon 2026",
    year: "2026",
    description:
      "Selected among the Top 50 teams for Farmer OS, an AI-agent-based agricultural decision-support project built around crop planning, advisory workflows, and farmer-focused automation.",
    link: "https://www.lyzr.ai/agentathon/",
  },
  {
    title: "1M1B Open-Source LLM Project Recognition",
    year: "2026",
    description:
      "Recognized for contributing to an open-source LLM project focused on turning unstructured thoughts into structured plans and practical action workflows.",
    link: "https://drive.google.com/file/d/170fFOFbElEn-t0khhUERrzq5OxOxutj_/view?usp=drive_link",
  },
  {
    title: "Topmate AI Project Documentation Guide",
    year: "2026",
    description:
      "Created an AI-assisted documentation workflow that helps developers understand a codebase and generate clear project explanation documents for portfolios, submissions, and technical storytelling.",
    link: "https://topmate.io/kaushik_yellanki/2033727",
  },
  {
    title: "Hackathon Organizer - Google Crowdsource VBIT",
    year: "2023",
    description:
      "Helped organize a student hackathon under Google Crowdsource VBIT, supporting event planning, community coordination, participant communication, and execution.",
    link: "https://www.instagram.com/p/Cxx1J4HvS7Z/?hl=en&img_index=10",
  },
  {
    title: "Medium Writing and Technical Notes",
    year: "2026",
    description:
      "Published long-form writing on ideas, projects, and technical learning, using writing as a way to explain systems, document thinking, and share project-building lessons.",
    link: "https://medium.com/@kaushikyellanki/the-abundance-of-space-theory-bbc8a5314615",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* IDENTICAL BACKGROUND TO EDUCATION */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute top-32 right-16 w-32 h-32 bg-gradient-neon rounded-full blur-3xl opacity-8"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-cosmic rounded-full blur-2xl opacity-8"
        animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Achievements
        </motion.h2>
        <div className="space-y-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 hover-glow"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              {/* META ROW - MATCHES EDUCATION EXACTLY */}
              <div className="flex items-center gap-3 text-white/70 mb-4">
                <span className="font-medium text-accent-light">
                  Achievement
                </span>
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{item.year}</span>
                </div>
              </div>

              <p className="text-white/75 leading-relaxed mb-4">
                {item.description}
              </p>
              {/* LINK ROW - Styled Like Education Highlight Row */}
              {item.link && (
                <div className="text-accent-light font-medium">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Related Work
                  </a>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection;
