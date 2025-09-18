"use client";

import Link from "next/link";
import { useState } from "react";
import VideoPlayer from "./video";

/**
 * ValuesMobile
 * - Mobile-first layout for "Our Values"
 * - Shows compact horizontal chips + single-item accordion for full text
 * - Drop into your existing <section className="flex lg:hidden ..."> area
 */

const VALUES = [
  {
    id: 1,
    title: "Community First",
    short: "People drive progress.",
    full: "We prioritize people — riders, vendors and customers — and design every feature to uplift the community that makes Zarp work.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 21c0-3 4-5 9-5s9 2 9 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Accessibility",
    short: "Simple, affordable, available.",
    full: "Delivery should be easy for everyone. We design simple flows, transparent pricing, and low barriers to entry so anyone can use Zarp.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Opportunity",
    short: "Fair earnings, flexible hours.",
    full: "We create reliable earning opportunities for professional riders and casual drivers alike, with transparent payouts and simple onboarding.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 8v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Trust & Reliability",
    short: "Clear tracking, verified riders.",
    full: "Every delivery is trackable, every rider is verified, and we use proof (photo/OTP) to reduce disputes — so vendors and customers can rely on Zarp.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2l3 5 5 .8-3.8 3.7L18 20l-6-3.4L6 20l1.8-8.5L4 8.8 9 8 12 2z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Sustainability",
    short: "Smarter routes, less waste.",
    full: "By leveraging journeys already happening in the city, Zarp reduces unnecessary trips and makes urban logistics more efficient and greener.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21 10c-1.5 4-6 6-9 6s-7.5-2-9-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 3v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ValuesMobile() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="bg-abyss min-h-screen pb-4 text-white flex flex-col gap-6 item-center lg:hidden">
      <section className="flex lg:hidden px-2 w-full flex-col">
        <div className="flex flex-col gap-4 pt-6 mt-4 px-3 pb-6 border border-white/40 rounded-t-2xl border-b">
          <h1 className="font-machina font-semibold text-3xl">
            What we&apos;re dedicated to
          </h1>
          <span className="text-sm leading-relaxed text-white/90">
            To build a smarter, more accessible logistics system that empowers
            individuals, supports businesses, and creates opportunities for
            drivers — while making delivery seamless for everyone.
          </span>
        </div>

        <section className="px-3 border-x border-white/40 flex items-center justify-center py-6 pb-6">
          {/* Keep your existing VideoPlayer here */}
          <VideoPlayer width={400} height={300} source="/riderHd.mp4" />
          {/* <div className="w-full max-w-md">
          </div> */}
        </section>

        <div className="flex flex-col gap-4 pt-6 px-3 pb-6 border border-white/40 border-b rounded-b-2xl">
          <h1 className="font-machina font-semibold text-3xl">What we value</h1>
          {/* CHIPS */}
          <div className="mt-4">
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-3 px-3 scrollbar-hide">
              {VALUES.map((v) => {
                const isActive = active === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActive(v.id)}
                    aria-expanded={isActive}
                    className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border ${isActive ? "bg-white/6 border-orange-400" : "border-white/20"} text-left min-w-[160px]`}
                  >
                    <div className="text-orange-300">{v.icon}</div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{v.title}</span>
                      <span className="text-xs text-white/70">{v.short}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACCORDION DETAIL (single open) */}
          <div className="mt-4">
            {VALUES.map((v) => {
              const open = active === v.id;
              return (
                <div key={v.id} className="mb-3">
                  <button
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl border border-white/10 bg-transparent"
                    onClick={() => setActive(open ? null : v.id)}
                    aria-controls={`value-desc-${v.id}`}
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-orange-300">{v.icon}</div>
                      <div className="text-left">
                        <div className="font-semibold">{v.title}</div>
                        <div className="text-xs text-white/70">{v.short}</div>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition ${open ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id={`value-desc-${v.id}`}
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-40" : "max-h-0"}`}
                  >
                    <p className="mt-3 text-sm text-white/85 px-4">{v.full}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA at bottom */}
          <div className="mt-3 px-3">
            <Link
              href="/register"
              className="block text-center px-4 py-3 rounded-2xl bg-orange-400 text-black font-semibold"
            >
              Join as a Zarper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
