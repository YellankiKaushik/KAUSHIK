import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { experiences } from "@/data/experiences";
import DetailPage from "@/components/DetailPage";
import NotFound from "@/pages/NotFound";
import { setPageSeo } from "@/utils/seo";
import { trackEvent } from "@/utils/analytics";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const item = experiences.find(record => record.slug === slug);

  useEffect(() => {
    if (item) setPageSeo(`${item.title} · ${item.company} | Kaushik Yellanki`, item.description, `/experience/${item.slug}`);
  }, [item]);

  if (!item) return <NotFound />;

  return (
    <DetailPage back="/#experience" backLabel="Experience" label={item.period} title={item.title} intro={item.company}>
      {item.projectLink && <div className="detail-page-actions"><a className="action action-primary" href={item.projectLink}
          onClick={() => trackEvent("experience_outbound_click", {
            location: "experience_detail", experience_slug: item.slug, experience_title: item.title, company: item.company, destination: item.linktype,
          })}>View related work <ArrowUpRight size={18} aria-hidden="true" /></a></div>}
      <div className="case-grid">
        <aside aria-label="Skills"><p className="eyebrow">Skills</p><ul className="case-stack">{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></aside>
        <div className="case-content">
          <section><h2>Overview</h2><p>{item.overview}</p></section>
          <section><h2>What I worked on</h2><ul>{item.responsibilities.map(entry => <li key={entry}>{entry}</li>)}</ul></section>
          <section><h2>What I learned</h2><ul>{item.results.map(entry => <li key={entry}>{entry}</li>)}</ul></section>
        </div>
      </div>
    </DetailPage>
  );
}
