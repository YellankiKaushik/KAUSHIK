import { motion } from "framer-motion";
import { Calendar, Instagram, Github } from "lucide-react";

import edunetLogo from "../assets/logos/edunet-logo.png";
import crowdsourceLogo from "../assets/logos/crowdsourcevbit.jpg";
import aashayLogo from "../assets/logos/Aashayvbit.jpg";

const experiences = [
  {
    title: "AI Engineer",
    company: "Tech Saksham Program (Edunet Foundation)",
    period: "Feb 2025 – Mar 2025",
    description:
    "Designed and deployed an interview-oriented AI decision support system that integrates multiple pre-trained machine learning models into a Streamlit-based web application. The project demonstrates end-to-end ML deployment, system design, and responsible AI communication by converting structured clinical inputs into real-time predictions while clearly defining ethical boundaries and system limitations.",
    skills: [
        "Machine Learning",
        "Python",
        "scikit-learn",
        "Streamlit",
        "Model Deployment",
        "System Design"
      ],
    projectLink:
      "https://aidiagnose.streamlit.app/",
    linktype: "live",
    logo: edunetLogo,
  },
  {
    title: "Marketing Associate",
    company: "Google Crowdsource VBIT",
    period: "2023 – 2024",
    description:
      "Led data-driven event marketing initiatives that grew campus event reach by 35–40% and increased repeat participation by ~25% through targeted promotions, word-of-mouth strategies, and cross-team collaboration.",
    skills: [
      "Campaign Planning",
      "Event Marketing Strategy",
      "Audience Acquisition Engagement",
      "Marketing ROI",
      "Word-of-Mouth",
      "Referral Marketing",
      "Customer Retention",
    ],
    projectLink:
      "https://www.instagram.com/p/CstD5DVRwvl/?hl=en&img_index=1",
    linktype: "instagram",
    logo: crowdsourceLogo,
  },
  {
    title: "Social Media & Promotions Associate",
    company: "Aashay VBIT",
    period: "2023 – 2024",
    description:
      "Managed end-to-end social media promotions, increasing audience reach and engagement by 40–50% and improving engagement efficiency by 25–30% through content optimization, campaign execution, and performance analysis.",
    skills: [
      "Social Media Strategy",
      "Content Lifecycle Management",
      "Campaign Analytics",
      "Brand Promotion",
      "Audience Engagement",
    ],
    projectLink:
      "https://www.instagram.com/p/CxVLnPTRs0a/?hl=en&img_index=4",
    linktype: "instagram",
    logo: aashayLogo,
  },
];
const ExperienceSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-cosmic rounded-full blur-3xl opacity-10"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-neon rounded-full blur-2xl opacity-10"
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
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
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-white/90 rounded-xl border border-white/30 shadow-lg">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>

                  <div className="flex items-center gap-3 text-white/70 mb-4 mt-1">
                    <span className="font-medium text-primary-light">
                      {experience.company}
                    </span>
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* ✅ Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill, i) => (
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

                  <a
                    href={experience.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium transition-colors"
                  >
                    {experience.linktype === "instagram" ? (
                      <Instagram className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                    View Work
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
