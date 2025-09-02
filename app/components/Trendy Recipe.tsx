"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function RecipesPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const recipes = [
    {
      id: 1,
      name: "Spicy Biryani",
      desc: "Aromatic rice with tender chicken & spices.",
      img: "/Trendy 1.jpeg",
    },
    {
      id: 2,
      name: "Cheesy Pizza",
      desc: "Loaded with cheese, veggies & love.",
      img: "/Trendy 2.jpeg",
    },
    {
      id: 3,
      name: "Juicy Burger",
      desc: "Perfectly grilled patty with fresh toppings.",
      img: "/Trendy 3.jpeg",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('/Bg Image.png')",
      }}>
      <motion.h1
        className="text-7xl text-black mb-10"
        style={{ fontFamily: "Dancing Script, cursive" }}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}>
        Trendy Recipes
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {recipes.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-lg overflow-hidden text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}>
            <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={250}
              className="w-full h-80 object-cover"/>
            <div className="p-4">
              <h2 className="text-2xl font-bold font-serif">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
