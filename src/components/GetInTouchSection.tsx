import { ArrowUpRight, Mail } from "lucide-react";
import { contactProfiles, email } from "@/data/contact";
import { trackEvent } from "@/utils/analytics";

export default function GetInTouchSection() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell section-space contact-layout">
        <div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s talk about what you’re building.</h2></div>
        <div className="contact-copy">
          <p>I’m open to software and AI roles, collaborations, and conversations about building practical tools.</p>
          <a className="action action-dark" href={`mailto:${email}`} onClick={() => trackEvent("email_click", { location: "contact", destination: "mailto" })}><Mail size={18} aria-hidden="true" />{email}</a>
          <div className="contacts">
            {contactProfiles.map(({ label, href, event, destination }) => <a className="text-link" href={href} key={label}
              onClick={() => {
                trackEvent(event, { label, location: "contact", destination });
                if (label === "Medium") trackEvent("medium_click", { location: "contact", destination });
                if (label === "Dev.to") trackEvent("devto_click", { location: "contact", destination });
              }}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
