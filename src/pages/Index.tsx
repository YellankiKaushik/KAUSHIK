import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import { setPageSeo } from "@/utils/seo";
import { SignalDailySection } from "@/components/SignalDaily";

const Index = () => {
  useEffect(() => {
    setPageSeo(
      "Kaushik Yellanki | AI Systems Builder & Software Developer",
      "Portfolio of Kaushik Yellanki, an AI systems builder and software developer creating practical AI-powered products, full-stack applications, dashboards, automation tools, and secure AI integrations."
    );
  }, []);

  return (
    <>
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <section id="home">
          <HeroSection />
        </section>

        <section id="FeaturedInSection">
          <FeaturedInSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="certifications">
          <CertificationsSection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="contact">
          <GetInTouchSection />
        </section>
        <SignalDailySection />
      </motion.div>
    </>
  );
};

export default Index;
