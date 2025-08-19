import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ZarpCard() {
  {
    /* Sage Green (#8a9a84) as this cards background or Warm Terracota (#d26a44)  */
  }
  const { push } = useRouter();
  const sineInOut = [0.445, 0.05, 0.55, 0.95];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      viewport={{ amount: 0.2, once: true }}
      className="text-center flex flex-col items-center justify-center rounded-2xl p-2 pb-4 lg:p-8 shadow-lg gap-2 bg-[#8a9a84] cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -5 }}
        className="relative h-72 w-full"
      >
        <Image
          priority
          src="/cycling.gif"
          alt="Image cycling"
          fill
          className="object-cover object-left rounded-xl"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold tracking-tight mt-4 text-[#fdfcf9] font-rhithmic"
      >
        Join the Zarp Network
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-[#ede7df] max-w-xl mx-auto"
      >
        Riders, vendors, and partners building the fastest and most reliable
        delivery ecosystem together.
      </motion.p>

      <motion.button
        // whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-6 px-6 py-3 rounded-xl bg-[#2a2a2a] text-[#fdfcf9] hover:opacity-90 transition cursor-pointer"
        onClick={() => push("/register")}
      >
        Become a Partner
      </motion.button>
    </motion.div>
  );
}
