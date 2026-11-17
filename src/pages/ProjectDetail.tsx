import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { projectStories } from "@/data/projectStories";
import ProjectVisual from "@/components/ProjectVisual";
import NotFound from "@/pages/NotFound";
import { setPageSeo } from "@/utils/seo";
import { trackEvent } from "@/utils/analytics";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(record => record.slug === slug);
  const story = slug ? projectStories[slug] : undefined;

  useEffect(() => {
    if (!project) return;
    setPageSeo(`${project.title} | Kaushik Yellanki`, project.description, `/project/${project.slug}`);
  }, [project]);

  if (!project) return <NotFound />;

  const visible = projects.filter(record => record.visible !== false);
  const index = visible.findIndex(record => record.slug === project.slug);
  const next = index >= 0 ? visible[index + 1] : undefined;
  const demoAvailable = project.demoStatus !== "unavailable";
  const links = [
    { href: project.github, label: "Source on GitHub", destination: "github" },
    { href: demoAvailable ? project.live : undefined, label: "Open live demo", destination: "live_demo" },
    { href: project.medium, label: "Read the write-up", destination: "medium" },
    { ...story?.evidence, destination: "evidence" },
  ];

  return (
    <div className="shell detail-page">
      <Link to="/#projects" className="breadcrumb text-link"><ArrowLeft size={17} aria-hidden="true" /> Selected work</Link>
      <header>
        <p className="eyebrow">{story?.category ?? "Project archive"}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>
        <div className="detail-page-actions">
          {links.filter(link => link.href && link.label).map(({ href, label, destination }, index) => (
            <a key={href} className={`action ${index === 0 ? "action-primary" : "action-outline"}`} href={href}
              onClick={() => trackEvent("project_outbound_click", { location: "project_detail", project_slug: project.slug, project_title: project.title, destination })}>
              {label}<ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
        {!demoAvailable && <p className="demo-status">The hosted demo is currently unavailable. The source and setup instructions are on GitHub.</p>}
      </header>
      {story && <div className="case-visual"><ProjectVisual story={story} /></div>}
      <div className="case-grid">
        <aside aria-label="Technology stack">
          <p className="eyebrow">Stack</p>
          <ul className="case-stack">{project.techStack.map(item => <li key={item}>{item}</li>)}</ul>
        </aside>
        <div className="case-content">
          {project.problem && <section><h2>The problem</h2><p>{project.problem}</p></section>}
          {story?.contribution && <section><h2>My role</h2><p>{story.contribution}</p></section>}
          <section>
            <h2>How it works</h2>
            {story ? story.decisions.map(decision => <p key={decision}>{decision}</p>) : <p>{project.solution ?? project.overview}</p>}
          </section>
          {project.results?.length > 0 && <section>
            <h2>What the project delivers</h2>
            {project.results.map(result => <p key={result}>{result}</p>)}
          </section>}
          {story && <section><h2>Limits and lessons</h2>{story.boundaries.map(boundary => <p key={boundary}>{boundary}</p>)}</section>}
          {!story && !!project.highlights?.length && <section><h2>Implementation highlights</h2><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></section>}
        </div>
      </div>
      <div className="case-next"><Link to={next ? `/project/${next.slug}` : "/#projects"} className="text-link">
        {next ? `Next project: ${next.title}` : "Back to selected work"}<ArrowUpRight size={17} aria-hidden="true" />
      </Link></div>
    </div>
  );
}
