"use client";

import { gsap } from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Animate page in
export const animatePageIn = () => {
  const frameBlack = document.getElementById("frame-black");
  const frameRed = document.getElementById("frame-red");
  const logo = document.getElementById("logo");

  if (frameBlack && frameRed && logo) {
    const tl = gsap.timeline();

    // ensure logo starts behind frames
    tl.set(logo, { zIndex: 100 });

    tl.set([frameBlack, frameRed], { xPercent: 0 })
      .to(frameBlack, {
        xPercent: 100,
        duration: 0.8,
        ease: "power3.inOut",
      })
      .to(
        frameRed,
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.6"
      )
      // bring logo above once reveal is done
      .set(logo, { zIndex: 0 }, "-=0.2");
  }
};

// Animate page out
export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const frameBlack = document.getElementById("frame-black");
  const frameRed = document.getElementById("frame-red");
  const logo = document.getElementById("logo");

  if (frameBlack && frameRed && logo) {
    const tl = gsap.timeline({
      onComplete: () => router.push(href),
    });

    // keep logo above content before transition starts
    tl.to(frameRed, {
      xPercent: 0,
      duration: 0.8,
      ease: "power3.inOut",
    })
      .to(
        frameBlack,
        {
          xPercent: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.6"
      )

      // hide logo behind frames once covered
      .set(logo, { zIndex: 0 });
  }
};
