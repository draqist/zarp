import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_DATA } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ZarpLogo from "../global/traq-logo";

const RegisterCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
      opts={{ loop: true }}
      className="hidden xl:block"
    >
      <CarouselContent>
        {CAROUSEL_DATA.map((item) => (
          <CarouselItem key={item.id} className="w-full min-h-screen">
            <div className="invisible xl:visible xl:p-2 relative h-full">
              <div className="relative h-full w-full rounded-lg">
                <Image
                  src={item.image}
                  alt="banner-image"
                  fill
                  className="rounded-[36px] object-fill"
                />
                <div className="absolute top-12 right-12 flex gap-5 items-center">
                  <div className="w-[150px] h-0.25 bg-white rounded-full" />
                  <ZarpLogo color="#fff" />
                </div>
                <div className="absolute bottom-12 left-12 flex flex-col gap-5 items-start w-[400px]">
                  <h3
                    className="text-white text-7xl font-normal font-livret-sans"
                    style={{
                      letterSpacing: "-0.04em",
                      lineHeight: "72px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white text-base font-normal font-satoshi">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-12 right-24 flex items-center">
        <CarouselPrevious className="rounded-full p-2 -left-8" />
        <CarouselNext className="rounded-full p-2" />
      </div>
    </Carousel>
  );
};

export default RegisterCarousel;
