"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function FoodBoxes() {
  const foods = [
    { id: 1, name: "Biryani", img: "/Box1.png" },
    { id: 2, name: "Noodles", img: "/Box2.png" },
    { id: 3, name: "Burger", img: "/Box3.png" },
    { id: 4, name: "Pizza", img: "/Box4.png" },
    { id: 5, name: "Samosa", img: "/Box5.png" },
    { id: 6, name: "Golgappe", img: "/Box6.png" },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-full p-4">
      <motion.h2
        className="text-7xl mb-6 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}>
        Crispy, Juicy, Cheesy — All Here!
      </motion.h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {foods.map((food, index) => (
          <motion.div
            key={food.id}
            className="w-36 bg-white rounded-xl shadow-md overflow-hidden text-center"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}>
            <div className="flex items-center justify-center h-28 w-full">
              <motion.img
                src={food.img}
                alt={food.name}
                className="w-20 h-20 object-cover rounded-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}/>
            </div>

            <div className="p-2">
              <p className="text-sm font-serif font-bold">{food.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
