"use client";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const menuItems = [
    { name: "Chicken Biryani", desc: "Spicy rice with tender chicken pieces.", price: "$120", img: "/Menu1.jpeg" },
    { name: "Beef Karahi", desc: "Rich tomato gravy with beef & spices.", price: "$54", img: "/Menu2.jpeg" },
    { name: "Chicken Tikka", desc: "Grilled chicken with smoky flavor.", price: "$78", img: "/Menu3.jpeg" },
    { name: "Mutton Handi", desc: "Creamy curry with mutton & butter.", price: "$58", img: "/Menu4.jpeg" },
  ];

  const rightItems = [
    { name: "Chicken Pulao", desc: "Flavored rice with chicken stock.", price: "$64", img: "/Menu5.jpeg" },
    { name: "Beef Biryani", desc: "Long grain rice with beef & spices.", price: "$69", img: "/Menu6.jpeg" },
    { name: "Chicken Pizza", desc: "Cheese-loaded pizza with chicken.", price: "$82", img: "/Menu7.jpeg" },
    { name: "Pasta Alfredo", desc: "Creamy pasta with chicken & cheese.", price: "$42", img: "/Menu8.jpeg" },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${merriweather.className}`}>
      <motion.div 
        className="text-center mb-12 mt-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
        <h1 className={`text-7xl font-bold text-amber-500 ${dancing.className}`}>
          Special Food Menu
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="space-y-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between border-b border-gray-300 pb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"/>
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-green-900">{item.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {rightItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between border-b border-gray-300 pb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"/>
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-green-900">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
          <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
          <Link href='/Menu'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 bg-white font-semibold transition duration-300 hover:bg-yellow-500 hover:text-white hover:border-white cursor-pointer">
                  View More
          </motion.button>
          </Link>
          </motion.div>
    </div>
  );
}
