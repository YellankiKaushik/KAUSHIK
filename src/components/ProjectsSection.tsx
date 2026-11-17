import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { projectStories } from "@/data/projectStories";
import ProjectVisual from "@/components/ProjectVisual";
import { SectionHeading } from "@/components/SiteShell";
import { trackEvent } from "@/utils/analytics";

export default function ProjectsSection() {
  const featured = projects.filter(project => project.visible !== false).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <section id="projects" className="shell section-space" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" label="Selected projects" title="Built to be used." copy="Six projects, each with a different problem to solve. See how they work and follow the code or demo." />
      <div className="work-grid">
        {featured.map(project => {
          const story = projectStories[project.slug];
          const titleId = `work-${project.slug}`;
          return (
            // Pointer spotlight pattern adapted from React Bits Spotlight Card.
            <article className="work-card" key={project.slug} data-reveal onPointerMove={event => {
              if (event.pointerType !== "mouse" || !matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
              const visual = event.currentTarget.querySelector<HTMLElement>(".architecture");
              if (!visual) return;
              const bounds = visual.getBoundingClientRect();
              visual.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
              visual.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
            }}>
              <Link aria-labelledby={titleId} to={`/project/${project.slug}`} onClick={() => trackEvent("project_detail_click", { location: "projects_section", project_slug: project.slug, project_title: project.title })} />
              {story && <ProjectVisual story={story} />}
              <div className="work-card-content">
                <div className="work-meta"><p className="eyebrow">{story?.category ?? "Software project"}</p><span>{project.techStack[0]}</span></div>
                <h3 id={titleId}>{project.title}<ArrowUpRight size={22} aria-hidden="true" /></h3>
                <p>{project.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
