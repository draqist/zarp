"use client";
import { Toaster } from "@/components/ui/sonner";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Geist, Geist_Mono, Inter, Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-satoshi",
});

const livretSans = localFont({
  src: [
    {
      path: "./fonts/LivretDisplayRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LivretDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-livret-sans",
});

const rhithmic = localFont({
  src: [
    {
      path: "./fonts/rhitmic.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-rhithmic",
});
const machina = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-machina",
});

// export const metadata: Metadata = {
//   title: "Zarp – Fast, Reliable Delivery for Vendors, Zarpers & Customers",
//   description:
//     "Zarp is a logistics platform that connects vendors, Zarpers (delivery partners), and customers. Send anything, earn flexibly, and track your deliveries in real time — all in one app.",
//   keywords: [
//     "Zarp delivery",
//     "on-demand delivery",
//     "logistics platform",
//     "become a delivery partner",
//     "fast package delivery",
//     "real-time delivery tracking",
//     "vendor logistics solution",
//     "earn with delivery jobs",
//     "send packages fast",
//     "affordable delivery service",
//     "Zarp",
//     "Zarp app",
//   ],
//   openGraph: {
//     title: "Zarp – Fast, Reliable Delivery for Vendors, Zarpers & Customers",
//     description:
//       "Send, earn, and receive faster with Zarp. A modern logistics platform built for vendors, Zarpers, and customers.",
//     url: "https://zarps.vercel.app",
//     siteName: "Zarp",
//     images: [
//       {
//         url: "https://i.ibb.co/9m5kW979/image.png",
//         width: 1440,
//         height: 900,
//         alt: "Zarp delivery platform preview",
//       },
//       {
//         url: "https://i.ibb.co/9m5kW979/image.png",
//         width: 1200,
//         height: 630,
//         alt: "Zarp delivery platform preview",
//       },
//       {
//         url: "https://i.ibb.co/9m5kW979/image.png",
//         width: 1920,
//         height: 1080,
//         alt: "Zarp delivery platform preview",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Zarp – Fast, Reliable Delivery for Everyone",
//     description:
//       "Vendors, Zarpers, and customers — Zarp makes logistics seamless, transparent, and affordable.",
//     images: ["https://i.ibb.co/9m5kW979/image.png"],
//   },
// };

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${livretSans.variable} ${rhithmic.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSerif.variable} ${machina.variable} antialiased scrollbar-hide`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
