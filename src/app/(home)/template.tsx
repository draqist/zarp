"use client";

import { animatePageIn } from "@/animations";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Zarp from "@/components/global/traq";
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
        className="w-screen h-screen bg-zarp fixed top-0 left-0 z-[50] flex items-center justify-center"
      >
        <div
          className="text-black flex items-center gap-5 text-3xl z-10 opacity-100"
          id="logo"
        >
          <Zarp />
          <span className="font-livret-sans text-2xl"> Zarp </span>
          {/* <ZarpLogo color="#000000" className="text-black" size="40" /> */}
        </div>
      </div>
      <div
        id="frame-red"
        className="w-screen h-screen bg-sage fixed top-0 left-0 z-[40]"
      />

      {children}
    </div>
  );
}
