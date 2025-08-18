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

// export const FAQS = [
//   {
//     id: 1,
//     question: "What exactly is Zarp and how does it work?",
//     answer:
//       "Zarp is a platform designed to simplify and accelerate the way people exchange goods, services, and support. It brings together three groups: vendors who provide products or services, zarpers who facilitate and ensure smooth transactions, and the zarped who are the end recipients. By combining these roles in a single ecosystem, Zarp ensures transparency, accountability, and speed in every interaction. Whether you're selling, mediating, or receiving, the platform provides tools to track activities, manage trust, and maintain a seamless flow from start to finish.",
//     mobile_answer: "Zap is a logistics platform connecting vendors, zappers (delivery partners), and customers (zapees). Vendors list items, zappers deliver, and zapees track orders in real-time."
//   },
//   {
//     id: 2,
//     question: "Who can become a vendor on Zarp?",
//     answer:
//       "Any individual or business with something to offer can register as a vendor on Zarp. Vendors can list their services, products, or even specialized skills. The platform is built to support both small-scale providers (like freelancers and local businesses) and larger entities (like established companies or organizations). Zarp provides vendors with exposure to a broader audience and tools to manage their offerings, track demand, and build credibility through verified interactions.",
//     mobile_answer: "Anyone with valid ID, transport, and a smartphone can become a zapper. Work flexibly, earn per delivery, and join after quick verification."
//   },
//   {
//     id: 3,
//     question: "What is a 'zarper' and why do they matter?",
//     answer:
//       "A zarper is the trusted bridge within the Zarp ecosystem. They are the ones who facilitate transactions, validate processes, and ensure that agreements between vendors and the zarped are fulfilled properly. Think of zarpers as reliable middlemen who reduce the risk of misunderstandings or failed commitments. By ensuring things are done as promised, zarpers make the platform more trustworthy for everyone involved. Anyone who enjoys connecting people and has a reputation for reliability can step into this role.",
//     mobile_answer: "Zap ensures safety with verified zappers, real-time tracking, insurance, and ratings to build trust for vendors, zappers, and zapees."
//   },
//   {
//     id: 4,
//     question: "I’m new to Zarp — do I need to choose a role right away?",
//     answer:
//       "No, you don’t. Zarp is built to be flexible. While many users gravitate naturally towards a role — as a vendor, zarper, or zarped — you can fluidly move between them depending on what you need at the moment. For example, you could offer a service as a vendor in one transaction, then act as a zarper in another, and later be the zarped when you need something delivered or supported. The platform is designed so your account supports multiple roles without requiring separate registrations.",
//   },
//   {
//     id: 5,
//     question: "How does Zarp ensure safety and trust in transactions?",
//     answer:
//       "Trust is at the heart of Zarp. The platform uses multiple layers of verification, reputation scoring, and secure workflows to ensure safety. Vendors build credibility through verified services and customer feedback, zarpers maintain trust by successfully facilitating transactions, and the zarped can rely on transparent tracking of the entire process. Additionally, Zarp incorporates secure payments, dispute resolution mechanisms, and clear terms of service to protect all parties involved.",
//     mobile_answer: "Zap shows delivery fees upfront. Vendors can pay per order or via subscription, and zappers earn per delivery minus a small service fee."
//   },
//   {
//     id: 6,
//     question: "Do I have to pay to use Zarp?",
//     answer:
//       "Zarp is free to join and explore. Depending on your role, certain premium features may come with small service fees. For example, vendors may pay for enhanced visibility or premium listing options, zarpers could earn commissions on facilitation, and the zarped may have optional insurance or priority services available. These fees are designed to keep the platform sustainable while ensuring maximum value for every role without hidden costs.",
//     mobile_answer: "Zap stands out by creating a full ecosystem: vendors manage orders easily, zappers earn flexibly, and zapees enjoy fast, transparent deliveries."
//   },
//   {
//     id: 7,
//     question: "Can I use Zarp outside my local area?",
//     answer:
//       "Absolutely. Zarp is designed to be both local and global. While many interactions may happen within your immediate area (for example, local vendors or nearby zarpers), the platform also supports remote services and global exchanges where applicable. If you’re a freelancer, consultant, or digital vendor, your reach extends far beyond your neighborhood. The platform is being actively scaled to support cross-border participation where possible.",
//     mobile_answer: "Vendors use Zap to deliver without managing drivers. They gain fast deliveries, customer insights, and increased reach."
//   },
//   {
//     id: 8,
//     question:
//       "What makes Zarp different from traditional marketplaces or delivery apps?",
//     answer:
//       "Most platforms focus only on a single dimension — like connecting buyers with sellers or delivering items from point A to point B. Zarp redefines the ecosystem by introducing the third role: the zarper. This creates a unique triangular model where vendors, facilitators, and recipients coexist, ensuring checks and balances throughout the process. The result is a more reliable, human-centered, and versatile platform that adapts to multiple industries, from retail and logistics to services and community-based exchanges.",
//   },
// ];

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
];
