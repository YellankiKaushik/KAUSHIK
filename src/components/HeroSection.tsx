import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

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
{/* Background */}
           {/* <motion.h2 className="text-lg sm:text-xl md:text-2xl text-primary-light mb-6 font-sans font-light leading-relaxed">
              AI Engineer and Data Analyst
            </motion.h2>

            <motion.p className="text-white/70 mb-8 text-base md:text-lg leading-relaxed">
              AI Engineer building intelligent, data-driven systems with real-world
              business impact.
            </motion.p> */}

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {[
                
                {
                  Icon: Mail,
                  text: "Resume",
                  href: "https://drive.google.com/file/d/1JD5P8LJSwRDSPN0Ts2-7eiyeGArwhktl/view?usp=sharing",
                },
                {
                  Icon: Linkedin,
                  text: "LinkedIn",
                  href: "https://www.linkedin.com/in/yellankikaushik/",
                },
              ].map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 text-white/60 hover:text-primary-light transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </a>
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
