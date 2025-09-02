"use client";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type CartItemType = {
  name: string;
  price: number;
  qty: number;
  img?: string;
};

const Cart = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="font-serif min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/Banner bg.png"
          alt="Cart Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1
            className="text-5xl font-semibold text-white drop-shadow-lg"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Your Cart
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center px-6 py-16">
        {cart.length === 0 ? (
          <p className="text-center text-4xl text-gray-600">
            Your cart is empty
          </p>
        ) : (
          <div className="w-full max-w-5xl">
            {/* Cart Table Section */}
            <div className="p-8">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-left text-gray-600 text-sm uppercase cursor-pointer">
                    <th className="pb-3">Product</th>
                    <th className="pb-3 text-center">Price</th>
                    <th className="pb-3 text-center">Quantity</th>
                    <th className="pb-3 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item: CartItemType, index: number) => {
                    const price = Number(item.price);
                    return (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-b last:border-0"
                      >
                        <td className="py-4 flex items-center space-x-4 cursor-pointer">
                          {item.img && (
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={70}
                              height={70}
                            />
                          )}
                          <span className="font-medium text-black">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-4 text-center text-black">
                          £{price.toFixed(2)}
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center items-center mx-auto">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.name, item.qty - 1)
                              }
                              className="px-3 py-2 text-gray-500 hover:text-black cursor-pointer"
                            >
                              <FiMinus />
                            </button>
                            <span className="w-8 text-center">{item.qty}</span>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.name, item.qty + 1)
                              }
                              className="px-3 py-2 text-gray-500 hover:text-black cursor-pointer"
                            >
                              <GoPlus />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6">
                <button
                  onClick={() => setShowCheckout(true)}
                  className="bg-orange-500 text-white border border-white px-16 py-3 text-2xl
                  hover:bg-white hover:text-orange-500 hover:border-orange-500 
                  transition-all duration-300 ease-in-out w-full md:w-auto cursor-pointer"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg w-full max-w-lg p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowCheckout(false)}
                className="absolute top-4 right-4 text-gray-200 hover:text-white text-lg"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-lg">
                Checkout Form
              </h2>

              <form className="space-y-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Card Holder</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/20 text-white border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-white/20 text-white border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-white/20 text-white border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">CVD</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-white/20 text-white border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-300"
                    />
                  </div>
                </div>

                <Link href="/success">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition cursor-pointer"
                  >
                    Proceed
                  </button>
                </Link>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
