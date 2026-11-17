import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { setPageSeo } from "@/utils/seo";

export default function NotFound() {
  useEffect(() => {
    setPageSeo("Page not found | Kaushik Yellanki", "This portfolio page could not be found.", null);
  }, []);
  return (
    <div className="shell detail-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <Link className="text-link" to="/"><ArrowLeft size={18} aria-hidden="true" /> Back to the portfolio</Link>
    </div>
  );
}
