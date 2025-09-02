"use client";

import React from "react";
import {FaCalendarAlt, FaUser, FaClock, FaEnvelope, FaUsers, FaPhone } from "react-icons/fa";
import { Merriweather, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function ReservationPage() {
  return (
    <div className="w-full">
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Banner bg.png')" }}>
        <div className="relative flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-white text-7xl font-semibold ${dancingScript.className}`}>
            Reservations
          </motion.h1>
        </div>
      </div>
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 ${merriweather.className}`}> 
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className={`text-7xl ${dancingScript.className} text-black`}>
            Reservations
          </h1>
          <p className="text-gray-500 mt-2">
            Book a table online Leads will reach in your email
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-16 h-1 bg-yellow-400 mx-auto mt-3"/>
        </motion.div>
        <motion.form
          className="w-full max-w-6xl bg-white p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}>
          <motion.div variants={fadeUp} custom={0}>
            <label className="block mb-2 font-medium">Date</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaCalendarAlt className="text-yellow-500 mr-2" />
              <input type="date" className="w-full outline-none" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1}>
            <label className="block mb-2 font-medium">Your Name</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaUser className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"/>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={2}>
            <label className="block mb-2 font-medium">Time</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaClock className="text-yellow-500 mr-2" />
              <input type="time" className="w-full outline-none" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={3}>
            <label className="block mb-2 font-medium">Email Address</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaEnvelope className="text-yellow-500 mr-2" />
              <input
                type="email"
                placeholder="Your Email ID"
                className="w-full outline-none"/>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={4}>
            <label className="block mb-2 font-medium">Guests</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaUsers className="text-yellow-500 mr-2" />
              <input
                type="number"
                placeholder="How many of you?"
                className="w-full outline-none"/>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={5}>
            <label className="block mb-2 font-medium">Phone Number</label>
            <div className="flex items-center border border-gray-300 p-3">
              <FaPhone className="text-yellow-500 mr-2" />
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full outline-none"/>
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 md:col-span-3 flex justify-center mt-4"
            variants={fadeUp}
            custom={6}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="border-2 border-yellow-400 bg-yellow-400 text-white font-semibold px-8 py-3 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 transition">
              MAKE RESERVATION
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
