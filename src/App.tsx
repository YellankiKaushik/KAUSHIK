import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import PortfolioRoutes from "./PortfolioRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { SiteFooter, SiteHeader } from "./components/SiteShell";

const PortfolioChatbot = lazy(() => import("@/components/PortfolioChatbot"));

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteHeader />
      <ScrollToTop />
      <main id="main-content" tabIndex={-1}><PortfolioRoutes /></main>
      <SiteFooter />
      <Suspense fallback={null}><PortfolioChatbot /></Suspense>
    </BrowserRouter>
  );
}
