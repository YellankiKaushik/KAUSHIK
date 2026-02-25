import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

const certifications = [
  {
    title: "Alteryx Auto Insights Micro-Credential ",
     issuer: "Alteryx ",
        link: "https://www.credly.com/badges/4cd6ee80-176b-426c-827f-eb434696c22c/public_url ",
  },
  
  {
     title: " Alteryx Designer Core Certification",
     issuer: "Alteryx ",
        link: " https://www.credly.com/badges/de36773d-5970-4088-9964-4aded97fa808/public_url ",
  },
  
  {	
    title: "Alteryx Foundational Micro-Credential ",
     issuer: "Alteryx ",
        link: " https://www.credly.com/badges/20c52c2f-9b0d-44d9-8d5e-1da28e1b2bfd/public_url",
  },
  
  {
    title : "DotNet Full Stack ",
  issuer : "Wipro Talentext",
  link: "https://drive.google.com/file/d/1DLUtQgfCW7AUu0VzSBXr0W7_ZFW30G1Z/view?usp=drive_link",
  },
  
  {	
    title: "Machine Learning Fundamentals Micro-Credential ",
     issuer: " Alteryx",
        link: "https://www.credly.com/badges/9758c6ff-ab67-48e5-83bf-2589da4605b6/public_url ",
  },
  
  {	
    title: "Make Agentic AI Work for You ",
     issuer: " IBM SkillsBuild ",
        link: " https://www.credly.com/badges/fecb2723-c3f4-4e1a-813a-76f402ff80ff/public_url",
  },
  
  {	
    title: "AWS Academy Graduate - Cloud Architecting - Training Badge",
     issuer: " Amazon Web Services Training and Certification",
        link: "https://www.credly.com/badges/1e618cad-5474-4023-8cca-2c4e61d99c04/public_url ",
  },
     
  {	
    title: "AWS Academy Graduate - Machine Learning Foundations - Training Badge ",
     issuer: " Amazon Web Services Training and Certification",
        link: " https://www.credly.com/badges/0f908261-53e5-4532-9892-0d92a0992081/public_url",
  },
     
  
  {	
    title: "CCNA: Enterprise Networking, Security, and Automation ",
     issuer: "Cisco ",
        link: "https://www.credly.com/badges/15f81fc6-b7a7-40da-be09-6e4e42a1a67c/public_url ",
  },
     
  
  {	
    title: " CCNA: Switching, Routing, and Wireless Essentials",
     issuer: "Cisco ",
        link: " https://www.credly.com/badges/e5ce3b74-89e1-47e8-bce9-68c0906571e0/public_url",
  },
  
  {	
    title: " Machine Learning for All ",
     issuer: "University of London ",
        link: "https://coursera.org/share/0e5760685e18a9a003ee4b8c8251e1a7 ",
  },
  {	
    title: "Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation ",
     issuer: "Forage ",
        link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_m3xGpZ3r6inch3q7C_1739026179981_completion_certificate.pdf ",
  },
  
  {	
    title: " Deloitte Australia - Data Analytics Job Simulation",
     issuer: "Forage ",
        link: " https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_m3xGpZ3r6inch3q7C_1738957277947_completion_certificate.pdf ",
  },
  
  

];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -150 : 150,
    opacity: 0,
  }),
};

const CertificationsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      let nextPage = prevPage + newDirection;

      // Infinite loop logic
      if (nextPage < 0) nextPage = totalPages - 1;
      if (nextPage >= totalPages) nextPage = 0;

      return [nextPage, newDirection];
    });
  };

  const pageData = certifications.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Professional Certifications
        </motion.h2>

        <div className="relative min-h-[420px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              variants={slideVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pageData.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="glass-card p-6 hover-glow cursor-pointer text-center"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary-light text-sm">
                    {cert.issuer}
                  </p>
                  <p className="text-white/60 text-xs mt-2">
                    View Credential →
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 glass-card p-3 hover-glow"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card p-3 hover-glow"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;