"use client";
import { motion } from "framer-motion";
import React from "react";

const MissionVisionPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview / What We Do) */}
      <div className="relative w-full h-[65vh] overflow-hidden flex items-center justify-center">
        {/* Gradient + Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800">
          {/* Subtle SVG wave pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" stroke=\"%23fff\" stroke-width=\"0.5\"%3E%3Cpath d=\"M0 40 Q40 0 80 40 T160 40\"/%3E%3Cpath d=\"M0 60 Q40 20 80 60 T160 60\"/%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Floating gradient light */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)] animate-pulse-slow"></div>
        </div>

        {/* Foreground content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center text-white px-6 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Mission & Vision
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Guided by Gandhian ideals — building self-reliant, empowered, and
            inclusive communities.
          </motion.p>
        </motion.div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(150%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44C183.09,83.15,65.54,111.23,0,120V0H1200V27.35C1131.36,48.69,959.75,83.94,721.39,66.16,548.75,53.63,404.41,42.92,321.39,56.44Z"
              fill="#F7F8F6"
            ></path>
          </svg>
        </div>
      </div>

      {/* 📸 Mission Section */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/Image/image (10).png"
              alt="Mission Image"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              GRAVIS is guided by two foundational Gandhian principles:{" "}
              <strong>Sarvodaya</strong>, meaning “all rising, but the last
              person first,” which emphasizes a bottom-up approach for inclusive
              socio-economic progress. We champion the collective advancement of
              all individuals, irrespective of their economic status, age, caste,
              or religion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🌱 Vision Section (Alternate layout) */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-semibold text-green-800 mb-6">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To achieve this, GRAVIS embraces <strong>Gram Swaraj</strong>, or
              village self-rule. This philosophy promotes independent,
              self-sufficient villages. Our interventions are therefore planned
              and executed with extensive community involvement, ensuring local
              ownership, maintenance, and monitoring. Strong Community-Based
              Organizations (CBOs) are central to GRAVIS' work, fostering{" "}
              <strong>self-empowerment</strong> rather than merely supplementing
              existing systems.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/assets/Image/img (6).jpg"
              alt="Vision Image"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionPage;
