"use client";
import { motion } from "framer-motion";
import React from "react";

const HistoryPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview Page) */}
      <div className="relative w-full h-[65vh] overflow-hidden flex items-center justify-center">
        {/* Gradient + Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800">
          {/* Subtle SVG wave pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" stroke=\"%23fff\" stroke-width=\"0.5\"%3E%3Cpath d=\"M0 40 Q40 0 80 40 T160 40\"/%3E%3Cpath d=\"M0 60 Q40 20 80 60 T160 60\"/%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Animated floating gradient lights */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)] animate-pulse-slow"></div>
        </div>

        {/* Foreground Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center text-white px-6 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
            History
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Tracing GRAVIS’ journey — from a small movement in the Thar Desert
            to a model of rural transformation across India.
          </motion.p>
        </motion.div>

        {/* Decorative SVG Wave at Bottom */}
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

      {/* 📜 History Content Section */}
      <section className="bg-[#F7F8F6] py-16 px-6 md:px-20 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-green-800">
            Our Journey Since 1983
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Established in 1983 by <strong>Laxmi Chand</strong> and{" "}
            <strong>Shashi Tyagi</strong>, GRAVIS originated from their
            dedication to activism and their backgrounds in agriculture and
            education. Along with other notable activities, they founded the
            organization in Rajasthan's Thar Desert — a region marked by extreme
            climate, chronic water scarcity, and limited development support.
            Over 70 drought years in the last century and scorching summer
            temperatures exceeding 48°C have challenged agricultural
            productivity, leading to widespread malnutrition and health issues
            among desert communities.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From its humble beginnings in just <strong>20 villages</strong>,
            GRAVIS has now reached over <strong>2000 communities</strong>,
            improving the lives of nearly <strong>2 million people</strong>. It
            has facilitated the creation of more than{" "}
            <strong>4000 Community-based Organizations</strong>, building strong
            local leadership structures. Recognizing the vulnerabilities faced
            by women, children, and the elderly, GRAVIS adopted a holistic,
            integrated approach that empowers communities to achieve long-term
            sustainability.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Expanding its work beyond Rajasthan, GRAVIS now serves regions like{" "}
            <strong>Uttarakhand</strong> — tackling floods and water stress in
            mountain terrain — and <strong>Bundelkhand, Uttar Pradesh</strong>,
            focusing on farmer empowerment, women’s development, and health
            improvement. The organization also leads initiatives in{" "}
            <strong>education, water management, healthcare, microfinance</strong>,
            and advocacy for vulnerable populations, fostering resilient and
            self-reliant rural societies across India.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HistoryPage;
