"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const pathName = usePathname();

  const cleanPath = () => {
    if (pathName === "/") return "home";
    return pathName.slice(1);
  };
  const isCurrentRoute = cleanPath();

  useGSAP(() => {
    if (!layer1Ref.current || !layer2Ref.current) return;

    if (isOpen) {
      // Open sequence: first color expands, then second follows
      gsap
        .timeline()
        .set([layer1Ref.current, layer2Ref.current], { pointerEvents: "auto" })
        .to(layer1Ref.current, {
          clipPath: "circle(150% at 100% 0)",
          duration: 0.9,
          ease: "power3.out",
        })
        .to(
          layer2Ref.current,
          {
            clipPath: "circle(150% at 100% 0)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      // Stagger in nav links
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    } else {
      const transitionTl = gsap.timeline({
        onComplete: () => {
          gsap.set([layer1Ref.current, layer2Ref.current], {
            pointerEvents: "none",
          });
        },
      });

      transitionTl
        .fromTo(
          linksRef.current,
          { y: 0, opacity: 1 },
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        )
        .to(
          layer2Ref.current,
          {
            clipPath: "circle(0% at 100% 0)",
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .to(
          layer1Ref.current,
          {
            clipPath: "circle(0% at 100% 0)",
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=0.7"
        );
    }
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed top-4 right-4 z-50 p-0 px-0 rounded-full ${isOpen ? "bg-zarp" : "bg-sage"}`}
        variant="link"
        size="icon"
      >
        {isOpen ? (
          <X size={30} className="text-2xl text-sage size-5" />
        ) : (
          <Menu size={30} className="text-2xl size-5 text-zarp" />
        )}
      </Button>

      {/* Layer 1 (base color) */}
      <div
        ref={layer1Ref}
        className="fixed inset-0 bg-zarp z-40 flex items-center justify-center pointer-events-none"
        style={{ clipPath: "circle(0% at 100% 0)" }}
      />

      {/* Layer 2 (accent color) */}
      <div
        ref={layer2Ref}
        className="fixed inset-0 bg-sage z-40 p-10 grid grid-cols-1 pointer-events-none pt-30"
        style={{ clipPath: "circle(0% at 100% 0)" }}
      >
        <nav className="flex flex-col items-start space-y-10 text-2xl font-semibold">
          {["Home", "About", "Services", "Contact"].map((text, i) => (
            <div key={text} className="flex items-center gap-5">
              <span
                className={`hidden lg:inline-flex text-transparent font-machina font-medium stroke ${isCurrentRoute === text.toLowerCase() ? "visible " : "invisible"}`}
              >
                0{i + 1}
              </span>
              <Link
                href={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                passHref
                onClick={() => setIsOpen(!isOpen)}
                ref={(el) => {
                  if (el) linksRef.current[i] = el;
                }}
                className="opacity-0 font-machina text-4xl lg:text-[140px] text-zarp"
              >
                {text}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
