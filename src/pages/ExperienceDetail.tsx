import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const ExperienceDetail = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Experience not found
      </div>
    );
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden">

      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        <button
          onClick={() => navigate(-1)}
          className="text-primary-light hover:text-white mb-8"
        >
          ← Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 hover-glow"
        >

          <div className="flex items-center gap-4 mb-6">

            <img
              src={experience.logo}
              alt={experience.company}
              className="w-14 h-14 rounded-lg"
            />

            <div>

              <h1 className="text-2xl font-bold text-white">
                {experience.title}
              </h1>

              <p className="text-primary-light">
                {experience.company}
              </p>

              <p className="text-white/60 text-sm">
                {experience.period}
              </p>

            </div>

          </div>

          <p className="text-white/80 mb-8 leading-relaxed">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
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
            className="glass-card px-5 py-2 hover-glow"
          >
            View Work
          </a>

        </motion.div>
      </div>
    </section>
  );

};

export default ExperienceDetail;