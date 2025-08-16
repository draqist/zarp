import { Menu } from "lucide-react";
import ZarpLogo from "./traq-logo";
import { ZarpNavigation } from "./zarp-nav";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed right-0 left-0 z-10 p-5 font-inter">
      <ZarpLogo color="#121212" className="text-[#121212]" />

      {/* <div className="hidden lg:flex justify-between items-center gap-x-20">
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
      </div> */}
      <ZarpNavigation />
      <Menu size={20} className="" />
    </div>
  );
};

export default Navbar;
