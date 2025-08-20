import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import Image from "next/image";
import ZarpCard from "../interactives/zarp-value-card";
import { Badge } from "../ui/badge";

const PartnersCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ loop: true }}
      className="overflow-clip"
    >
      <CarouselContent className="lg:hidden gap-6 relative ml-0 mr-0 px-0 pl-0">
        <CarouselItem className="w-fit -pl-0">
          <div className="border-[1px] border-camo/30  text-center flex flex-col items-center justify-start rounded-2xl p-2 shadow-2xs gap-2 cursor-pointer relative bg-[#FFFEFE]">
            <div className="relative group  h-[400px] overflow-hidden rounded-t-2xl rounded-b-lg p-5 w-full">
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
        </CarouselItem>
        <CarouselItem className="w-fit pl-0">
          <ZarpCard />
        </CarouselItem>
        <CarouselItem className="w-fit pl-0">
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
        </CarouselItem>
      </CarouselContent>
      {/* <div className="absolute top-1/2 bottom-1/2">
        <CarouselPrevious className="rounded-full p-2 bg-white/80 left-1 -top-10 size-6" />
        <CarouselNext className="rounded-full p-2 bg-white/80 left-[350px] -top-10 size-6" />
      </div> */}
    </Carousel>
  );
};

export default PartnersCarousel;
