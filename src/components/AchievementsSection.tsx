import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const achievements = [
  {
    title: "Tech Saksham AI Internship",
    year: "2025",
    description:
      "Completed an industry-aligned AI internship under the Tech Saksham Program (Edunet Foundation), where I built an AI-based Diagnosis & Prediction System using real-world datasets, model pipelines, and deployment-ready architecture.",
    link: "https://github.com/YellankiKaushik/AI_Diagnosis_Prediction_System",
  },
  {
    title: "YouTube Sentiment Analysis Platform",
    year: "2024",
    description:
      "Designed and documented a full-stack AI platform that analyzes YouTube comments to extract sentiment insights and engagement trends, enabling data-driven content analysis and decision-making.",
    link: "https://yellankikaushik.github.io/",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-cosmic rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-primary-light" />
                  </div>

                  <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-gradient-neon/20 text-accent-light border border-accent/30">
                    {item.year}
                  </span>

                  <p className="text-white/75 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
