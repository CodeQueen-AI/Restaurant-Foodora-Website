"use client";
import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import Confetti from "react-confetti";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function PaymentSuccess() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}/>
      <h1
        className={`${dancingScript.className} text-7xl text-orange-600 text-center`}
        style={{
          textShadow:
            "0 0 10px #fff, 0 0 20px #fffa, 0 0 30px #fff, 0 0 40px #fffa, 0 0 50px #fff",
        }}>
        Payment Success ✨
      </h1>
    </div>
  );
}
