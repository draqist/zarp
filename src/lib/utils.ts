import { clsx, type ClassValue } from "clsx";
import { Home } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Your Items, On the Move",
    description:
      "Connecting vendors, transporters, and customers for lightning-speed deliveries",
    image: "/milad-fakurian-t55GeRpETn0-unsplash.jpg",
  },
  {
    id: 2,
    title: "Zarped to you in a snap",
    description:
      "Experience fast, reliable, and stress-free deliveries anywhere!",
    image: "/pawel-czerwinski-muJlB0u1rHo-unsplash.jpg",
  },
  {
    id: 3,
    title: "Deliveries, Simplified.",
    description: "Effortless transportation made easy with smart solutions",
    image: "/jeremy-bishop-0FW6K87lP1U-unsplash.jpg",
  },
];

export const HOME_NAVBAR_LINKS = [
  {
    title: "Zarp",
    link: "/",
  },
  {
    title: "Customers",
    link: "/customers",
  },
  {
    title: "Vendors",
    link: "/vendors",
  },
  {
    title: "Riders",
  },
];

export const FOOTER_LINKS = [
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
  {
    href: "/",
    title: "Home",
    icon: Home,
  },
];
