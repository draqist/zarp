"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Head from "next/head";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      gsap.set(".hero-container", { opacity: 1 });
      const split = SplitText.create(".split-words", {
        type: "chars",
        aria: "hidden",
      });

      gsap.from(split.chars, {
        opacity: 0,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.1,
        y: 20,
        autoAlpha: 0,
      });
    });
  });

  // Inside one of the components that loads on your page:
  return (
    <>
      <Head>
        <link rel="preload" href="/hero.jpg" as="image" />
      </Head>
      <section className="px-5 lg:h-[calc(100vh-64px)] relative pt-5 flex flex-col gap-6 hero-container">
        {/* Hero background */}
        <div className="max-h-screen h-[380px] lg:h-9/12 relative rounded-md">
          <Image
            src="/hero.jpg"
            fill
            className="object-cover object-center rounded-md"
            alt="Zarp Image"
            priority
          />
          <div className="absolute left-4 bottom-4 right-4  lg:left-12 lg:bottom-12">
            <h1 className="text-2xl lg:text-7xl text-white split-words">
              <span className="font-livret-sans">Zarp </span> it — Get it there,
              Fast.
            </h1>
            <p className="text-white text-xs lg:text-xl lg:mt-2">
              The fastest way to send, receive, and deliver goods — whether
              you’re a vendor, a zapper, or the zapped.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-8 lg:pb-0">
          <div className="bg-platinum/50 rounded-xl p-4 lg:p-8">
            <h4 className="text-black text-xl md:text-2xl mb-6 font-rhithmic tracking-tighter">
              Deliver <span className="text-orange-500">anything</span>,
              anytime!
            </h4>
            <p className="text-black text-sm leading-relaxed">
              From food to fashion, Zap makes it easy for vendors and
              individuals to send items across town in just a few clicks.
            </p>
          </div>

          <div className="bg-platinum/50 rounded-xl p-4 lg:p-8">
            <h4 className="text-black text-xl md:text-2xl mb-6 font-rhithmic tracking-tighter">
              Earn as a <span className="text-orange-500">Zapper</span>.
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Become part of a growing network of delivery partners, set your
              schedule, and earn on every completed trip.
            </p>
          </div>

          <div className="bg-platinum/50 rounded-xl p-4 lg:p-8">
            <h4 className="text-black text-xl md:text-2xl mb-6 font-rhithmic tracking-tighter">
              Track every <span className="text-orange-500">Zap</span>.
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Enjoy real-time tracking and instant notifications so both senders
              and receivers always know where their package is.
            </p>
          </div>
        </div>

        {/* Marquee strip */}
        {/* <div className="overflow-hidden whitespace-nowrap border-y-[1px] border-gray-400/35 text-black py-1">
          <div className="animate-marquee">
            <Button variant="link">Fast Deliveries</Button>
            <Button variant="link" className="w-full">
              Fast Deliveries
            </Button>
            <Button
              variant="secondary"
              className="rounded-full bg-orange-300 text-white hover:bg-amber-500"
            >
              {" "}
              Get Started{" "}
            </Button>
            <Button variant="link" className="w-full">
              Fast Deliveries
            </Button>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
