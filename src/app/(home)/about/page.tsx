"use client";

import AboutHero from "./_ui/about-hero";
import AboutHeroMobile from "./_ui/about-hero-mobile";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative top-16">
      <AboutHero />
      <AboutHeroMobile />
      <div className="h-[700px] bg-abyss flex item-center" id="#team"></div>
    </main>
  );
};

export default AboutPage;
