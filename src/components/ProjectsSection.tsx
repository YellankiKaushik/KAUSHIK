import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const visibleProjects = projects
  .filter((project) => project.visible !== false)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const ProjectCardImage = ({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="rounded-xl mb-6 w-full h-48 bg-gradient-cyber/20 border border-white/10" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className="rounded-xl mb-6 w-full h-48 object-cover"
    />
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-12 text-center text-glow"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 hover-glow flex flex-col"
            >

              {/* Project Image */}
              <ProjectCardImage src={project.image} alt={project.title} />

              {/* Project Content */}
              <div className="flex flex-col flex-grow">

                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tag, i) => (
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

                {/* View Project Button */}
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-2 text-primary-light hover:text-white transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
