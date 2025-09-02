"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FoodPlans() {
  const foods = [
    {
      id: 1,
      tier: "ESSENTIAL",
      name: "Biryani",
      price: "$79",
      description: [
        "Aromatic basmati rice",
        "Tender chicken pieces",
        "Rich blend of spices",
        "Garnished with fried onions",
        "Served with raita",
      ],
      image: "/P1.png",
    },
    {
      id: 2,
      tier: "PREMIUM",
      name: "French Fries",
      price: "$159",
      description: [
        "Crispy golden fries",
        "Lightly salted",
        "Served with ketchup",
        "Perfect snack companion",
        "Freshly fried on order",
      ],
      image: "/P2.png",
      featured: true,
    },
    {
      id: 3,
      tier: "ENTERPRISE",
      name: "Chicken",
      price: "$359",
      description: [
        "Juicy grilled chicken",
        "Marinated overnight",
        "Smoky and flavorful",
        "Served with dips",
        "A feast for chicken lovers",
      ],
      image: "/P3.png",
    },
  ];

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`text-center text-7xl mb-12 text-black ${dancingScript.className}`}>
        Affordable Price
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {foods.map((food, index) => (
          <motion.div
            key={food.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`shadow-lg text-center p-6 flex flex-col items-center border-2
              ${
                food.featured
                  ? "bg-gradient-to-b from-yellow-200 to-yellow-100 border-yellow-500"
                  : "bg-white border-yellow-400"
              }`}>
            <div className="w-full">
              <h3 className="text-lg font-extrabold tracking-wide uppercase text-black">
                {food.tier}
              </h3>
              <div className="mx-auto my-3 h-1 w-12 bg-yellow-500 rounded-full" />
            </div>

            <div className="w-24 h-24 mb-4">
              <Image
                src={food.image}
                alt={food.name}
                width={96}
                height={96}
                className="object-contain mx-auto"/>
            </div>

            <p className="text-5xl font-serif font-bold text-orange-500 mt-2 mb-1">
              {food.price}
              <span className="text-lg font-semibold text-orange-400">/mo</span>
            </p>
            <p className="text-xl font-bold mt-1">{food.name}</p>
            <ul className="text-gray-700 text-sm space-y-2 my-5">
              {food.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <button
              className={`mt-auto px-6 py-3 rounded-full font-semibold shadow-md transition
                ${
                  food.featured
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:opacity-90"
                    : "bg-white text-orange-600 border-2 border-orange-400 hover:bg-orange-50"
                }`}>
              Choose plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
