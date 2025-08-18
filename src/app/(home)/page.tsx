"use client";

import HomeFaq from "@/components/global/faq-home";
import Footer from "@/components/global/footer";
import Hero from "@/components/global/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFEFE] flex flex-col gap-8">
      <Hero />
      <HomeFaq />
      <Footer />
    </div>
  );
}
