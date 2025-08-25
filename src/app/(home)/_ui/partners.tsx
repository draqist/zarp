import PartnersCarousel from "@/components/carousels/partners-carousel";
import ZarpCard from "@/components/interactives/zarp-value-card";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Star } from "lucide-react";
import Image from "next/image";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(useGSAP);
// }
const PartnersAndSupporters = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".marquee-item");
    gsap.to(items, {
      xPercent: -100 * items.length, // move all items left
      duration: 30, // how fast it scrolls
      ease: "none",
      repeat: -1, // infinite
      modifiers: {
        xPercent: gsap.utils.wrap(-200 * items.length, 0), // wrap them endlessly
      },
    });
  });
  const partners = [
    "/DHL.png",
    "/fedEx.png",
    "/redstar.png",
    "/ups.png",
    "/gig.png",
    "/DHL.png",
    "/fedEx.png",
    "/redstar.png",
    "/ups.png",
    "/gig.png",
  ];

  return (
    <section
      className="px-5 border-y-[1px] border-gray-400/35 bg-platinum/75"
      id="partners"
    >
      <div className="py-1.25 flex items-start justify-start h-fit text-3xl md:text-4xl font-rhithmic mt-6 mb-10 text-[#444444]">
        Meet our partners
      </div>
      <main className="border-gray-400/35 pt- pb-4 grid grid-rows-1 gap-10">
        <section className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border-[1px] border-camo/30  text-center flex flex-col items-center justify-start rounded-2xl p-2 shadow-2xs gap-2 cursor-pointer relative bg-[#FFFEFE]">
            <div className="relative group h-[400px] overflow-hidden rounded-t-2xl rounded-b-lg p-5 w-full">
              <Image
                src="/dispatch.jpg"
                alt="Zarper of the week"
                fill
                className="object-cover object-top-right rounded-t-2xl rounded-b-lg transform transition-transform duration-300 ease-in group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 w-full mt-2">
              <span>Meet the zarper of the week</span>
              <h2 className="font-livret-sans text-lg lg:text-2xl">
                {" "}
                Adewala Ikemefuna
              </h2>
              <div className="flex items-center w-full justify-center gap-20 mt-3">
                <p> 40 completed zarps</p>
              </div>
            </div>
            <Badge className="absolute top-5 right-5 py-1" variant="secondary">
              <span className="flex items-center gap-2">
                {" "}
                <Star fill="#d26a44" stroke="transparent" size={14} /> 4.9/5
              </span>
            </Badge>
          </div>
          <ZarpCard />
          <div className="border-[1px] border-camo/30  text-center flex flex-col items-center justify-start rounded-2xl p-2 shadow-2xs bg-[#FFFEFE] gap-2 cursor-pointer relative">
            <div className="relative h-[400px] p-5 w-full">
              <Image
                src="/owner.jpg"
                alt="Zarper of the week"
                fill
                className="object-cover object-top-right rounded-t-2xl rounded-b-lg transform transition-transform duration-300 ease-in group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 w-full mt-2">
              <span>Meet the zarper of the week</span>
              <h2 className="font-livret-sans text-lg lg:text-2xl">
                {" "}
                Xiaoma John
              </h2>
              <div className="flex items-center w-full justify-center gap-20 mt-3">
                <p> 720 succesful zarps</p>
              </div>
            </div>
            <Badge className="absolute top-5 right-5 py-1" variant="secondary">
              <span className="flex items-center gap-2">
                {" "}
                <Star fill="#d26a44" stroke="transparent" size={14} /> 4.9/5
              </span>
            </Badge>
          </div>
        </section>
        <PartnersCarousel />

        {/* Marquee */}
        <div className="overflow-hidden row-span-1 mt-6">
          <div className="flex gap-auto items-center whitespace-nowrap group">
            {[...partners, ...partners].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 relative marquee-item"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  height={48}
                  width={120}
                  className="object-contain lg:grayscale group-hover:grayscale-0 transition-all ease-in-out h-12 object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default PartnersAndSupporters;
