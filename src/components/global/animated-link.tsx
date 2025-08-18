"use client";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

type ListItemProps = {
  title: string;
  targetId: string;
  description: string;
};

export function AnimatedListItem({
  title,
  targetId,
  description,
}: ListItemProps) {
  let path: string;
  if (typeof window !== undefined) {
    path = window.location.pathname;
  }
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `${targetId}`, offsetY: 70 },
      ease: "power2.inOut",
    });
  };

  return (
    <li>
      <NavigationMenuLink className="bg-transparent" asChild>
        <Link
          href={`${targetId}`}
          onClick={handleClick}
          className="block px-4 py-2 hover:text-primary"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
