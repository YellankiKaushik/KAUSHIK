import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import { trackEvent } from "@/utils/analytics";

const ExperienceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Experience not found</h2>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* SAME BACKGROUND SYSTEM AS PROJECT DETAIL */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary-light hover:text-white transition mb-8 inline-block"
        >
          ← Back to Portfolio
        </button>

        {/* MAIN GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 md:p-8 hover-glow"
        >

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            {/* TITLE & COMPANY INFO */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white text-glow mb-2">
                {experience.title}
              </h1>
              <p className="text-primary-light font-medium text-lg">
                {experience.company}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {experience.period}
              </p>
            </div>

            {/* TOP LINKS */}
            <div className="flex gap-3 flex-wrap">
              {experience.projectLink && (
                <a
                  href={experience.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("experience_outbound_click", {
                      location: "experience_detail",
                      experience_slug: experience.slug,
                      experience_title: experience.title,
                      company: experience.company,
                      destination: experience.linktype || "external",
                    })
                  }
                  className="glass-card px-4 py-2 hover-glow text-sm"
                >
                  View Work
                </a>
              )}
            </div>

          </div>

          {/* IMPACT SUMMARY */}
          {experience.impact && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Impact Summary
              </h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                {experience.impact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ROLE OVERVIEW */}
          {experience.overview && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Role Overview
              </h2>
              <p className="text-white/80 leading-relaxed">
                {experience.overview}
              </p>
            </div>
          )}

          {/* RESPONSIBILITIES */}
          {experience.responsibilities && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Responsibilities
              </h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                {experience.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* TECH STACK */}
          {experience.skills && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
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
            </div>
          )}

          {/* RESULTS / ACHIEVEMENTS */}
          {experience.results && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Results / Achievements
              </h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                {experience.results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* SCREENSHOTS / PROOF */}
          {experience.screenshots && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-white mb-6">
                Screenshots / Proof
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.screenshots.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="experience screenshot"
                    className="rounded-xl object-cover hover-glow"
                  />
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            {experience.projectLink && (
              <a
                href={experience.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("experience_outbound_click", {
                    location: "experience_detail",
                    experience_slug: experience.slug,
                    experience_title: experience.title,
                    company: experience.company,
                    destination: experience.linktype || "external",
                  })
                }
                className="glass-card px-5 py-2 hover-glow"
              >
                View Work
              </a>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceDetail;
