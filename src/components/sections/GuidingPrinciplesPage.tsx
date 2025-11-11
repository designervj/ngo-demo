"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaUsers, FaHandHoldingHeart, FaSeedling, FaHandsHelping, FaBalanceScale, FaLightbulb } from "react-icons/fa";

const principles = [
  {
    icon: <FaUsers className="text-green-700 text-4xl mb-4" />,
    title: "Community Participation",
    desc: "Beneficiary representatives actively engage in all project phases—from planning to monitoring—often through community-led organizations. This ensures need-based, community-driven initiatives.",
  },
  {
    icon: <FaHandHoldingHeart className="text-green-700 text-4xl mb-4" />,
    title: "Inclusion",
    desc: "We prioritize vulnerable and marginalized groups, ensuring no one is excluded based on gender, age, caste, or religion, and specifically targeting those most in need.",
  },
  {
    icon: <FaSeedling className="text-green-700 text-4xl mb-4" />,
    title: "Capacity Building",
    desc: "Every project strengthens our team's skills and facilitates knowledge transfer to communities, building local capacity for future endeavors.",
  },
  {
    icon: <FaHandsHelping className="text-green-700 text-4xl mb-4" />,
    title: "Self-reliance",
    desc: "We foster community ownership and sustainability by encouraging contributions and engaging village volunteers, promoting grassroots support.",
  },
  {
    icon: <FaLightbulb className="text-green-700 text-4xl mb-4" />,
    title: "Blending Science & Traditional Knowledge",
    desc: "GRAVIS integrates local wisdom with modern scientific techniques, creating effective interventions and garnering community support.",
  },
  {
    icon: <FaBalanceScale className="text-green-700 text-4xl mb-4" />,
    title: "Co-operation",
    desc: "Recognizing our limitations, we collaborate with a vast network of partner organizations, government agencies, and experts to secure essential resources and support.",
  },
];

const GuidingPrinciplesPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section */}
      <div className="relative w-full h-[65vh] flex items-center justify-center text-center overflow-hidden">
        {/* Gradient + pattern background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" stroke=\"%23fff\" stroke-width=\"0.5\"%3E%3Cpath d=\"M0 40 Q40 0 80 40 T160 40\"/%3E%3Cpath d=\"M0 60 Q40 20 80 60 T160 60\"/%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        {/* Foreground text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Guiding Principles
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            GRAVIS’s approach is as crucial as its objectives — grounded in fairness, sustainability, and community empowerment.
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

      {/* 📜 Principles Section */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-green-800 mb-14"
          >
            Our Core Principles
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3 mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidingPrinciplesPage;
