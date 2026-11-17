import { useEffect } from "react";

export default function PortfolioMotion() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    let disposed = false;
    let cleanup: (() => void) | undefined;

    const load = () => {
      if (!motion.matches || cleanup) return;
      void import("@/utils/portfolioMotion").then(({ mountPortfolioMotion }) => {
        if (!disposed && motion.matches && !cleanup) cleanup = mountPortfolioMotion();
      }).catch(() => {
        // The page stays fully usable if the optional motion chunk cannot load.
      });
    };

    motion.addEventListener("change", load);
    load();

    return () => {
      disposed = true;
      motion.removeEventListener("change", load);
      cleanup?.();
    };
  }, []);

  return null;
}
