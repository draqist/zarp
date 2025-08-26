"use client";

import HomeFaq from "@/app/(home)/_ui/faq-home";
import Hero from "@/app/(home)/_ui/hero";
import Footer from "@/components/global/footer";
import PartnersAndSupporters from "./_ui/partners";
import WhyChooseZarp from "./_ui/reasons";

export default function HomePage() {
  return (
    <main className="top-16 relative">
      <div className="min-h-screen bg-[#FFFEFE] flex flex-col gap-6">
        <Hero />
        <WhyChooseZarp />
        <PartnersAndSupporters />
        <HomeFaq />
        <Footer />
      </div>
    </main>
  );
}
