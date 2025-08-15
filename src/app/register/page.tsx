"use client";

import RegisterCarousel from "@/components/carousels/register-carousel";
import RegisterForm from "@/components/forms/register-form";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import MobileRegisterForm from "./_ui/mobile-register";

export default function SignUpPage() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-white min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {isMobile ? <MobileRegisterForm /> : <RegisterForm />}
      <RegisterCarousel />
    </div>
  );
}
