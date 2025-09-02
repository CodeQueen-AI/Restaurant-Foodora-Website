"use client";
import Image from "next/image";
import { Merriweather, Dancing_Script } from "next/font/google";
import { motion, Variants } from "framer-motion";
import { TiPlus } from "react-icons/ti";
import { useCart } from "../context/CartContext";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const leftVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

type MenuItem = {
  name: string;
  desc: string;
  price: number;
  img: string;
};

const menuItems: MenuItem[] = [
  { name: "Chicken Biryani", desc: "Spicy rice with tender chicken pieces.", price: 350, img: "/Menu1.jpeg" },
  { name: "Beef Karahi", desc: "Rich tomato gravy with beef & spices.", price: 1200, img: "/Menu2.jpeg" },
  { name: "Chicken Tikka", desc: "Grilled chicken with smoky flavor.", price: 450, img: "/Menu3.jpeg" },
  { name: "Mutton Handi", desc: "Creamy curry with mutton & butter.", price: 1350, img: "/Menu4.jpeg" },
  { name: "Chicken Pulao", desc: "Flavored rice with chicken stock.", price: 320, img: "/Menu5.jpeg" },
  { name: "Beef Biryani", desc: "Long grain rice with beef & spices.", price: 400, img: "/Menu6.jpeg" },
  { name: "Chicken Pizza", desc: "Cheese-loaded pizza with chicken.", price: 950, img: "/Menu7.jpeg" },
  { name: "Pasta Alfredo", desc: "Creamy pasta with chicken & cheese.", price: 600, img: "/Menu8.jpeg" },
  { name: "Fish Fry", desc: "Crispy golden fried fish with lemon & chutney.", price: 800, img: "/Menu9.jpeg" },
  { name: "Malai Boti", desc: "Juicy chicken cubes marinated in creamy malai.", price: 500, img: "/Menu10.jpeg" },
  { name: "Mutton Korma", desc: "Traditional mutton curry with rich spices.", price: 1250, img: "/Menu11.jpeg" },
  { name: "Seekh Kabab", desc: "Grilled minced meat kababs with desi masala.", price: 450, img: "/Menu12.jpeg" },
];

const rightItems: MenuItem[] = [
  { name: "Gol Gappe", desc: "Crispy puris filled with spicy water & potatoes.", price: 150, img: "/Menu13.jpeg" },
  { name: "Chicken Karahi", desc: "Spicy chicken cooked in tomato & green chili gravy.", price: 1200, img: "/Menu14.jpeg" },
  { name: "Beef Nihari", desc: "Slow-cooked beef stew with rich spicy flavor.", price: 1350, img: "/Menu15.jpeg" },
  { name: "Mutton Chops", desc: "Juicy mutton chops grilled with special spices.", price: 1400, img: "/Menu16.jpeg" },
  { name: "Tandoori Roti", desc: "Freshly baked soft roti from tandoor.", price: 25, img: "/Menu17.jpeg" },
  { name: "Chicken Roll", desc: "Stuffed paratha roll with spicy chicken filling.", price: 180, img: "/Menu18.jpeg" },
  { name: "Beef Kebab Roll", desc: "Crispy paratha wrap with beef seekh kabab.", price: 220, img: "/Menu19.jpeg" },
  { name: "Prawn Masala", desc: "Juicy prawns cooked in spicy masala curry.", price: 950, img: "/Menu20.jpeg" },
  { name: "Fried Rice", desc: "Stir-fried rice with vegetables & egg.", price: 300, img: "/Menu21.jpeg" },
  { name: "Chicken Chowmein", desc: "Chinese noodles tossed with chicken & veggies.", price: 350, img: "/Menu22.jpeg" },
  { name: "Beef Burger", desc: "Juicy grilled beef patty with cheese & sauces.", price: 400, img: "/Menu23.jpeg" },
  { name: "Grilled Sandwich", desc: "Toasted sandwich with chicken & cheese.", price: 250, img: "/Menu24.jpeg" },
];

export default function MenuPage() {
  const { addToCart } = useCart();

  const handleAdd = (item: MenuItem) => {
    addToCart({ ...item, qty: 1 });
  };

  const renderItems = (items: MenuItem[], variant: Variants) => {
    return items.map((item, idx) => (
      <motion.div
        key={idx}
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-between border-b border-gray-300 pb-4"
      >
        <div className="flex items-center space-x-4">
          <Image src={item.img} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover" />
          <div>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button
            className="text-orange-700 hover:text-orange-900 cursor-pointer"
            onClick={() => handleAdd(item)}
          >
            <TiPlus size={22} />
          </button>
          <p className="text-lg font-semibold text-green-900 mt-1">{item.price}</p>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className={`min-h-screen flex flex-col ${merriweather.className}`}>
      <div className="relative w-full h-[50vh]">
        <Image src="/Banner bg.png" alt="Menu Banner" fill priority className="object-cover" />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg ${dancingScript.className}`}>
            Special Food Menu
          </h1>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="space-y-6">{renderItems(menuItems, leftVariant)}</div>
        <div className="space-y-6">{renderItems(rightItems, rightVariant)}</div>
      </div>
    </div>
  );
}
