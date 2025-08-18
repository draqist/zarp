import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}
const PartnersAndSupporters = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".marquee-item");
    gsap.to(items, {
      xPercent: -100 * items.length, // move all items left
      duration: 30, // how fast it scrolls
      ease: "none",
      repeat: -1, // infinite
      modifiers: {
        xPercent: gsap.utils.wrap(-100 * items.length, 0), // wrap them endlessly
      },
    });
  });
  const partners = [
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
    "/dhl.png",
    "/fedex.png",
  ];

  return (
    <section className="px-5 bg-platinum/75" id="partners">
      <main className="border-t border-gray-400/35  pt-6">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 font-rhithmic">
            Join the Zarp Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Riders, vendors, and partners building the fastest and most reliable
            delivery ecosystem together.
          </p>
          <button className="mt-6 px-6 py-3 rounded-2xl bg-black text-white hover:opacity-80 transition">
            Become a Partner
          </button>
        </div>

        {/* Spotlight Wide Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* <div className="p-8 border rounded-2xl bg-transparent">
            <h3 className="text-xl font-semibold mb-2">
              🚴 Rider of the Month
            </h3>
            <p className="text-muted-foreground">
              Meet <span className="font-medium">Adeyemi</span>, who completed{" "}
              <span className="font-medium">420 deliveries</span> with a 4.9⭐
              rating!
            </p>
          </div>

          <div className="p-8 border rounded-2xl bg-transparent">
            <h3 className="text-xl font-semibold mb-2">
              🏪 Vendor of the Month
            </h3>
            <p className="text-muted-foreground">
              <span className="font-medium">Mama Bisi’s Kitchen</span> delighted
              over <span className="font-medium">800 customers</span> this month
              with fresh, fast meals.
            </p>
          </div> */}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div
            className="flex gap-12  whitespace-nowrap"
            // animate={{ x: ["0%", "-100%"] }}
            // transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...partners, ...partners].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-16 relative marquee-item"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition"
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
