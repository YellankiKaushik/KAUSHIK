import { motion } from "framer-motion";
import { BookOpenText, Code2, Mail, Linkedin, Github, FileText } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const contacts = [
  {
    label: "Email",
    icon: <Mail className="w-4 h-4" />,
    link: "mailto:kaushikyellanki@gmail.com",
    eventName: "email_click",
    trackingParams: {
      location: "contact",
      destination: "mailto",
    },
  },
  {
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/yellankikaushik/",
    eventName: "linkedin_click",
    trackingParams: {
      location: "contact",
      destination: "linkedin_profile",
    },
  },
  {
    label: "GitHub",
    icon: <Github className="w-4 h-4" />,
    link: "https://github.com/YellankiKaushik",
    eventName: "github_click",
    trackingParams: {
      location: "contact",
      destination: "github_profile",
    },
  },
  {
    label: "Resume",
    icon: <FileText className="w-4 h-4" />,
    link: "https://drive.google.com/file/d/1l0pPWynlUP4p-aNgsQq_K7k3HYx15xS1/view",
    eventName: "resume_click",
    trackingParams: {
      location: "contact",
      destination: "resume",
    },
  },
  {
    label: "Medium",
    icon: <BookOpenText className="w-4 h-4" />,
    link: "https://medium.com/@kaushikyellanki",
    eventName: "contact_medium_click",
    trackingParams: {
      label: "Medium",
    },
  },
  {
    label: "Dev.to",
    icon: <Code2 className="w-4 h-4" />,
    link: "https://dev.to/kaushikyellanki",
    eventName: "contact_devto_click",
    trackingParams: {
      label: "Dev.to",
    },
  },
];

const GetInTouchSection = () => {
  return (
    <section className="py-8 md:py-10 px-4 relative overflow-hidden">

      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-3 text-center text-glow"
        >
          Get in Touch
        </motion.h2>

        <p className="text-center text-white/80 text-sm md:text-base font-semibold mb-8">
          Open to full-time software and AI roles, AI product work, secure AI integrations, project collaboration, and technical conversations.
        </p>
        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(item.eventName, item.trackingParams)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="
                glass-card
                h-12 px-4
                flex items-center gap-2
                text-sm
                justify-center
                whitespace-nowrap
                hover-glow
              "
            >
              <span className="text-primary-light">
                {item.icon}
              </span>
              <span className="text-white">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
