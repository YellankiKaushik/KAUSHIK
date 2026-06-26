import { motion } from "framer-motion";
import { User, Brain } from "lucide-react";

const featuredHighlights = [
  {
    title: "Builder Mindset",
    description:
      "I learn by building practical AI and software systems. My work connects full-stack interfaces, serverless APIs, AI integrations, dashboards, automation, and clear product thinking into projects that can be tested, explained, and improved.",
  },
  {
    title: "What I Build",
    description:
      "I work across AI-enabled web apps, dashboards, agents, automation tools, NLP workflows, and decision-support systems. My focus is on connecting real problems with practical software.",
  },
  {
    title: "Where I'm Heading",
    description:
      "I am focused on growing into AI and software roles where I can build practical systems, learn fast, document clearly, and keep shipping better projects through real execution.",
  },
];

const FeaturedInSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-neon opacity-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center text-glow"
        >
          About Me
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="glass-card p-4 md:p-6 hover-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/90 backdrop-blur rounded-lg border border-white/30 shadow-lg">
                  {index === 0 ? (
                    <User className="w-4 h-4 text-primary" />
                  ) : (
                    <Brain className="w-4 h-4 text-primary" />
                  )}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
