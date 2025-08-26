"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("scrollTo");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: el, offsetY: 62 },
          ease: "power2.inOut",
        });
      }
    }
  }, [searchParams]);

  return <>{children}</>;
}
