"use client";

import { motion } from "framer-motion";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RestaurantBanner() {
  return (
    <div
      className="relative h-screen w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/Bg Image1.png')" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="text-center text-white px-6 max-w-2xl">
          <h1 className={`text-7xl mb-4 ${dancingScript.className}`}>Delicious</h1>
          <p className={`text-7xl mb-4 ${playfairDisplay.className}`}>Food Menu</p>
          <p className="text-lg mb-6 text-gray-200">
            Experience the taste of tradition with a modern twist
          </p>
          <Link href ='/Menu'>
          <button className="px-6 py-3 cursor-pointer border-2 border-yellow-400 text-yellow-400 font-semibold transition duration-300 hover:bg-yellow-400 hover:text-white">
            Explore Menu
          </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
