"use client";
import Navbar from "@/components/global/navbar";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollToPlugin);
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-zarp">
      <Navbar />
      <div className="top-16 relative" id="smooth-wrapper">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
