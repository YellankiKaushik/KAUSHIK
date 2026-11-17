import gsap from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function mountPortfolioMotion() {
  const conditions = gsap.matchMedia();
  conditions.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
    const scroll = new Lenis({ autoRaf: true, smoothWheel: true, syncTouch: false, duration: 0.75 });
    const context = gsap.context(() => {
      const portrait = document.querySelector(".hero-portrait");
      const accent = document.querySelector("[data-hero-accent]");
      // Word entrance adapted from the React Bits Blur Text pattern.
      if (accent) gsap.fromTo(accent, { y: 6, filter: "blur(2px)" }, {
        y: 0, filter: "blur(0px)", duration: 0.45, ease: "power2.out", clearProps: "transform,filter",
      });
      if (portrait) gsap.fromTo(portrait, { y: 12 }, { y: 0, duration: 0.64, ease: "power2.out", clearProps: "transform" });
    });
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (entry.boundingClientRect.top < window.innerHeight * 0.3) continue;
        context.add(() => gsap.fromTo(entry.target, { y: 9 }, { y: 0, duration: 0.38, ease: "power2.out", clearProps: "transform" }));
      }
    }, { threshold: 0.15 });

    document.querySelectorAll("[data-reveal]").forEach(item => observer.observe(item));

    return () => {
      observer.disconnect();
      context.revert();
      scroll.destroy();
    };
  });

  return () => conditions.revert();
}
