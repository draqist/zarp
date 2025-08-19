"use client";
import Navbar from "@/components/global/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { ReactNode } from "react";

if (typeof window !== undefined) {
  gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollSmoother, SplitText);
}
const HomeLayout = ({ children }: { children: ReactNode }) => {
  // const main = useRef();
  // const smoother = useRef();

  // useGSAP(
  //   () => {
  //     // create the smooth scroller FIRST!
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".box-c",
  //       pin: true,
  //       start: "center center",
  //       end: "+=300",
  //       markers: true,
  //     });
  //   },
  //   { scope: main }
  // );
  return (
    <div className="bg-zarp" id="smooth-wrapper">
      <Navbar />
      <div className="top-16 relative" id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
