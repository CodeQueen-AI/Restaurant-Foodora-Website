"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function HowItWorks() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Sign In & Choose",
      desc: "Choose From Our Weekly Menu",
      img: "/Service1.png",
    },
    {
      id: 2,
      title: "We Deliver",
      desc: "We Will Deliver Your Purchase",
      img: "/Service2.png",
    },
    {
      id: 3,
      title: "Enjoy Food",
      desc: "Enjoy Our Tasty Organic Food!",
      img: "/Service3.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <motion.h1
        className="text-7xl text-gray-800 mb-12"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}>
        How It <span className="text-yellow-500">Works?</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src={step.img}
                alt={step.title}
                width={50}
                height={50}
                className="object-contain"/>
            </div>
            <h2 className="text-2xl font-semibold font-serif">{step.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold shadow-md border border-yellow-500 transition duration-300 hover:bg-white hover:text-yellow-500 cursor-pointer">
          SUBSCRIBE NOW
        </motion.button>
      </motion.div>
    </div>
  );
}




