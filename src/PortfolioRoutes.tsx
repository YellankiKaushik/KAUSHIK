import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ExperienceDetail = lazy(() => import("./pages/ExperienceDetail"));
const ChallengeOverview = lazy(() => import("./pages/ChallengeOverview"));
const ChallengeDetail = lazy(() => import("./pages/ChallengeDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"));

export default function PortfolioRoutes() {
  return (
    <Suspense fallback={<div className="shell route-loading" role="status">Loading page…</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter/:slug" element={<NewsletterPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/experience/challenge-participation" element={<ChallengeOverview />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/challenges/:slug" element={<ChallengeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
