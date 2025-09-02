"use client";
import React from "react";
import { FaMapMarkerAlt, FaTag, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Footer() {
  const infoItems = [
    {
      icon: <FaMapMarkerAlt className="mr-2" />,
      title: "Address",
      lines: ["97845 Baker st. 567", "Los Angeles - US"],
    },
    {
      icon: <FaTag className="mr-2" />,
      title: "Reservations",
      lines: ["+94 412356789", "foodora.com"],
    },
    {
      icon: <FaClock className="mr-2" />,
      title: "Opening Hours",
      lines: ["Mon - Sat: 10am - 11pm", "Sunday: Closed"],
    },
  ];

  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp];

  return (
    <footer
      className={`${merriweather.className} relative text-gray-300 py-10 bg-cover bg-center`}
      style={{ backgroundImage: "url('/Bg Image1.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}>
              <h3 className="flex items-center text-lg font-semibold text-white mb-3">
                {item.icon} {item.title}
              </h3>
              {item.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
            <h3 className="text-lg font-semibold text-white mb-3">Keep in touch</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none backdrop-blur-md"/>
              <button className="bg-orange-500 px-4 py-2 text-white font-bold">&gt;</button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-6">
          <p className="text-2xl text-gray-300 mb-4 md:mb-0">
            © Foodora Restaurant - All rights reserved
          </p>

          <div className="flex space-x-5">
            {socialIcons.map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-white cursor-pointer text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
