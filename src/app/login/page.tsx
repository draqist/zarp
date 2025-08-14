import { LoginForm } from "@/components/forms/login-form";
import ZarpLogo from "@/components/global/traq-logo";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-white min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="invisible xl:visible xl:p-2 relative">
        <div className="relative h-full w-full rounded-lg">
          <Image
            src="/Fluid_Pink_Blue_Wallpaper_8k_10.png"
            alt="banner-image"
            fill
            className="rounded-[36px] object-fill"
          />
          <div className="absolute top-12 left-12 flex gap-5 items-center">
            <ZarpLogo color="#fff" />
            <div className="w-[150px] h-0.25 bg-white rounded-full" />
          </div>
          <div className="absolute bottom-12 left-12 flex flex-col gap-5 items-start w-[381px]">
            <h3
              className="text-white text-7xl font-normal font-livret-sans"
              style={{
                letterSpacing: "-0.04em",
                lineHeight: "72px",
              }}
            >
              Get Everything You Want
            </h3>
            <p className="text-white text-base font-normal font-satoshi">
              The best way to manage your tasks and projects
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-36 lg:py-12 px-2 py-4 flex flex-col justify-between items-center min-w-full">
        <div className="w-full flex justify-center items-center">
          <Image src="/traq-logo.png" alt="traq-logo" width={22} height={22} />
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
