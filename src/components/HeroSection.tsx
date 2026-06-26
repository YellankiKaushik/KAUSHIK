import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import { trackEvent } from "@/utils/analytics";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-display leading-tight">
              Kaushik Yellanki
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {[
                {
                  Icon: FileText,
                  text: "Resume",
                  href: "https://drive.google.com/file/d/1l0pPWynlUP4p-aNgsQq_K7k3HYx15xS1/view",
                  eventName: "resume_click",
                  destination: "resume",
                },
                {
                  Icon: Github,
                  text: "GitHub",
                  href: "https://github.com/YellankiKaushik",
                  eventName: "github_click",
                  destination: "github_profile",
                },
                {
                  Icon: Linkedin,
                  text: "LinkedIn",
                  href: "https://www.linkedin.com/in/yellankikaushik/",
                  eventName: "linkedin_click",
                  destination: "linkedin_profile",
                },
                {
                  Icon: Mail,
                  text: "Email",
                  href: "mailto:kaushikyellanki@gmail.com",
                  eventName: "email_click",
                  destination: "mailto",
                },
              ].map(({ Icon, text, href, eventName, destination }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(eventName, {
                      location: "hero",
                      destination,
                    })
                  }
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="
        glass-card
        px-4 py-2
        flex items-center gap-2
        text-sm
        justify-center
        hover-glow
      "
                >
                  <span className="text-primary-light">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-white">
                    {text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div className="order-1 md:order-2 flex justify-center mb-6 md:mb-0">
            <img
              src={profileImage}
              alt="Kaushik Yellanki profile photo"
              className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-primary-dark/50 shadow-neon"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
