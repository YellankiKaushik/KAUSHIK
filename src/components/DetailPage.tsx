import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DetailPage({ back, backLabel, label, title, intro, children }: {
  back: string;
  backLabel: string;
  label: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="shell detail-page">
      <Link to={back} className="breadcrumb text-link"><ArrowLeft size={17} aria-hidden="true" />{backLabel}</Link>
      <header>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </header>
      {children}
    </div>
  );
}
