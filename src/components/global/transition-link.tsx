"use client";

import { animatePageOut } from "@/animations";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

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

  const handleClick = () => {
    // console.log({ href, pathname });

    // Case 1: same page hash (#id)
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

    // Case 2: route + hash (/about#team)
    if (href.includes("#")) {
      const [route, id] = href.split("#");
      console.log(route, id, pathname);

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
        // Navigate first, then scroll after transition
        animatePageOut(`${route}?scrollTo=${id}`, router);
      }
      return;
    }

    // Case 3: normal route including home (/)
    if (href.startsWith("/")) {
      if (href !== pathname) {
        animatePageOut(href, router);
      } else if (href === "/" && pathname === "/") {
        // already on home, but maybe want to scroll top
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
