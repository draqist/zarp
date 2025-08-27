"use client";

import AboutHero from "./_ui/about-hero";
import AboutHeroMobile from "./_ui/about-hero-mobile";
import ValuesMobile from "./_ui/values-mobile";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative top-16">
      <AboutHero />
      <AboutHeroMobile />
      <ValuesMobile />
    </main>
  );
};

export default AboutPage;
