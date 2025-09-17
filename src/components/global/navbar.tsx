import MobileMenu from "./mobile-menu";
import TransitionLink from "./transition-link";
import ZarpLogo from "./traq-logo";
import { ZarpNavigation } from "./zarp-nav";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed bg-zarp right-0 left-0 z-10 p-5 font-inter h-16 shadow-2xs border-gray-400/35 ">
      <TransitionLink href="/">
        <ZarpLogo color="#121212" className="text-[#121212]" />
      </TransitionLink>
      <ZarpNavigation />
      {/* <Link
        href="/register"
        className="font-rhithmic bg-sage text-white hover:text-white lg:flex items-center px-3 py-2 gap-2 rounded-md text-xs hover:bg-orange-400 transition-all ease-in hidden group"
      >
        GET STARTED{" "}
        <ArrowRight
          size={14}
          className="group-hover:-rotate-45 group-hover:animate-pulse transition-all ease-in"
        />
      </Link> */}
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
