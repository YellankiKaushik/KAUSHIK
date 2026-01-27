import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PositionOfResponsibilitySection from "@/components/PositionOfResponsibilitySection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import FeaturedInSection from "@/components/FeaturedInSection"; 
const Index = () => {
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
          <FeaturedInSection/>
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

        <section id="position-of-responsibility">
          <PositionOfResponsibilitySection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>
      </motion.div>
    </>
  );
};

export default Index;
