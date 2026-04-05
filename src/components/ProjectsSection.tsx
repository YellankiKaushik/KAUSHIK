import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";
import krishiImg from "../assets/logos/krishi.png";

const projects = [
  {
    slug: "youtube-review",
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "Built an AI-powered review intelligence system that transforms thousands of YouTube comments into actionable sentiment insights and summaries, reducing manual review effort by 70%+ and accelerating content and marketing decisions.",
    image: youtubeImg,
    github: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    live: "",
    medium: "",
    tags: [
      "NLP",
      "Sentiment Analysis",
      "Hugging Face",
      "OpenAI API",
      "YouTube Data API",
    ],
  },
  {
    slug: "vaaniplan",
    title: "VaaniPlan — Voice-First AI Daily Planning Assistant",
    description:
      "Created a voice-first AI planning prototype that eliminates typing and manual task structuring by using LLM reasoning, reducing planning effort by 60–70%, improving efficiency by ~50%, and earning acceptance in the Unleash LLM Innovation Challenge.",
    image: vaaniplanImg,
    github: "",
    live: "https://yellankikaushik.github.io/VaaniPlan/",
    medium: "",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    slug: "gym-membership",
    title: "Gym Membership Management System",
    description:
      "Created a zero-cost, production-ready membership management system that replaces manual tracking with automated expiry alerts, reducing admin effort by 65–70% and preventing 30–40% of missed renewals for small gyms.",
    image: gymImg,
    github: "https://github.com/YellankiKaushik/Gym-Membership",
    live: "",
    medium: "",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
  {
    slug: "google-product-analysis",
    title: "Public Interest Analysis of Google Products",
    description:
      "Created an interactive Tableau dashboard that translates Google Trends data into clear product insights.",
    image: TabImg,
    github: "",
    live: "https://public.tableau.com/app/profile/yellanki.kaushik",
    medium: "",
    tags: ["Tableau", "Google Trends", "Data Visualization"],
  },
  {
    slug: "krishi-seva",
    title: "Krishi Seva — Intelligent Agricultural Decision Agent",
    description:
      "Built a real-time AI decision agent that converts weather data into actionable farming advice, enabling instant risk detection (fungal, heat stress, rain) and improving on-field decision-making using explainable rule-based intelligence.",
    image: krishiImg,
    github: "https://github.com/YellankiKaushik/Krishi-Seva-AI", // add your repo link
    live: "",
    medium: "",
    tags: [
      "AI Agents",
      "Python",
      "OpenWeatherMap API",
      "Rule-Based Systems",
      "Real-Time Systems",
      "Agritech",
    ],
  }
];

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

          {projects.map((project, index) => (
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
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />

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