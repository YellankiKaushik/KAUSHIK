import { motion } from "framer-motion";
import { Users, ExternalLink } from "lucide-react";

const responsibilities = [
  {
    title: "Google Crowdsource VBIT | Marketing",
    duration: "2023–2024",
    description:
      "Owned event growth as a product by defining the audience acquisition strategy and execution roadmap, resulting in a 45–50% increase in participant adoption and improved engagement across multiple technology workshops. Leveraged data-backed promotion and community-driven outreach to scale participation.",
    tools:
      "Canva, Instagram, WhatsApp Communities, Google Forms",
    link: "https://www.instagram.com/p/CstD5DVRwvl/?hl=en&img_index=1",
  },
  {
    title: "Aashay VBIT | Social Media & Promotions",
    duration: "2023–2024",
    description:
      "Treated social media campaigns as growth experiments, planning and executing multi-platform initiatives that increased digital reach and event discovery by 50–60%. Owned the full content lifecycle including ideation, creation, distribution, performance analysis, and iteration.",
    tools:
      "Canva, Adobe Premiere Pro, Instagram, YouTube",
    link: "https://www.instagram.com/p/CxVLnPTRs0a/?hl=en&img_index=4",
  },
];

const PositionOfResponsibilitySection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Position of Responsibility
        </motion.h2>

        <div className="space-y-6">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-cosmic rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">
                      <strong>{item.title}</strong>
                    </h3>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary transition-colors"
                      title="View on Instagram"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <span className="inline-block mb-3 mt-1 px-3 py-1 text-xs rounded-full bg-gradient-neon/20 text-accent-light border border-accent/30">
                    {item.duration}
                  </span>

                  <p className="text-white/75 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <p className="text-white/60 text-xs">
                    <strong>Tools:</strong> {item.tools}
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

export default PositionOfResponsibilitySection;
