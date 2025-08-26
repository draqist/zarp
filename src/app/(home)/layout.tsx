"use client";
import PageWrapper from "@/components/global/page-wrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother);
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
      <div className="bg-zarp" id="smooth-wrapper">
        <div className="" id="smooth-content">
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
