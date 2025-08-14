"use client";

import RegisterCarousel from "@/components/carousels/register-carousel";
import RegisterForm from "@/components/forms/register-form";

export default function SignUpPage() {
  return (
    <div className="bg-white min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <RegisterForm />
      <RegisterCarousel />
    </div>
  );
}
