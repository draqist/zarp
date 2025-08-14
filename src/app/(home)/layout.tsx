import Navbar from "@/components/global/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default HomeLayout;
