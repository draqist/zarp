import { FOOTER_LINKS } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-abyss pt-20 px-5 pb-6 text-white flex flex-col gap-10">
      <section className="flex items-end justify-between">
        <h1 className="text-xl lg:text-7xl">
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

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
          <div className="flex gap-2">
            <Input
              placeholder="Your email"
              className="bg-gray-800 border-gray-700 text-white"
            />
            <Button className="bg-orange-600 hover:bg-orange-700">
              Subscribe
            </Button>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm flex items-center justify-between">
        © {new Date().getFullYear()} Zarp. All rights reserved.
        <span className="text-platinum font-rhithmic tracking-tighter">
          Brick by brick - DRAQ
        </span>
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
