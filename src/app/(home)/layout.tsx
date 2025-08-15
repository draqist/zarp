import Hero from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomeLayout;
