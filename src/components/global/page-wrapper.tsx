"use client";

import { RootState } from "@/lib/rtk/store";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const routeToScrollTo = useSelector(
    (state: RootState) => state.ui.routeToScrollId
  );

  useEffect(() => {
    const id = searchParams.get("scrollTo");
    console.log({ routeToScrollTo, id });
    if (id) {
      const el = document.getElementById(routeToScrollTo);
      if (el) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: el, offsetY: 62 },
          ease: "power2.inOut",
        });
      }
    }
  }, [searchParams, routeToScrollTo]);

  return <>{children}</>;
}
