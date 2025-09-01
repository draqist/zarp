import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="min-h-[calc(100vh-64px)] hidden lg:grid grid-cols-[1fr_38vw_1fr] @min-[1280px]:grid-cols-[1fr_42vw_1fr] grid-flow-row auto-cols-fr auto-rows-[minmax(0, auto)] "
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
        <div className="row-span-2 flex flex-col justify-between p-5 py-10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-normal font-livret-sans text-sage">
                1,200
              </h1>
              <span className="">deliveries processed</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-normal font-livret-sans text-sage">
                1,000
              </h1>
              <span className="">active zarpers</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-normal font-livret-sans text-sage">
              1,000,000
            </h1>
            <span className="">processed earnings</span>
          </div>
        </div>
        <div className="row-span-2 border-y p-10 px-5"></div>
        <div className="row-span-3 p-10 pb-0 px-5 text-justify">
          <h1 className="font-medium text-2xl font-machina tracking-tight mb-4">
            {" "}
            Our Philosophy{" "}
          </h1>
          <span>
            Zarp isn’t just a logistics app—it’s a bridge between people,
            businesses, and opportunities. We believe in solving real-world
            problems with practical solutions that work today and scale for
            tomorrow. Through openness, innovation, and continuous improvement,
            we’re building more than a service—we’re building a trusted
            ecosystem that redefines the future of delivery.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
