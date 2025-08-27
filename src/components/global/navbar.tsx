import MobileMenu from "./mobile-menu";
import TransitionLink from "./transition-link";
import ZarpLogo from "./traq-logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed bg-zarp right-0 left-0 z-10 p-5 font-inter h-16 shadow-2xs border-gray-400/35 ">
      <TransitionLink href="/">
        <ZarpLogo color="#121212" className="text-[#121212]" />
      </TransitionLink>
      {/* <ZarpNavigation /> */}
      <MobileMenu />
    </div>
  );
};

export default Navbar;
