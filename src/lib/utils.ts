import Gimbo from "@/components/icons/Gimbo";
import Gimbo1 from "@/components/icons/Gimbo1";
import Gimbo4 from "@/components/icons/Gimbo4";
import Gimbo5 from "@/components/icons/Gimbo5";
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

export const FAQS = [
  {
    id: 1,
    question: "What is Zarp and how does it work?",
    answer:
      "Zarp is a smart logistics platform that connects vendors, zarpers (delivery partners), and customers (zarpees) in one seamless ecosystem. Vendors list their products, zarpers pick up and deliver items, and zarpees receive them with real-time tracking and secure payments. The platform automates logistics routing, provides updates at every stage, and ensures all parties have a smooth experience. Whether you’re a vendor looking for reach, a zarper wanting flexible work, or a zarpee ordering goods, Zarp provides a transparent and efficient logistics solution.",
    mobile_answer:
      "Zarp is a logistics platform connecting vendors, zarpers (delivery partners), and customers (zarpees). Vendors list items, zarpers deliver, and zarpees track orders in real-time.",
  },
  {
    id: 2,
    question: "Who can become a Zarp delivery partner (Zarper)?",
    answer:
      "Anyone with a valid form of identification, a reliable means of transport (bike, car, or van), and a smartphone can apply to become a zarper. Zarp values inclusivity and flexibility, meaning you can work on your own schedule, take as many or as few deliveries as you want, and earn based on completed trips. All zarpers go through a quick verification process to ensure safety and trustworthiness for vendors and zarpees.",
    mobile_answer:
      "Anyone with valid ID, transport, and a smartphone can become a zarper. Work flexibly, earn per delivery, and join after quick verification.",
  },
  {
    id: 3,
    question: "How does Zarp ensure safety and reliability?",
    answer:
      "Safety and reliability are at the heart of Zarp. For vendors, Zarp verifies every zarper before allowing them onto the platform. For zarpers, there’s insurance and support in case of incidents. For zarpees, all orders are tracked in real-time, and every delivery is backed with ratings and feedback. This multi-layer trust system ensures that everyone on the platform feels safe, informed, and supported at all times.",
    mobile_answer:
      "Zarp ensures safety with verified zarpers, real-time tracking, insurance, and ratings to build trust for vendors, zarpers, and zarpees.",
  },
  {
    id: 4,
    question: "How much does it cost to use Zarp?",
    answer:
      "For zarpees (customers), Zarp charges a transparent delivery fee calculated based on distance, delivery type, and urgency. Vendors can choose flexible plans—pay per delivery or opt for subscription-based packages for frequent orders. Zarpers (delivery partners) don’t pay to join, but Zarp deducts a small service fee from each completed delivery to maintain platform quality and provide customer support. All costs are shown upfront before confirming an order, so there are no hidden surprises.",
    mobile_answer:
      "Zarp shows delivery fees upfront. Vendors can pay per order or via subscription, and zarpers earn per delivery minus a small service fee.",
  },
  {
    id: 5,
    question: "What makes Zarp different from other delivery services?",
    answer:
      "Unlike traditional logistics platforms, Zarp is built as a complete ecosystem for everyone involved. Vendors get tools to manage orders, track deliveries, and grow reach. Zarpers enjoy unmatched flexibility and fair earnings. Zarpees benefit from fast, affordable deliveries with transparent pricing and real-time updates. Additionally, Zarp’s branding—calling delivery partners 'zarpers' and customers 'zarpees'—creates a community-driven identity that’s modern, trendy, and designed for social media traction.",
    mobile_answer:
      "Zarp stands out by creating a full ecosystem: vendors manage orders easily, zarpers earn flexibly, and zarpees enjoy fast, transparent deliveries.",
  },
  {
    id: 6,
    question: "How do vendors benefit from Zarp?",
    answer:
      "Vendors benefit from Zarp by gaining access to a reliable logistics network without the need to hire or manage drivers themselves. Zarp handles the delivery side while vendors focus on selling. Vendors also get insights from data analytics, helping them understand customer behavior and optimize operations. With customizable delivery options, vendors can reach more customers faster, improving satisfaction and loyalty.",
    mobile_answer:
      "Vendors use Zarp to deliver without managing drivers. They gain fast deliveries, customer insights, and increased reach.",
  },
  {
    id: 7,
    question: "Can I track my delivery in real-time?",
    answer:
      "Yes! Real-time delivery tracking is a core feature of Zarp. From the moment your order is picked up to when it arrives at your doorstep, you’ll see every step in the app. Notifications keep you updated, and you’ll always know the estimated time of arrival. This feature builds confidence for zarpees and accountability for zarpers, ensuring smooth logistics every time.",
    mobile_answer:
      "Yes, Zarp lets you track deliveries in real time with notifications and live ETAs for peace of mind.",
  },
  // {
  //   id: 8,
  //   question: "Can I use Zarp for personal deliveries?",
  //   answer:
  //     "Absolutely! Zarp isn’t just for businesses. Individuals can send personal items — from gifts to urgent documents — through our platform. The process is simple: book a Zarper, set the pickup and drop-off, and track your item in real time until it arrives safely at its destination.",
  //   mobile_answer:
  //     "Yes, anyone can use Zarp to send personal packages, gifts, or documents easily and securely."
  // },
  {
    id: 8,
    question: "How is Zarp different from other logistics platforms?",
    answer:
      "Unlike other platforms, Zarp combines affordability, trust, and community-driven logistics. We don’t just connect people — we build an ecosystem where vendors scale, Zarpers earn flexibly, and customers enjoy seamless service. Our approach goes beyond transactions; we’re building a logistics culture where everyone benefits equally, creating lasting value for all.",
    mobile_answer:
      "Zarp stands out by blending trust, affordability, and community-driven logistics that benefit all users.",
  },
];

export const ZARP_VALUES = [
  {
    id: 1,
    icon: Gimbo, // lucide-react icon name
    title: "Speed That Matters",
    description:
      "Get your items delivered quickly with Zarp’s optimized routes and reliable zappers. No more delays or excuses — just fast, efficient deliveries.",
  },
  {
    id: 2,
    icon: Gimbo1,
    title: "Seamless Experience",
    description:
      "Whether you’re a vendor, a zapper, or the recipient, Zarp makes logistics simple with one unified platform. Track orders, manage pickups, and stay updated in real-time.",
  },
  {
    id: 3,
    icon: Gimbo5,
    title: "Trust & Transparency",
    description:
      "Know exactly where your package is, who’s handling it, and when it will arrive. Full visibility, no hidden fees, no surprises.",
  },
  // {
  //   id: 4,
  //   icon: "Store",
  //   title: "Empowering Local Businesses",
  //   description:
  //     "Vendors grow faster with reliable logistics built to scale their operations. Your success is powered by smooth deliveries.",
  // },
  {
    id: 4,
    icon: Gimbo4,
    title: "Community of Zappers",
    description:
      "Logistics isn’t faceless — Zarp connects you with real, vetted individuals who make things happen. Join a trusted network built on reliability.",
  },
];
