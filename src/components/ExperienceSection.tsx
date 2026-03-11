import { motion } from "framer-motion";
import { Calendar, Instagram, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";

const ExperienceSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">

          {experiences.map((experience, index) => (

            <motion.div
              key={experience.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 hover-glow"
            >

              <div className="flex items-start gap-6">

                <div className="p-3 bg-white/90 rounded-xl border border-white/30 shadow-lg">
                  <img
                    src={experience.logo}
                    alt={experience.company}
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

                  {/* NEW INTERNAL PAGE LINK */}
                  <Link
                    to={`/experience/${experience.slug}`}
                    className="inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium transition"
                  >

                    {experience.linktype === "instagram" ? (
                      <Instagram className="w-4 h-4" />
                    ) : experience.linktype === "live" ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}

                    View Details
                  </Link>

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