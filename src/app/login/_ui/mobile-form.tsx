import { LoginForm } from "@/components/forms/login-form";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MobileFormView = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-end"
      style={{
        backgroundImage: "url('/Fluid_Pink_Blue_Wallpaper_8k_10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1.25, ease: "easeInOut" }}
    >
      <motion.div
        className="px-0 py-6 flex flex-col lg:justify-between items-center min-w-full bg-white rounded-t-3xl"
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ ease: "backInOut", duration: 2 }}
      >
        <div className="w-full flex justify-center items-center">
          <Image src="/traq-logo.png" alt="traq-logo" width={22} height={22} />
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
        <div className="lg:mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileFormView;
