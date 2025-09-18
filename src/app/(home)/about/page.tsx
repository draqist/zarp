"use client";

import AboutHero from "./_ui/about-hero";
import AboutHeroMobile from "./_ui/about-hero-mobile";
import ZarpTeam from "./_ui/team";
import ValuesMobile from "./_ui/values-mobile";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative top-16">
      <AboutHero />
      <AboutHeroMobile />
      <ValuesMobile />
      <ZarpTeam />
    </main>
  );
};

export default AboutPage;
