"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
gsap.registerPlugin(ScrollToPlugin);

export function useSmoothHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      console.log("this is the hash", hash);

      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      gsap.to(window, {
        duration: 1,
        ease: "power2.inOut",
        scrollTo: hash,
      });
    };

    // Try on mount (after hydration)
    // If content is lazy-loaded, retry a few times
    let tries = 0;
    const tryScroll = () => {
      tries++;
      const done = !!document.getElementById(window.location.hash.slice(1));
      if (done) scrollToHash();
      else if (tries < 20) requestAnimationFrame(tryScroll); // ~20 frames max
    };
    tryScroll();

    // Also react to future hash changes on the same page
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
}
