import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  ChallengeParticipation,
  ChallengeProofLinkKey,
  sortedChallenges,
} from "@/data/challenges";
import { projects } from "@/data/projects";
import { trackEvent } from "@/utils/analytics";
import { setPageSeo } from "@/utils/seo";

const proofLinkMeta: Record<
  ChallengeProofLinkKey,
  { label: string; eventName: string }
> = {
  githubUrl: { label: "GitHub", eventName: "challenge_github_click" },
  liveUrl: { label: "Live Demo", eventName: "challenge_live_click" },
  mediumUrl: { label: "Medium", eventName: "challenge_medium_click" },
  devtoUrl: { label: "Dev.to", eventName: "challenge_devto_click" },
  certificateUrl: {
    label: "Certificate",
    eventName: "challenge_certificate_click",
  },
  participationUrl: {
    label: "Participation Proof",
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

const DetailSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
    {children}
  </section>
);

const ChallengeDetail = () => {
  const { slug } = useParams();
  const challenge = sortedChallenges.find((item) => item.slug === slug);

  useEffect(() => {
    if (!challenge) return;

    setPageSeo(
      `${challenge.title} | Challenge Participation | Kaushik Yellanki`,
      `${challenge.title} challenge detail page for Kaushik Yellanki, covering context, build work, skills, proof links, and time-bound execution notes.`
    );
    trackEvent("challenge_detail_view", {
      challenge_slug: challenge.slug,
      challenge_title: challenge.title,
      data_status: challenge.dataStatus,
    });
  }, [challenge]);

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-semibold">Challenge not found</h1>
          <Link to="/experience/challenge-participation" className="text-primary-light hover:text-white">
            Back to Challenge Participation
          </Link>
        </div>
      </div>
    );
  }

  const relatedProject = challenge.relatedProjectSlug
    ? projects.find((project) => project.slug === challenge.relatedProjectSlug)
    : undefined;
  const proofLinks = getProofLinks(challenge);

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
          to="/experience/challenge-participation"
          className="mb-8 inline-flex items-center gap-2 text-sm text-primary-light transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Challenge Participation
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 md:p-8 hover-glow"
        >
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
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

            <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white text-glow">
              {challenge.title}
            </h1>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white/65">
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

            <p className="max-w-4xl text-white/80 leading-relaxed">
              {challenge.summary}
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <DetailSection title="Challenge Context">
                <p className="text-white/80 leading-relaxed">
                  {challenge.problemStatement}
                </p>
              </DetailSection>

              <DetailSection title="What I Built / Attempted">
                <p className="text-white/80 leading-relaxed">
                  {challenge.whatIBuilt}
                </p>
              </DetailSection>

              <DetailSection title="My Role">
                <p className="text-white/80 leading-relaxed">
                  {challenge.myRole}
                </p>
              </DetailSection>

              <DetailSection title="Time-Bound Execution">
                <p className="text-white/80 leading-relaxed">
                  {challenge.timeframe
                    ? `This entry is presented as a ${challenge.timeframe.toLowerCase()} experience, focused on quick learning, implementation, documentation, and honest proof-of-work.`
                    : "This entry is part of Kaushik's challenge participation architecture. Exact timing can be added once verified, while the page remains ready for resume and proof links."}
                </p>
              </DetailSection>

              {challenge.outcome && (
                <DetailSection title="Outcome">
                  <p className="text-white/80 leading-relaxed">
                    {challenge.outcome}
                  </p>
                </DetailSection>
              )}

              {challenge.learnings.length > 0 && (
                <DetailSection title="Key Learnings">
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    {challenge.learnings.map((learning) => (
                      <li key={learning}>{learning}</li>
                    ))}
                  </ul>
                </DetailSection>
              )}
            </div>

            <aside className="space-y-6">
              {challenge.technologies.length > 0 && (
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h2 className="mb-4 text-base font-semibold text-white">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {challenge.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/30 bg-gradient-neon/20 px-3 py-1 text-xs text-accent-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {challenge.skillsDemonstrated.length > 0 && (
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h2 className="mb-4 text-base font-semibold text-white">
                    Skills Demonstrated
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skillsDemonstrated.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/30 bg-gradient-cosmic/15 px-3 py-1 text-xs text-primary-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h2 className="mb-4 text-base font-semibold text-white">
                  Proof Links
                </h2>
                <div className="flex flex-col gap-3">
                  {proofLinks.length > 0 ? (
                    proofLinks.map((link) =>
                      link.href.startsWith("/") ? (
                        <Link
                          key={link.key}
                          to={link.href}
                          onClick={() =>
                            trackEvent(link.eventName, {
                              location: "challenge_detail",
                              challenge_slug: challenge.slug,
                              challenge_title: challenge.title,
                            })
                          }
                          className="inline-flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-light transition hover:border-primary-light/60 hover:text-white"
                        >
                          {link.label}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      ) : (
                        <a
                          key={link.key}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackEvent(link.eventName, {
                              location: "challenge_detail",
                              challenge_slug: challenge.slug,
                              challenge_title: challenge.title,
                            })
                          }
                          className="inline-flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-light transition hover:border-primary-light/60 hover:text-white"
                        >
                          {link.label}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )
                    )
                  ) : (
                    <p className="text-sm leading-relaxed text-white/55">
                      Proof links can be added after the exact submission,
                      certificate, post, or write-up is verified.
                    </p>
                  )}
                </div>
              </div>

              {relatedProject && (
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h2 className="mb-2 text-base font-semibold text-white">
                    Related Project
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                    {relatedProject.title}
                  </p>
                  <Link
                    to={`/project/${relatedProject.slug}`}
                    onClick={() =>
                      trackEvent("challenge_related_project_click", {
                        location: "challenge_detail",
                        challenge_slug: challenge.slug,
                        project_slug: relatedProject.slug,
                      })
                    }
                    className="inline-flex items-center gap-2 text-sm text-primary-light transition hover:text-white"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </aside>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6">
            <Link
              to="/experience/challenge-participation"
              className="glass-card px-5 py-2 text-sm text-white hover-glow"
            >
              Back to Challenge Participation
            </Link>
            <Link
              to="/"
              className="glass-card px-5 py-2 text-sm text-white hover-glow"
            >
              Back to Home
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ChallengeDetail;
