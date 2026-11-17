import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { achievements, certifications, education, skills } from "@/data/profile";
import { SectionHeading } from "@/components/SiteShell";
import { trackEvent } from "@/utils/analytics";

const experienceLabels: Record<string, string> = {
  "uptoskills-ai-research": "Internship",
  "edunet-ai-engineer": "Training program",
  "crowdsource-marketing": "Student community",
  "aashay-social-media": "Student community",
  "challenge-participation": "Challenges & hackathons",
};

export function Experience() {
  const work = [...experiences.slice(1), experiences[0]];
  return (
    <section id="experience" className="shell subsection" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" label="Experience" title="Where I’ve worked and learned." />
      <div>
        {work.map(item => (
          <Link key={item.slug} className="directory-row" to={`/experience/${item.slug}`}
            onClick={() => trackEvent(item.slug === "challenge-participation" ? "challenge_experience_click" : "experience_detail_click", {
              location: "experience_section", experience_slug: item.slug, experience_title: item.title, company: item.company,
            })}>
            <p className="eyebrow">{experienceLabels[item.slug]}<span>{item.period}</span></p>
            <div><h3>{item.title} · {item.company}</h3><p>{item.description}</p></div>
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SkillList() {
  return (
    <section id="skills" className="shell subsection" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" label="Skills" title="Tools I work with." />
      <div className="skill-grid">
        {skills.map(group => <article key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></article>)}
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section className="shell subsection" aria-labelledby="credentials-title">
      <SectionHeading id="credentials-title" label="Background" title="Education & credentials." />
      <div className="credential-list">
        <details id="education" open>
          <summary>Education <ChevronDown size={21} aria-hidden="true" /></summary>
          <div>
            {education.map(item => <article className="evidence-row" key={item.degree}>
              <div><h3>{item.degree}</h3><p>{item.school} · {item.period} · {item.gpa.trim()}</p>
                <small>Coursework includes {item.coursework.join(", ")}.</small>
              </div>
            </article>)}
          </div>
        </details>
        <details id="certifications">
          <summary>Certifications <ChevronDown size={21} aria-hidden="true" /></summary>
          <div>
            {certifications.map(item => {
              const credential = <span><strong>{item.title}</strong><br /><small>{item.issuer}</small></span>;
              return item.link ? <a key={item.title} className="evidence-row" href={item.link}
                onClick={() => trackEvent("certificate_click", { certificate_title: item.title, issuer: item.issuer })}>
                {credential}<ArrowUpRight size={18} aria-hidden="true" />
              </a> : <div key={item.title} className="evidence-row">{credential}<small>Proof link unavailable</small></div>;
            })}
          </div>
        </details>
        <details id="achievements">
          <summary>Achievements & contributions <ChevronDown size={21} aria-hidden="true" /></summary>
          <div>
            {achievements.map(item => <a key={item.link} className="evidence-row" href={item.link}
              onClick={() => trackEvent("achievement_link_click", { achievement_title: item.title })}>
              <div><h3>{item.title}</h3><small>{item.year} · {item.description}</small></div><ArrowUpRight size={18} aria-hidden="true" />
            </a>)}
          </div>
        </details>
      </div>
    </section>
  );
}
