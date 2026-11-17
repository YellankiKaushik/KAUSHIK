import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { challenges, challengeProofLinkKeys, type ChallengeProofLinkKey } from "@/data/challenges";
import DetailPage from "@/components/DetailPage";
import NotFound from "@/pages/NotFound";
import { setPageSeo } from "@/utils/seo";
import { trackEvent } from "@/utils/analytics";

const proofLinks: Record<ChallengeProofLinkKey, [label: string, event: string]> = {
  githubUrl: ["Source on GitHub", "challenge_github_click"],
  liveUrl: ["Demo deployment", "challenge_live_click"],
  mediumUrl: ["Medium", "challenge_medium_click"],
  devtoUrl: ["Dev.to", "challenge_devto_click"],
  certificateUrl: ["Certificate", "challenge_certificate_click"],
  participationUrl: ["Event page", "challenge_participation_click"],
  linkedinPostUrl: ["LinkedIn post", "challenge_linkedin_post_click"],
  socialPostUrl: ["Social post", "challenge_social_post_click"],
  projectUrl: ["Project evidence", "challenge_project_click"],
};

export default function ChallengeDetail() {
  const { slug } = useParams();
  const item = challenges.find(challenge => challenge.slug === slug);

  useEffect(() => {
    if (!item) return;
    setPageSeo(`${item.title} | Kaushik Yellanki`, item.summary, `/challenges/${item.slug}`);
    trackEvent("challenge_detail_view", { challenge_slug: item.slug, challenge_title: item.title, data_status: item.dataStatus });
  }, [item]);

  if (!item) return <NotFound />;

  const sections = [
    ["Problem", item.problemStatement],
    ["What I built", item.whatIBuilt],
    ["My role", item.myRole],
    ["Outcome", item.outcome],
  ];

  return (
    <DetailPage back="/experience/challenge-participation" backLabel="Challenges & hackathons"
      label={[item.category, item.date].filter(Boolean).join(" · ")} title={item.title} intro={item.summary}>
      <div className="detail-page-actions">
        {challengeProofLinkKeys.map(key => {
          const href = item[key];
          if (!href || href === `/project/${item.relatedProjectSlug}`) return null;
          const [label, event] = proofLinks[key];
          const content = <>{label}<ArrowUpRight size={17} aria-hidden="true" /></>;
          const track = () => trackEvent(event, { location: "challenge_detail", challenge_slug: item.slug, challenge_title: item.title });
          return href.startsWith("/")
            ? <Link key={key} className="action action-outline" to={href} onClick={track}>{content}</Link>
            : <a key={key} className="action action-outline" href={href} onClick={track}>{content}</a>;
        })}
        {item.relatedProjectSlug && <Link className="action action-primary" to={`/project/${item.relatedProjectSlug}`}
          onClick={() => trackEvent("challenge_related_project_click", {
            location: "challenge_detail", challenge_slug: item.slug, project_slug: item.relatedProjectSlug,
          })}>Read case study <ArrowUpRight size={17} aria-hidden="true" /></Link>}
      </div>
      <div className="case-grid">
        <aside aria-label="Event details">
          <p className="eyebrow">Event details</p>
          <p>{[item.organizer, item.platform, item.timeframe].filter(Boolean).join(" · ")}</p>
          <p>{item.status}</p>
          {!!item.technologies.length && <ul className="case-stack">{item.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>}
        </aside>
        <div className="case-content">
          {sections.filter(([, copy]) => Boolean(copy)).map(([title, copy]) => <section key={title}><h2>{title}</h2><p>{copy}</p></section>)}
          {!!item.skillsDemonstrated.length && <section><h2>Skills</h2><p>{item.skillsDemonstrated.join(" · ")}</p></section>}
          {!!item.learnings.length && <section><h2>What I learned</h2><ul>{item.learnings.map(entry => <li key={entry}>{entry}</li>)}</ul></section>}
        </div>
      </div>
    </DetailPage>
  );
}
