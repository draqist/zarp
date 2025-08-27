import { FOOTER_LINKS } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Footer = () => {
  const { push } = useRouter();
  return (
    <div className="bg-abyss min-h-[400px] lg:min-h-[600px] pt-10 lg:pt-20 px-5 pb-6 text-white flex flex-col gap-10 relative">
      <section className="flex items-end justify-between">
        <h1 className="text-xl lg:text-7xl font-rhithmic tracking-tighter">
          Ready to{" "}
          <span className="font-livret-sans text-[#ea910b]"> Zarp</span> it?
        </h1>
        <div className="lg:flex items-center gap-x-10 hidden">
          {FOOTER_LINKS.map((footerItem, id) => (
            <IconLink
              key={id}
              route={footerItem.href}
              title={footerItem.title}
              Icon={footerItem.icon}
            />
          ))}
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* For Users */}
        <div>
          <h4 className="text-lg font-semibold mb-3">For Users</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Become a Zapper</a>
            </li>
            <li>
              <a href="#">Track Your Package</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 py-6 px-5 text-center text-gray-400 text-sm flex items-center justify-between absolute bottom-0 right-0 left-0">
        <span className="hidden lg:inline">
          © {new Date().getFullYear()} Zarp. All rights reserved.
        </span>

        <span className="text-platinum text-xs lg:text-sm font-rhithmic tracking-tighter">
          Brick by brick - <Link href="https://draq.vercel.app/"> DRAQ </Link>
        </span>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="w-6 h-6 rounded-sm bg-transparent border-platinum"
            onClick={() => push("https://x.com/zarp")}
          >
            <Twitter size={12} />
          </Button>
          <Button
            variant="outline"
            className="w-6 h-6 rounded-sm bg-transparent border-platinum"
            onClick={() => push("https://x.com/zarp")}
          >
            <Instagram className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="w-6 h-6 rounded-sm bg-transparent border-platinum"
            onClick={() => push("https://x.com/zarp")}
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="w-6 h-6 rounded-sm bg-transparent border-platinum"
            onClick={() => push("https://x.com/zarp")}
          >
            <Facebook className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const IconLink = ({
  route,
  Icon,
  title,
}: {
  route: string;
  Icon: LucideIcon;
  title: string;
}) => {
  return (
    <Link
      href={route}
      className="flex items-center gap-x-2 hover:text-white text-white/90"
    >
      {<Icon size={15} />}
      <span className=""> {title}</span>
    </Link>
  );
};
