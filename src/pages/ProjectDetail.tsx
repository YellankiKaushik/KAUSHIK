import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* SAME BACKGROUND AS OTHER SECTIONS */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Back */}
        <Link
          to="/"
          className="text-primary-light hover:text-white transition mb-8 inline-block"
        >
          ← Back to Portfolio
        </Link>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 md:p-8 hover-glow"
        >

          {/* IMAGE */}
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-6 w-full h-72 object-cover"
          />

          {/* TITLE */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {project.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full
                bg-gradient-neon/20 text-accent-light
                border border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-4">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                GitHub Repository
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                Live Demo
              </a>
            )}

            {project.medium && (
              <a
                href={project.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                Medium Article
              </a>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProjectDetail;