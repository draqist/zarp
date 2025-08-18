import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZARP_VALUES } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

const WhyChooseZarp = () => {
  return (
    <section id="why-zarp" className="px-5">
      <main className="border-t border-gray-400/35 py-6 flex flex-col gap-3 lg:gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 lg:border-t border-gray-400/35 pt-0 lg:pt-4">
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
          <div className="hidden lg:block col-span-2 rounded-3xl bg-camo/85 p-5">
            <div className="w-12 h-12 rounded-full bg-lemon"></div>
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
  Icon: LucideIcon;
  stretch?: boolean;
}) => {
  return (
    <div
      className={`group border-[1px] border-gray-400/35 p-2 lg:p-5 flex flex-col items-start justify-between rounded-2xl hover:bg-platinum/50 transition-all ease-in cursor-pointer gap-6 ${stretch ? "row-span-3 lg:row-span-4" : "row-span-3"}`}
    >
      <Button className="group-hover:bg-camo/90 w-8 h-8 lg:h-12 lg:w-12 rounded-full flex items-center justify-center bg-muted-foreground/65 transition-all ease-in">
        <Icon className="tex-xs lg:text-lg" />
      </Button>

      <div>
        <h4 className="text-abyss text-md lg:text-lg mb-1"> {title}</h4>
        <p className="text-xs lg:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};
