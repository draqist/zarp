"use client";
import Navbar from "@/components/global/navbar";
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
      <Navbar />
      <div className="bg-zarp" id="smooth-wrapper">
        <div className="top-16 relative" id="smooth-content">
          {children}
        </div>
        <div className="g-scrollbar" data-es-scrollbar>
          <div
            className="g-scrollbar__inner"
            data-es-scrollbar-inner
            style={{ height: "100%" }}
          >
            <div
              className="g-scrollbar__thumb"
              data-es-scrollbar-thumb
              style={{
                height: "164.367px",
                transform: "matrix(1, 0, 0, 1, 0, 0)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
