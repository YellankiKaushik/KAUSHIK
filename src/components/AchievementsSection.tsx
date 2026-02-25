import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Tech Saksham AI Internship",
    year: "2025",
    description:
      "Completed an industry-aligned AI internship under the Tech Saksham Program (Edunet Foundation), where I built an AI-based Diagnosis & Prediction System using real-world datasets, model pipelines, and deployment-ready architecture.",
    link: "https://github.com/YellankiKaushik/AI_Diagnosis_Prediction_System",
  },
  {
    title: "Hackathon Organizer — Google Crowdsource",
    year: "2023",
    description:
      "Organized and coordinated a community hackathon as part of the Google Crowdsource platform, enabling participants to contribute to real-world language and AI datasets while fostering collaboration and problem-solving.",
    link: "https://www.instagram.com/p/Cxx1J4HvS7Z/?hl=en&img_index=10",
  },
  {
    title: "YouTube Sentiment Analysis Platform",
    year: "2025",
    description:
      "Designed and documented a full-stack AI platform that analyzes YouTube comments to extract sentiment insights and engagement trends.",
    link: "https://yellankikaushik.github.io/",
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

              {/* META ROW — MATCHES EDUCATION EXACTLY */}
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

              {/* LINK ROW — Styled Like Education Highlight Row */}
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

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;