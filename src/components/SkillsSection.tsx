import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";


const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  /*{
    category: "Core Computer Science",
    icon: <Cpu className="w-4 h-4" />,
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Time & Space Complexity",
    ],
  },*/
  {
    category: "AI / Machine Learning",
    icon: <Database className="w-4 h-4" />,
    items: [
      "scikit-learn",
      "PyTorch",
      "Hugging Face Transformers",
      "NLTK",
      "Model Deployment",
      "ML Inference Pipelines",
    ],
  },
  {
    category: "Web Development",
    icon: <PenTool className="w-4 h-4" />,
    items: [
      "React",
      "Next.js",
      "Flask",
      "FastAPI",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  /*{
    category: "APIs & Integrations",
    icon: <Database className="w-4 h-4" />,
    items: [
      "OpenAI API",
      "YouTube Data API",
      "Web Speech API",
    ],
  },*/
  {
    category: "Tools & Deployment",
    icon: <PenTool className="w-4 h-4" />,
    items: [
      "Git",
      "GitHub",
      "Streamlit Community Cloud",
      "GitHub Pages",
      "Render",
    ],
  },
  {
    category: "Visualization",
    icon: <Database className="w-4 h-4" />,
    items: ["Tableau", "Streamlit"],
  },
  {
    category: "Professional Skills",
    icon: <Users className="w-4 h-4" />,
    items: [
      "Analytical Thinking",
      "Structured Problem Solving & Communication",
      "Data-Driven Decision Making",
       "Problem Solving",
        "Product Thinking",
          "Data Interpretation",
      "Team Collaboration",
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