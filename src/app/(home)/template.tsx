"use client";

import { animatePageIn } from "@/animations";
import Navbar from "@/components/global/navbar";
import ZarpLogo from "@/components/global/traq-logo";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="frame-black"
        className="w-screen h-screen bg-zarp fixed top-0 left-0 z-[50]"
      />
      <div
        id="frame-red"
        className="w-screen h-screen bg-[#8a9a84] fixed top-0 left-0 z-[40]"
      />

      <div
        className="fixed w-screen h-screen top-1/2 left-1/2 text-white text-3xl z-10 opacity-1"
        id="logo"
      >
        <ZarpLogo color="#fff" />
      </div>

      {children}
    </div>
  );
}
