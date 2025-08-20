import { FAQS } from "@/lib/utils";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";

// gsap.registerPlugin(ScrollToPlugin);

const HomeFaq = () => {
  return (
    <section
      className="flex flex-col gap-3 lg:gap-10 lg:border-b lg:border-gray-400/35"
      id="faq"
    >
      <div className="grid grid-cols-1 pt-10 px-5">
        <h1 className="text-lg lg:text-4xl font-rhithmic text-abyss font-medium tracking-tighter">
          Frequently Asked Questions
        </h1>
        {/* <h1 className="text-lg lg:text-4xl font-rhithmic text-abyss font-medium tracking-tighter col-span-3 text-right">
          FAQ — Answers
        </h1> */}
      </div>
      <FAQItems />
      <MobileFAQItems />
    </section>
  );
};

export default HomeFaq;

const FAQItems = () => {
  const [activeId, setActiveId] = useState<number>(FAQS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToAnswer = (id: number) => {
    setActiveId(id);
    const el = itemRefs.current[id];
    if (containerRef.current && el) {
      gsap.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut",
        scrollTo: { y: el },
        // onComplete: () => {
        //   gsap.fromTo(
        //     el,
        //     { autoAlpha: 0, y: 0 }, // start hidden, slight downward offset
        //     { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
        //   );
        // },
      });
    }
  };
  return (
    <main className="hidden lg:grid grid-cols-2 lg:grid-cols-5 border-t-[1px] border-gray-400/35 lg:min-h-[500px]">
      <div className="flex flex-col col-span-2 lg:col-span-2">
        {FAQS.map((qA) => (
          <div
            className={`flex items-center gap-2.5 lg:gap-5 border-b border-gray-400/35 p-2 lg:p-5 group last:border-none cursor-pointer hover:bg-platinum/50 transition-colors ${
              activeId === qA.id ? "bg-platinum/50" : "bg-transparent"
            }`}
            key={qA.id}
            onMouseOver={() => scrollToAnswer(qA.id)}
            onClick={() => scrollToAnswer(qA.id)}
          >
            <Button
              className={`rounded-full w-8 h-8 text-xs lg:text-sm transition-all ease-in font-rhithmic 
                ${
                  activeId === qA.id
                    ? "bg-orange-400 text-white"
                    : "bg-muted-foreground/65 group-hover:bg-orange-400"
                }`}
            >
              {qA.id}
            </Button>
            <p className="font-rhithmic text-xs lg:text-base tracking-tighter font-medium">
              {qA.question}
            </p>
          </div>
        ))}
      </div>
      <section
        ref={containerRef}
        className="overflow-hidden min-h-full max-h-[625px] hidden lg:block lg:col-span-3 pb-20"
      >
        {FAQS.map((qA) => (
          <div
            key={qA.id}
            ref={(el) => {
              itemRefs.current[qA.id] = el;
            }}
            className="h-[625px] w-full flex flex-col justify-between gap-5 px-5 py-4 border-l border-gray-400/35 text-lg text-justify"
          >
            <p>{qA.answer}</p>
            <div className="grid grid-cols-2 gap-3 min-h-[411px] h-dvh">
              <main className="p-1 bg-platinum/50 rounded-lg h-full">
                <div className="relative h-full w-full">
                  <Image
                    src="/image.webp"
                    fill
                    alt="App Image"
                    className="rounded-md object-cover"
                  />
                </div>
              </main>
              <main className="p-1 bg-platinum/50 rounded-lg">
                <div className="relative h-full w-full p-2">
                  <Image
                    src="/nurulloh-a-a-4_Ha_neGOEY-unsplash.jpg"
                    fill
                    alt="App Image"
                    className="rounded-md object-cover"
                  />
                </div>
              </main>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

const MobileFAQItems = () => {
  const [activeId, setActiveId] = useState<number>(FAQS[0].id);
  return (
    <div className="flex flex-col lg:hidden">
      <Accordion type="single" collapsible className="w-full px-4">
        {FAQS.map((qA) => (
          <AccordionItem key={qA.id} value={qA.id.toString()}>
            <AccordionTrigger className="hover:bg-platinum/50">
              <div
                className={`flex items-center gap-2.5 group last:border-none cursor-pointer transition-colors ${
                  activeId === qA.id ? "" : "bg-transparent"
                }`}
                key={qA.id}
                onClick={() => setActiveId(qA.id)}
              >
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center text-xs lg:text-sm transition-all ease-in font-rhithmic 
                    ${
                      activeId === qA.id
                        ? "bg-orange-400 text-white"
                        : "bg-muted-foreground/65 group-hover:bg-orange-400"
                    }`}
                >
                  {qA.id}
                </div>
                <p className="font-rhithmic text-xs lg:text-base tracking-tighter font-medium">
                  {qA.question}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              {qA.mobile_answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
