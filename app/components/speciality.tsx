"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const cards = [
  {
    title: "OUR MENU",
    subtitle: "View Our Specialities",
    img: "/S1.jpg",
  },
  {
    title: "DELIVERY",
    subtitle: "Home delivery or take away food",
    img: "/S2.jpg",
  },
  {
    title: "INSIDE FOores",
    subtitle: "View the Gallery",
    img: "/S3.jpg",
  },
];

export default function InfoCards() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-72 flex items-center justify-center text-center overflow-hidden shadow-lg group">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"/>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}/>

          <motion.div
            className="relative z-10 text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="text-lg italic font-serif">{card.subtitle}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
