import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpeg";
import { github } from "@/data/contact";
import { trackEvent } from "@/utils/analytics";

export default function HeroSection() {
  return (
    <section id="home" className="hero-field" aria-labelledby="hero-title">
      <div className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow hero-role"><span aria-hidden="true" />AI Systems Builder &amp; Software Developer</p>
          <h1 id="hero-title">Kaushik <em data-hero-accent>Yellanki.</em></h1>
          <p className="hero-lede">I build AI systems, web applications, and automations that make complicated workflows easier to use.</p>
          <div className="hero-actions">
            <Link to="/#projects" className="action action-primary">Explore my work <ArrowDown size={19} aria-hidden="true" /></Link>
            <a href={github} className="text-link" onClick={() => trackEvent("github_click", { location: "hero", destination: "github_profile" })}>GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-image"><img src={profileImage} alt="Portrait of Kaushik Yellanki" decoding="async" /></div>
          <figcaption><span>KAUSHIK YELLANKI</span><span>HYDERABAD, INDIA</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
