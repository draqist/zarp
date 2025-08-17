import Navbar from "@/components/global/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-zarp">
      <Navbar />
      <div className="top-16 relative">{children}</div>
    </div>
  );
};

export default HomeLayout;
