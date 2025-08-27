"use client";

import AboutHero from "./_ui/about-hero";
import AboutHeroMobile from "./_ui/about-hero-mobile";
import ValuesMobile from "./_ui/values-mobile";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative top-16">
      <AboutHero />
      <AboutHeroMobile />
      {/* <div
        className="bg-abyss min-h-screen text-white flex flex-col gap-6 item-center"
        id="#team"
      >
        <section className="flex lg:hidden px-2 w-full flex-col">
          <div className="flex flex-col gap-4 pt-6 mt-4 px-3 pb-6 border border-white/40 rounded-t-2xl border-b">
            <h1 className="font-machina font-semibold text-3xl">
              What we&apos;re dedicated to
            </h1>
            <span className="text">
              To build a smarter, more accessible logistics system that empowers
              individuals, supports businesses, and creates opportunities for
              drivers — while making delivery seamless for everyone.
            </span>
          </div>
          <section className="px-1 border-x border-white/40 flex items-center justify-center py-6 pb-8">
            <VideoPlayer width={400} height={300} source="/riderHd.mp4" />
          </section>
          <div className="flex flex-col gap-4 pt-6 px-3 pb-6 border border-white/40 border-b">
            <h1 className="font-machina font-semibold text-3xl">
              What we value
            </h1>
            <span className="text">
              To build a smarter, more accessible logistics system that empowers
              individuals, supports businesses, and creates opportunities for
              drivers — while making delivery seamless for everyone.
            </span>
          </div>
        </section>
      </div> */}
      <ValuesMobile />
      {/* <Footer /> */}
    </main>
  );
};

export default AboutPage;
