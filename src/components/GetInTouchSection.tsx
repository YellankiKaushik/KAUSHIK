import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const contacts = [
  {
    label: "Email",
    icon: <Mail className="w-4 h-4" />,
    link: "mailto:kaushikyellanki@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/yellankikaushik/",
  },
  {
    label: "GitHub",
    icon: <Github className="w-4 h-4" />,
    link: "https://github.com/YellankiKaushik",
  },
  {
    label: "Resume",
    icon: <FileText className="w-4 h-4" />,
    link: "https://drive.google.com/file/d/1w6gZTB2CJVDK4JvasefBR9ngU9InEm9z/view",
  },
];

const GetInTouchSection = () => {
  return (
    <section className="py-8 md:py-10 px-4 relative overflow-hidden">

      {/* Same subtle overlay as certifications */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Same heading style */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center text-glow"
        >
          Get in Touch
        </motion.h2>

        {/* Horizontal compact layout */}
        <div className="flex flex-wrap justify-center gap-4">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="
                glass-card
                px-5 py-3
                flex items-center gap-2
                text-sm
                min-w-[150px]
                justify-center
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