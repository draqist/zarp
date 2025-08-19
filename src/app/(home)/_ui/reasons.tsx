import Gimbo3 from "@/components/icons/Gimbo3";
import Swift1Icon from "@/components/icons/Swift1";
import { Badge } from "@/components/ui/badge";
import { ZARP_VALUES } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

const WhyChooseZarp = () => {
  return (
    <section id="why-zarp" className="px-5 border-t border-gray-400/35">
      <main className="py-10 flex flex-col gap-3 lg:gap-10">
        <Badge
          variant="outline"
          className="py-1.25 flex items-end justify-end rounded-2xl font-rhithmic"
        >
          Why choose{" "}
          <p className="font-livret-sans text-sm text-orange-600 items-center justify-center -mb-0.5">
            {" "}
            Zarp?{" "}
          </p>
        </Badge>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-0 lg:pt-4">
          <h1 className="text-xl lg:text-4xl font-rhithmic max-w-2xl tracking-tight">
            Experience excellence & speed <br /> with{" "}
            <span className=""> Zarp </span>
          </h1>
          <p className="text-muted-foreground text-justify lg:text-left">
            We prioritize speed, reliability, and a customer-first approach
            making your satisfaction our utmost priority — Experience smoother
            as operations as a vendor and seamless deliveries as a customer with
            a logistics service committed to your service. <br />{" "}
            <Link
              href="/register"
              className="group flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors ease-in mt-2 hover:text-orange-400/90 text-orange-600 w-fit"
            >
              {" "}
              Join Zarp today{" "}
              <ArrowRight
                className="group-hover:animate-pulse group-hover:-rotate-45 group-hover:transition-all ease-in"
                size={16}
              />
            </Link>
          </p>
        </div>

        <section
          id="bento_feature_grid"
          className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4"
        >
          <div className="hidden lg:block col-span-2 rounded-3xl border-gray-400/35 border-[1px] hover:bg-platinum/50 transition-all ease-in p-5 cursor-pointer">
            <div className="relative flex flex-col items-start justify-between w-full h-full">
              <h1 className="text-4xl mb-4 font-livret-sans text-center text-abyss">
                {" "}
                Trust is the backb
                <div className="w-6 h-6 inline">
                  <Gimbo3 className="w-6 h-6 inline" />
                </div>
                ne of our operations
              </h1>
              <Swift1Icon />
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-2 grid-rows-6 lg:grid-rows-7 gap-4">
            {ZARP_VALUES.map((value) => (
              <ValueCard
                key={value.id}
                title={value.title}
                description={value.description}
                Icon={value.icon}
                stretch={value.id === 2 || value.id === 3}
              />
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default WhyChooseZarp;

const ValueCard = ({
  stretch,
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  stretch?: boolean;
}) => {
  return (
    <div
      className={`group border-[1px] border-gray-400/35 p-2 lg:p-5 flex flex-col items-start justify-between rounded-2xl hover:bg-platinum/50 transition-all ease-in cursor-pointer gap-6 ${stretch ? "row-span-3 lg:row-span-4" : "row-span-3"}`}
    >
      {/* <Button
        variant="outline"
        className="group-hover:bg-camo/90 w-8 h-8 lg:h-12 lg:w-12 rounded-full flex items-center justify-center bg-muted-foreground/65 transition-all ease-in"
      >
      </Button> */}
      <div className="w-8 h-8 lg:h-10 lg:w-10">
        <Icon
          className={`grayscale-0 lg:grayscale-75 group-hover:grayscale-0 transition-all ease-in ${title === "Trust & Transparency" && "rounded-[10px]"} `}
        />
      </div>

      <div>
        <h4 className="text-abyss text-md lg:text-lg mb-1"> {title}</h4>
        <p className="text-xs lg:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};
