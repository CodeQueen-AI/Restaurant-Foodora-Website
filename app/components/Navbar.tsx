"use client";
import { useState } from "react";
import { Merriweather } from "next/font/google";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion, Variants } from "framer-motion";
import { useCart } from "../context/CartContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const router = useRouter();

  return (
    <>
      <motion.nav
        className={`${merriweather.className} absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4 flex items-center justify-between`}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <IoFastFoodOutline className="text-orange-400 text-2xl" />
          <span className="text-orange-400 text-2xl font-bold tracking-wide">Foodora</span>
        </motion.div>

        <motion.div className="hidden md:flex gap-12" variants={itemVariants}>
          <motion.a
            href="/"
            className={`relative ${pathname === '/' ? 'text-orange-500' : 'text-white'} font-medium group tracking-wide`}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            Home
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href="/Menu"
            className={`relative ${pathname === '/Menu' ? 'text-orange-500' : 'text-white'} font-medium group tracking-wide`}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            Menu
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href="/Reservation"
            className={`relative ${pathname === '/Reservation' ? 'text-orange-500' : 'text-white'} font-medium group tracking-wide`}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            Reservation
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href="/Gallery"
            className={`relative ${pathname === '/Gallery' ? 'text-orange-500' : 'text-white'} font-medium group tracking-wide`}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            Gallery
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href="/Contact"
            className={`relative ${pathname === '/Contact' ? 'text-orange-500' : 'text-white'} font-medium group tracking-wide`}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            Contact
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.div>

        <div className="flex items-center gap-4 md:hidden">
          <motion.div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className="text-lg" />
          </motion.div>

          <motion.div
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/Cart")}
          >
            <FaShoppingCart className="text-lg" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </motion.div>
        </div>

        <motion.div className="hidden md:block mr-2" variants={itemVariants}>
          <motion.div
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/cart")}
          >
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </motion.div>
        </motion.div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col gap-8 text-2xl font-semibold text-white">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/Menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            <Link href="/Reservation" onClick={() => setMenuOpen(false)}>Reservation</Link>
            <Link href="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

