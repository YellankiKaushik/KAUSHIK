import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certificates" },
  { id: "position-of-responsibility", label: "Responsibility" },
  { id: "achievements", label: "Achievements" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 md:py-4">
          <div className="flex flex-wrap items-center justify-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10 max-w-full overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-2 md:px-3 py-1.5 md:py-2 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap
                  ${
                    activeSection === item.id
                      ? "text-white bg-gradient-cosmic shadow-neon"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-cosmic rounded-full -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
