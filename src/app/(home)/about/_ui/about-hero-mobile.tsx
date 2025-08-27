import Image from "next/image";

const AboutHeroMobile = () => {
  return (
    <section className="flex lg:hidden min-h-screen py-10 px-5 w-full">
      <div className="flex flex-col gap-4 text-justify">
        <div className="flex text-[#010101] relative font-machina font-medium items-start justify-start">
          <span className="h-3 w-3 rounded-full bg-[#010101] mr-2.5" />
          <span className="leading-4">About</span>
        </div>
        <h1 className="font-machina font-semibold text-5xl">
          {/* Who we are */}
          Our Story
        </h1>
        <div className="p-2.5 border border-gray-400/35 rounded-4xl bg-platinum/35">
          <Image
            src="/ceo.jpg"
            alt="Test"
            width={500}
            height={500}
            priority
            className="rounded-3xl hover:rounded-[64px] object-cover transition-all ease-in"
          />
          <div className="mt-1">
            <h1 className="font-livret-sans font-light text-3xl text-center">
              {" "}
              Abdullah Abdulfatah O.
            </h1>
            <p className="text-center">CEO & CO-FOUNDER </p>
          </div>
        </div>
        <span>
          Zarp was born from a simple frustration: missed packages, slow
          deliveries, and limited courier options. We set out to fix that. By
          connecting traditional delivery services with everyday drivers already
          on the move, we’re making logistics faster, more reliable, and more
          affordable. What began as an idea to solve a personal problem is now
          growing into a community-powered movement to change how goods move
          across cities.
        </span>
      </div>
    </section>
  );
};

export default AboutHeroMobile;
