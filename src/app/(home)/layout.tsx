import Navbar from "@/components/global/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#FFFEFE]">
      <Navbar />
      <div className="top-16">{children}</div>
    </div>
  );
};

export default HomeLayout;
