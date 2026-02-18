import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users, Cpu } from "lucide-react";

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
      "Analytical Thinking",
       "Problem Solving",
        "Product Thinking",
          "Data Interpretation",
      "Team Collaboration",
    ],
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

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center text-glow"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-5">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="glass-card p-5 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-cosmic rounded-lg">
                  <div className="w-4 h-4 text-white flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {category.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full
                                   bg-gradient-neon/20 text-accent-light
                                   border border-accent/30"
                      >
                        {skill}
                      </span>
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
