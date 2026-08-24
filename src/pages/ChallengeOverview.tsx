import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Trophy,
} from "lucide-react";
import {
  ChallengeParticipation,
  ChallengeProofLinkKey,
  sortedChallenges,
} from "@/data/challenges";
import { trackEvent } from "@/utils/analytics";
import { setPageSeo } from "@/utils/seo";

const proofLinkMeta: Record<
  ChallengeProofLinkKey,
  { label: string; eventName: string }
> = {
  githubUrl: { label: "GitHub", eventName: "challenge_github_click" },
  liveUrl: { label: "Live", eventName: "challenge_live_click" },
  mediumUrl: { label: "Medium", eventName: "challenge_medium_click" },
  devtoUrl: { label: "Dev.to", eventName: "challenge_devto_click" },
  certificateUrl: {
    label: "Certificate",
    eventName: "challenge_certificate_click",
  },
  participationUrl: {
    label: "Participation",
    eventName: "challenge_participation_click",
  },
  linkedinPostUrl: {
    label: "LinkedIn Post",
    eventName: "challenge_linkedin_post_click",
  },
  socialPostUrl: {
    label: "Social Post",
    eventName: "challenge_social_post_click",
  },
  projectUrl: { label: "Related Project", eventName: "challenge_project_click" },
};

const getProofLinks = (challenge: ChallengeParticipation) =>
  (Object.keys(proofLinkMeta) as ChallengeProofLinkKey[])
    .map((key) => ({
      key,
      href: challenge[key],
      ...proofLinkMeta[key],
    }))
    .filter((link): link is {
      key: ChallengeProofLinkKey;
      href: string;
      label: string;
      eventName: string;
    } => Boolean(link.href));

const ProofLink = ({
  challenge,
  href,
  label,
  eventName,
}: {
  challenge: ChallengeParticipation;
  href: string;
  label: string;
  eventName: string;
}) => {
  const handleClick = () =>
    trackEvent(eventName, {
      location: "challenge_overview",
      challenge_slug: challenge.slug,
      challenge_title: challenge.title,
    });

  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        onClick={handleClick}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-primary-light transition hover:border-primary-light/60 hover:text-white"
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-primary-light transition hover:border-primary-light/60 hover:text-white"
    >
      {label}
    </a>
  );
};

const ChallengeOverview = () => {
  useEffect(() => {
    setPageSeo(
      "Challenge & Participation Experience | Kaushik Yellanki",
      "Challenge participation overview for Kaushik Yellanki, covering time-bound AI and software building, proof links, hackathon work, and builder events."
    );
    trackEvent("challenge_overview_view", {
      challenge_count: sortedChallenges.length,
    });
  }, []);

  return (
    <section className="min-h-screen px-4 py-12 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link
          to="/#experience"
          className="mb-8 inline-flex items-center gap-2 text-sm text-primary-light transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Experience
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-card p-6 md:p-8 hover-glow mb-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-cosmic/15 px-3 py-1 text-xs font-medium text-primary-light">
                <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                Time-bound builder proof
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white text-glow mb-4">
                Challenge & Participation Experience
              </h1>
              <p className="max-w-3xl text-white/80 leading-relaxed">
                These entries show how Kaushik learns quickly, turns challenge
                prompts into working AI/software prototypes, documents progress,
                and keeps proof links organized for recruiter review.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center sm:min-w-64">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">
                  {sortedChallenges.length}
                </p>
                <p className="text-xs text-white/60">Tracked entries</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">
                  {
                    sortedChallenges.filter(
                      (challenge) => challenge.dataStatus === "verified"
                    ).length
                  }
                </p>
                <p className="text-xs text-white/60">Verified now</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {sortedChallenges.map((challenge, index) => {
            const proofLinks = getProofLinks(challenge);

            return (
              <motion.article
                key={challenge.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 hover-glow flex flex-col"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                      challenge.dataStatus === "verified"
                        ? "border-primary/35 bg-gradient-cosmic/15 text-primary-light"
                        : "border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    {challenge.dataStatus === "verified" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {challenge.status}
                  </span>
                  <span className="rounded-full border border-accent/25 bg-gradient-neon/10 px-3 py-1 text-xs text-accent-light">
                    {challenge.category}
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-white">
                  {challenge.title}
                </h2>

                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/65">
                  {(challenge.organizer || challenge.platform) && (
                    <span>{challenge.organizer || challenge.platform}</span>
                  )}
                  {(challenge.date || challenge.timeframe) && (
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                      {challenge.date || challenge.timeframe}
                    </span>
                  )}
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/78">
                  {challenge.summary}
                </p>

                {challenge.technologies.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {challenge.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/30 bg-gradient-neon/20 px-3 py-1 text-xs text-accent-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mb-5 flex flex-wrap gap-2">
                  {proofLinks.length > 0 ? (
                    proofLinks.map((link) => (
                      <ProofLink
                        key={link.key}
                        challenge={challenge}
                        href={link.href}
                        label={link.label}
                        eventName={link.eventName}
                      />
                    ))
                  ) : (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/45">
                      Proof links can be added when verified
                    </span>
                  )}
                </div>

                <Link
                  to={`/challenges/${challenge.slug}`}
                  onClick={() =>
                    trackEvent("challenge_detail_click", {
                      location: "challenge_overview",
                      challenge_slug: challenge.slug,
                      challenge_title: challenge.title,
                    })
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-light transition hover:text-white"
                >
                  View Details
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengeOverview;
