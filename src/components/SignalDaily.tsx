import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SiteShell";
import { editions } from "@/data/newsletters";

export function SignalDailySection() {
  const latest = editions[0];
  return (
    <section id="newsletter" className="shell section-space" aria-labelledby="signal-title">
      <div className="writing-panel">
        <div>
          <SectionHeading id="signal-title" label="Writing" title="Signal Daily." />
          <p>An AI briefing I research with local AI, review before publishing, and link back to original sources.</p>
          <Link className="text-link" to="/newsletter">Explore the archive <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="writing-links">
          {latest ? editions.slice(0, 4).map(edition => <Link className="text-link" key={edition.id} to={`/newsletter/${edition.slug}`}>{edition.title}</Link>)
            : <p>The first edition is awaiting publication.</p>}
          <a className="text-link" href="https://medium.com/@kaushikyellanki">Writing on Medium <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="text-link" href="https://dev.to/kaushikyellanki">Writing on Dev.to <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
