import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zarp",
  description:
    "Zarp is a campus-first delivery network that uses rides already on the road (bikes, cars, buses) to move your food and small packages faster and cheaper. Think of it as carpooling for packages: we match what needs to be delivered with people already heading in that direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${livretSans.variable} ${rhithmic.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSerif.variable} antialiased`}
      >
        <Providers>
          <div id="smooth-wrapper">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
