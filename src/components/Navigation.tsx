import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

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
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top: elementPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    } else {
      navigate(sectionId === "home" ? "/" : `/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    trackEvent("nav_logo_click", {
      label: "KY"
    });
    scrollToSection("home");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center py-3 md:py-4">
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Kaushik portfolio home"
            className="group absolute left-0 top-1/2 flex h-9 w-11 -translate-y-1/2 items-center justify-center overflow-hidden rounded-lg border border-orange-200/25 bg-gradient-to-br from-orange-300/15 via-white/10 to-slate-950/25 text-[0.72rem] font-semibold tracking-[0.16em] text-white shadow-[0_0_18px_rgba(251,146,60,0.14),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md transition-all duration-300 hover:border-orange-200/55 hover:from-orange-300/25 hover:via-white/15 hover:shadow-[0_0_24px_rgba(251,146,60,0.30),inset_0_1px_0_rgba(255,255,255,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200/85 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:text-xs"
          >
            <span className="bg-gradient-to-br from-white via-orange-50 to-orange-100 bg-clip-text text-transparent drop-shadow-[0_0_7px_rgba(251,146,60,0.38)] transition-transform duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_9px_rgba(251,146,60,0.50)]">
              KY
            </span>
          </button>

          <div className="ml-12 flex max-w-[calc(100%-3rem)] flex-nowrap items-center justify-start space-x-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm [scrollbar-width:none] md:ml-0 md:max-w-full md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Scroll to ${item.label} section`}
                aria-current={activeSection === item.id ? "page" : undefined}
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
