import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="h-[calc(100vh-64px)] hidden lg:grid grid-cols-[1fr_42vw_1fr] grid-flow-row auto-cols-fr auto-rows-[minmax(0, auto)] "
      id="our-story"
    >
      <div className=" grid grid-rows-7">
        <div className="row-span-3 p-10 px-5 text-justify">
          <p className="font-medium text-2xl font-machina tracking-tight mb-4">
            {" "}
            Our story{" "}
          </p>
          <span>
            Zarp was born from a simple frustration: missed packages, slow
            deliveries, and limited courier options. We set out to fix that. By
            connecting traditional delivery services with everyday drivers
            already on the move, we’re making logistics faster, more reliable,
            and more affordable. What began as an idea to solve a personal
            problem is now growing into a community-powered movement to change
            how goods move across cities.
          </span>
        </div>
        <div className="row-span-2 border-y border-inherit"></div>
        <div className="row-span-2 p-10 px-5">
          <h1 className="font-medium text-2xl font-machina tracking-tight mb-4">
            {" "}
            Our Mission{" "}
          </h1>
          <span>
            To build a smarter, more accessible logistics system that empowers
            individuals, supports businesses, and creates opportunities for
            drivers while making delivery seamless for everyone.
          </span>
        </div>
      </div>
      <div className=" border-x-[1px] border-gray-400/35 p-10">
        <div className="relative h-full rounded-4xl max-h-[calc(100vh-212px)] hover:rounded-2xl transition-all ease-in">
          <Image
            src="/ceo.jpg"
            alt="Test"
            fill
            priority
            className="rounded-4xl hover:rounded-[64px] object-cover transition-all ease-in"
          />
        </div>
        <div className="mt-6">
          <h1 className="font-livret-sans font-light mt-2 mb-2 text-3xl text-center">
            {" "}
            Abdullah Abdulfatah O.
          </h1>
          <p className="text-center">CEO & CO-FOUNDER </p>
        </div>
      </div>
      <div className=" grid grid-rows-7">
        <div className="row-span-2 p-10 pb-0 px-5 text-justify">
          <h1 className="font-medium text-2xl font-machina tracking-tight mb-4">
            {" "}
            Our Philosophy{" "}
          </h1>
          <span>
            Zarp is more than a logistics app—it’s a bridge between people,
            businesses, and opportunities. We focus on solving real problems
            with simple, scalable solutions, building trust through innovation,
            openness, and reliability.
          </span>
        </div>
        <div className="row-span-2 border-y p-10 px-5"></div>
        <div className="row-span-3 flex flex-col items-center justify-center">
          <h1 className="text-[230px] font-normal font-livret-sans leading-[220px] text-sage">
            01
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
