"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🔹 3 Slides (replace image paths with client images)
const slides = [
  {
    image:
      "/assets/Image/slider-img1.png",
    caption: "Enhance participation of women and youth in agriculture",
  },
  {
    image:
      "/assets/Image/slider-img2.png",
    caption: "Improve agricultural productivity and resource management",
  },
  {
    image:
      "/assets/Image/slider-img3.png",
    caption: "Strengthen community resilience and adaptive capacity",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
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
      {/* 🔹 Background Images (fade between 3 photos) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${slides[index].image}")`,
          }}
        />
      </AnimatePresence>

      {/* 🔹 Bottom gradient so photo composition stays visible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0" />

      {/* 🔹 Caption moved towards bottom (client feedback) */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 pb-16 sm:pb-20 text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={slides[index].caption}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl md:leading-[62px]"
          >
            {slides[index].caption}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* 🔹 Navigation Buttons (left / right) */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 z-20">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="p-1 md:p-3 sm:p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="p-1 md:p-3 sm:p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* 🔹 Dots Indicator */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
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
