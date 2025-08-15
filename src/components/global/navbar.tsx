import { Menu } from "lucide-react";
import Link from "next/link";
import Zarp from "./traq";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between absolute right-0 left-0 px-6 py-5">
      <Zarp color="orange" />

      <div className="hidden lg:flex h-12 justify-between items-center rounded-full p-2 px-3 gap-x-20 navbar-container">
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
        <Link href="/customers"> Customers </Link>
      </div>
      <Menu size={20} />
    </div>
  );
};

export default Navbar;
