import { motion } from "framer-motion";

const certifications = [
  {
    title: "Make Agentic AI Work for You",
    issuer: "IBM",
    link: "https://www.credly.com/badges/fecb2723-c3f4-4e1a-813a-76f402ff80ff/public_url",
  },
  {
    title: "Alteryx Designer Core Certification",
    issuer: "Alteryx",
    link: "https://www.credly.com/badges/de36773d-5970-4088-9964-4aded97fa808/public_url",
  },
  {
    title: "Alteryx Auto Insights Micro-Credential",
    issuer: "Alteryx",
    link: "https://www.credly.com/badges/20c52c2f-9b0d-44d9-8d5e-1da28e1b2bfd/public_url",
  },
];

const CertificationsSection = () => {
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
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center text-glow"
        >
          Professional Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card p-6 hover-glow cursor-pointer text-center"
            >
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
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
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
