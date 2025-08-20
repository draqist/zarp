"use client";
import Navbar from "@/components/global/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useGSAP(
    () => {
      // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );
  return (
    <>
      <Navbar />
      <div className="bg-zarp" id="smooth-wrapper">
        <div className="top-16 relative" id="smooth-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
