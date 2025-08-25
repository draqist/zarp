"use client";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <div className="w-[calc(100vw/32*4w)] flex items-center justify-center pt-[116px] pb-[135px] px-[180px] @min-7xl:w-screen">
        <section className="flex flex-nowrap">
          <div className="flex text-[#010101] w-[180px] relative font-machina font-bold items-start justify-start">
            <span className="h-3.5 w-3.5 rounded-full bg-[#010101] mr-2.5" />
            <span className="leading-4">About</span>
          </div>
          <div className="text-[124px] grow-0 font-machina font-bold leading-[116px]">
            Who we are
          </div>
        </section>
      </div>
      <div className="h-screen"></div>
      <div className="h-[700px] bg-abyss flex item-center" id="#team"></div>
    </main>
  );
};

export default AboutPage;
