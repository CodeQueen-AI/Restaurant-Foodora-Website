"use client";
import React from "react";
import { Merriweather , Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ContactPage() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Banner bg.png')" }}>
        <h1
          className={`text-white text-5xl font-bold ${dancingScript.className}`}>
          Contact Us
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8">
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${merriweather.className}`}>
              ADDRESS
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-3"
            >
              <FaMapMarkerAlt className="text-orange-600 text-xl" />
              <p className={`text-gray-700 ${merriweather.className}`}>
                28 Seventh Avenue, New York, 10014
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-3">
              <FaPhoneAlt className="text-orange-600 text-xl" />
              <p className={`text-gray-700 ${merriweather.className}`}>
                (415) 124-5678
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-600 text-xl" />
              <p className={`text-gray-700 ${merriweather.className}`}>
                codeq209@gmail.com
              </p>
            </motion.div>
          </div>
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${merriweather.className}`}>
              WORKING HOURS
            </h2>
            <p className={`text-gray-700 ${merriweather.className}`}>
              10:00 am – 11:00 pm on Weekdays
            </p>
            <p className={`text-gray-700 ${merriweather.className}`}>
              11:00 am – 11:30 pm on Weekends
            </p>
          </div>
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${merriweather.className}`}>
              SOCIALS
            </h2>
            <div className="flex space-x-6 mt-6">
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:border-white transition-all duration-300"
                >
                  <Icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-6 space-y-6">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className={`block text-black mb-2 ${merriweather.className}`}>
              Name
            </label>
            <input type="text" className="w-full p-3 border focus:outline-none" />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className={`block text-black mb-2 ${merriweather.className}`}>
              Email
            </label>
            <input type="email" className="w-full p-3 border focus:outline-none" />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className={`block text-black mb-2 ${merriweather.className}`}>
              Message
            </label>
            <textarea rows={5} className="w-full p-3 border focus:outline-none"></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-orange-600 text-white py-3 hover:bg-orange-800 ${merriweather.className}`}>
            Send Message
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.908780322509!2d-74.00601528459355!3d40.73565797932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f1d6db%3A0x52f7d72b8b77f6ea!2s28%207th%20Ave%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2s!4v1693525295693!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}