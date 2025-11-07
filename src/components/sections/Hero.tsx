"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const captions = [
  "Enhance participation of women and youth in agriculture",
  "Improve agricultural productivity and resource management",
  "Strengthen community resilience and adaptive capacity",
  "Foster entrepreneurship and market linkages",
  "Facilitate learning and knowledge sharing",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % captions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative w-full h-[65vh] sm:h-[90vh] overflow-hidden">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔹 Captions */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl md:leading-[62px]"
         
          >
            {captions[index]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* 🔹 Centered Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-20">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + captions.length) % captions.length)
          }
          className="p-1 md:p-3 sm:p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % captions.length)}
          className="p-1 md:p-3  sm:p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* 🔹 Dots Indicator */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {captions.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-green-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
