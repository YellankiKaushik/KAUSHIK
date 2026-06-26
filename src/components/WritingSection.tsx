import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const writingItems = [
  {
    title: "Medium Articles",
    description:
      "Long-form project stories, technical breakdowns, and reflections on AI, software, and product-building.",
    link: "https://medium.com/@kaushikyellanki",
    cta: "Read on Medium",
    eventName: "medium_click",
    destination: "medium_profile",
  },
  {
    title: "Dev.to Posts",
    description:
      "Developer-focused write-ups, implementation notes, and project documentation written for technical readers.",
    link: "https://dev.to/kaushikyellanki",
    cta: "Read on Dev.to",
    eventName: "devto_click",
    destination: "devto_profile",
  },
  {
    title: "Project Notes",
    description:
      "Concise notes and write-ups connected to my portfolio projects. I manually add project article links as each write-up is published.",
    link: "",
    cta: "",
    eventName: "",
    destination: "",
  },
];

const WritingSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4 text-center text-glow"
        >
          Writing & Project Notes
        </motion.h2>

        <p className="text-center text-white/75 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">
          I use writing to explain what I build, document technical decisions,
          and turn projects into clear long-form notes for readers, recruiters,
          and builders.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {writingItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 hover-glow flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/75 text-sm leading-relaxed mb-5 flex-grow">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(item.eventName, {
                      location: "writing",
                      destination: item.destination,
                    })
                  }
                  className="inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  {item.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
