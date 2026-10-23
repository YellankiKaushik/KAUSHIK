import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import ChallengeOverview from "./pages/ChallengeOverview";
import ChallengeDetail from "./pages/ChallengeDetail";
import CursorGlow from "@/components/CursorGlow";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import ScrollToTop from "./components/ScrollToTop";
import { NewsletterPage } from "./components/SignalDaily";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CursorGlow />
      <PortfolioChatbot />

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/newsletter/:slug" element={<NewsletterPage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route
            path="/experience/challenge-participation"
            element={<ChallengeOverview />}
          />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/challenges/:slug" element={<ChallengeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
