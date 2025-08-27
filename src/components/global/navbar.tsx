import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import ZarpLogo from "./traq-logo";
import { ZarpNavigation } from "./zarp-nav";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed bg-zarp right-0 left-0 z-10 p-5 font-inter h-16 shadow-2xs border-gray-400/35 ">
      <ZarpLogo routeHome color="#121212" className="text-[#121212]" />
      <ZarpNavigation />
      <MobileMenu />
      <Link
        href="/register"
        className="font-rhithmic bg-sage text-white hover:text-white lg:flex items-center px-3 py-2 gap-2 rounded-md text-xs hover:bg-orange-400 transition-all ease-in hidden group"
      >
        GET STARTED{" "}
        <ArrowRight
          size={14}
          className="group-hover:-rotate-45 group-hover:animate-pulse transition-all ease-in"
        />
      </Link>
    </div>
  );
};

export default Navbar;

// const MobileMenu = () => {
//   return (
//     <Sheet>
//       <SheetTrigger className="sm:hidden">
//         <Menu size={20} className="inline-block lg:hidden" />
//       </SheetTrigger>
//       <SheetContent className="w-screen sm:hidden">
//         <SheetHeader>
//         </SheetHeader>
//         <div className="grid grid-cols-1 gap-5 p-10">
//           <TransitionLink href="/"> Home </TransitionLink>
//           <TransitionLink href="/about">About</TransitionLink>
//           <TransitionLink href="/contact"> Contact </TransitionLink>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };
