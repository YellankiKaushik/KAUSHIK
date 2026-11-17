import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";


const navigation = [
  ["Work", "/#projects"],
  ["About", "/#about"],
  ["Writing", "/#newsletter"],
];

export function SiteHeader() {
  const { pathname, hash } = useLocation();
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname, hash]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-nav shell">
        <Link to="/" className="brand" aria-label="Kaushik Yellanki home" onClick={() => trackEvent("nav_logo_click", { label: "KY" })}>
          <span className="brand-mark" aria-hidden="true">KY</span>
          <span>Kaushik Yellanki</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {navigation.map(([title, to]) => <Link key={to} to={to} aria-current={pathname === "/" && to === "/" + hash ? "location" : undefined}>{title}</Link>)}
        </nav>
        <Link to="/#contact" className="action action-dark nav-contact">Get in touch <ArrowUpRight aria-hidden="true" size={15} /></Link>
        <details className="nav-mobile" ref={menu} onKeyDown={event => {
          if (event.key === "Escape" && event.currentTarget.open) {
            event.currentTarget.open = false;
            event.currentTarget.querySelector("summary")?.focus();
          }
        }}>
          <summary><Menu size={19} aria-hidden="true" /> Menu</summary>
          <nav aria-label="Mobile navigation">
            {[...navigation, ["Contact", "/#contact"]].map(([title, to]) =>
              <Link key={to} to={to} onClick={() => { if (menu.current) menu.current.open = false; }}>{title}<ArrowUpRight size={16} aria-hidden="true" /></Link>
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="brand" to="/"><span className="brand-mark" aria-hidden="true">KY</span>Kaushik Yellanki</Link>
        <Link className="text-link" to="/#home">Back to top <ArrowDown size={16} aria-hidden="true" className="rotate-180" /></Link>
      </div>
    </footer>
  );
}

export function SectionHeading({ id, label, title, copy }: { id?: string; label: string; title: string; copy?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2 id={id}>{title}</h2></div>{copy && <p>{copy}</p>}</div>;
}
