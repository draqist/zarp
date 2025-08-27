"use client";

import { animatePageOut } from "@/animations";
import { setRouteToScrollId } from "@/lib/rtk/slices/uiSlice";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function TransitionLink({
  href,
  label,
  children,
}: {
  href: string;
  children?: ReactNode;
  label?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: element, offsetY: 62 },
          ease: "power2.inOut",
        });
      }
      return;
    }
    if (href.includes("#")) {
      const [route, id] = href.split("#");

      if (route === pathname) {
        // Same route, just scroll
        const element = document.getElementById(id);
        if (element) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: element, offsetY: 62 },
            ease: "power2.inOut",
          });
        }
      } else {
        dispatch(setRouteToScrollId(id));
        animatePageOut(`${route}?scrollTo=${id}`, router);
      }
      return;
    }
    if (href.startsWith("/")) {
      if (href !== pathname) {
        animatePageOut(href, router);
      } else if (href === "/" && pathname === "/") {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: 0 },
          ease: "power2.inOut",
        });
      }
      return;
    }
  };

  return <span onClick={handleClick}>{children || label}</span>;
}
