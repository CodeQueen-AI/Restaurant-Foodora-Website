"use client";
import React from "react";
import {Dancing_Script} from "next/font/google";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const images = [
  "/Menu1.jpeg",
  "/Menu2.jpeg",
  "/Menu3.jpeg",
  "/Menu4.jpeg",
  "/Menu5.jpeg",
  "/Menu6.jpeg",
  "/Trendy 1.jpeg",
  "/Trendy 2.jpeg",
  "/Trendy 3.jpeg",
];

export default function GalleryPage() {
  return (
    <div className="w-full">
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Banner bg.png')" }}>
        <h1
          className={`text-white text-6xl font-bold ${dancingScript.className}`}>
          Our Gallery
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="relative group overflow-hidden shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: idx * 0.1 }} 
            viewport={{ once: true, amount: 0.2 }} 
            whileHover={{ scale: 1.03 }} >
            <Image
              src={src}
              alt={`Food ${idx}`}
              className="w-full h-72 object-cover transition duration-500"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-md bg-white/20 p-4 rounded-full shadow-lg">
                <FaSearch className="text-white text-2xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
