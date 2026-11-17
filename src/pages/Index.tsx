import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import PortfolioMotion from "@/components/PortfolioMotion";
import ProjectsSection from "@/components/ProjectsSection";
import { SectionHeading } from "@/components/SiteShell";
import { email } from "@/data/contact";
import { Credentials, Experience, SkillList } from "@/components/ProfileSections";
import { SignalDailySection } from "@/components/SignalDaily";
import GetInTouchSection from "@/components/GetInTouchSection";
import { setPageSeo } from "@/utils/seo";

const workflow = [
  { title: "Start with the workflow", copy: "I map the job someone is trying to finish, the data they already have, and the decisions the software needs to support." },
  { title: "Give each part a clear job", copy: "I keep rules and persistence predictable. I use a model where it can help with language, like explaining a route or summarizing viewer feedback." },
  { title: "Build one usable path", copy: "I connect the interface, API, and storage early so I can test loading, empty states, and failures in the workflow itself." },
  { title: "Leave a trail to the work", copy: "I document how the system fits together and link the code or demo so people can inspect the implementation for themselves." },
];

export default function Index() {
  useEffect(() => {
    setPageSeo("Kaushik Yellanki | AI Systems Builder & Software Developer",
      "Explore Kaushik Yellanki’s AI systems, full-stack projects, technical case studies, and writing.");
  }, []);

  return (
    <div>
      <PortfolioMotion />
      <HeroSection />
      <div className="practice-strip"><div className="shell practice-inner"><span>AI systems</span><span>Full-stack applications</span><span>Automation &amp; integrations</span></div></div>
      <ProjectsSection />
      <section className="process-band" id="process" aria-labelledby="process-title">
        <div className="shell section-space process-layout">
          <div>
            <SectionHeading id="process-title" label="Engineering process" title="How I build." />
            <Link to="/project/hazlo" className="text-link">See the approach in Hazlo <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <ol className="process-list">
            {workflow.map(({ title, copy }, index) => <li key={title} data-reveal>
              <span className="eyebrow" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>)}
          </ol>
        </div>
      </section>
      <section id="about" className="shell section-space about" aria-labelledby="about-title">
        <SectionHeading id="about-title" label="About" title="Curious about the whole system." />
        <div className="about-copy">
          <p>I’m a software developer in Hyderabad. I like following a product idea all the way from the first screen to the API and data model behind it.</p>
          <p>That’s taken me from machine-learning research and student tech communities to projects that turn a voice note into tasks or combine farm profiles with weather data.</p>
          <a className="text-link" href={`mailto:${email}`}>Say hello <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
      <Experience />
      <SkillList />
      <Credentials />
      <SignalDailySection />
      <GetInTouchSection />
    </div>
  );
}
