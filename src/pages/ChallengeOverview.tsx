import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { sortedChallenges } from "@/data/challenges";
import DetailPage from "@/components/DetailPage";
import { setPageSeo } from "@/utils/seo";
import { trackEvent } from "@/utils/analytics";

export default function ChallengeOverview() {
  useEffect(() => {
    setPageSeo("Challenges & Hackathons | Kaushik Yellanki", "Explore Kaushik’s hackathon prototypes, challenge entries, and supporting links.", "/experience/challenge-participation");
    trackEvent("challenge_overview_view", { challenge_count: sortedChallenges.length });
  }, []);

  return (
    <DetailPage back="/#experience" backLabel="Experience" label="Challenge archive" title="Challenges & hackathons."
      intro="Short, time-bound builds and learning projects. Each entry records what I tried and links to the available work.">
      <div className="detail-directory">
        {sortedChallenges.map(challenge => (
          <Link key={challenge.slug} className="directory-row" to={`/challenges/${challenge.slug}`}
            onClick={() => trackEvent("challenge_detail_click", { location: "challenge_overview", challenge_slug: challenge.slug, challenge_title: challenge.title })}>
            <p className="eyebrow">{challenge.category}{challenge.date && <span>{challenge.date}</span>}</p>
            <div><h3>{challenge.title}</h3><p>{challenge.summary}</p></div><ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </DetailPage>
  );
}
