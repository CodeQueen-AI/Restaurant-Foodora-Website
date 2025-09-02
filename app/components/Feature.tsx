"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const MotionImg = motion.img;

const cards = [
  {
    title: "Serving with Love",
    img: "/F1.jpeg",
    desc: "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi...",
  },
  {
    title: "Serving with Love",
    img: "/F2.jpeg",
    desc: "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi...",
  },
  {
    title: "Serving with Love",
    img: "/F3.jpeg",
    desc: "Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi...",
  },
];

export default function ThreeHoverZoomCards() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className={`text-7xl text-gray-900 text-center ${dancingScript.className}`}>
          Featured Moments
        </motion.h1>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-white overflow-hidden shadow-sm ring-1 ring-gray-200/70 transition hover:shadow-xl hover:ring-gray-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <MotionImg
                  src={c.img}
                  alt={c.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"/>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-black tracking-tight">
                  {c.title}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-2 h-0.5 bg-yellow-500 rounded-full group-hover:w-16"/>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-3 text-gray-600 leading-relaxed">
                  {c.desc}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
