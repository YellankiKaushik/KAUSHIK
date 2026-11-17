import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { trackPageView } from "@/utils/analytics";

export default function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (hash) {
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "instant" });
        if (navigationType !== "POP") {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        }
      }
      return;
    }
    if (navigationType !== "POP") {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname, search, hash, key, navigationType]);

  useEffect(() => {
    trackPageView(`${window.location.pathname}${search}`, document.title);
  }, [pathname, search]);

  return null;
}
