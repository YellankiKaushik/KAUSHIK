import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";

const skills = [
  {
    category: "Programming & Core Tech",
    icon: <Code2 className="w-4 h-4" />,
    items: "Python, C, SQL, HTML, CSS, JavaScript",
  },
  {
    category: "Frameworks & Libraries",
    icon: <PenTool className="w-4 h-4" />,
    items:
      "Flask, FastAPI, React, Next.js, Tailwind CSS, NumPy, Pandas, scikit-learn, Hugging Face Transformers",
  },
  {
    category: "Databases",
    icon: <Database className="w-4 h-4" />,
    items: "MongoDB, MySQL",
  },
  {
    category: "Tools & Platforms",
    icon: <PenTool className="w-4 h-4" />,
    items:
      "Git, GitHub, VS Code, Jupyter Notebook, Tableau, Power BI, OpenAI API, YouTube Data API, Render, GitHub Pages",
  },
  {
    category: "Professional Skills",
    icon: <Users className="w-4 h-4" />,
    items:
      "Analytical Thinking, Problem Solving, Product Thinking, API Design, Data Interpretation, Team Collaboration",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-8 md:py-10 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute top-12 md:top-20 left-8 md:left-16 w-16 md:w-20 h-16 md:h-20 bg-gradient-cosmic rounded-full blur-3xl opacity-8"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-12 md:bottom-24 right-10 md:right-20 w-12 md:w-16 h-12 md:h-16 bg-gradient-neon rounded-full blur-2xl opacity-8"
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center text-glow"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-3 md:space-y-4">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-4 md:p-5 hover-glow"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 bg-gradient-cosmic rounded-lg">
                  <div className="w-4 h-4 text-white flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                    {category.category}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    {category.items}
                  </p>
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
