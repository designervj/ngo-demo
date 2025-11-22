"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RainwaterFarming = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
            Rainwater Harvesting and Dryland Farming
          </h1>
        </motion.div>
      </div>

      {/* ---------- Content Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* --------- New Paragraph Split into Two --------- */}
          <p className="text-lg text-gray-700">
            The project's foundational approach to elevating agricultural productivity and guaranteeing food security within the arid Thar Desert region centres on the vigorous advancement of rainwater harvesting and dryland farming techniques. The initiative aims to significantly increase
             crop yields and farmers' incomes by 50-100% through the implementation of
              these practices. A key activity involves supporting the construction of 650 khadins, 
              (traditional farming dykes) that are highly effective in retaining monsoon rainwater and 
              improving soil fertility across approximately 2,600 hectares of land. These khadins will be strategically built on 650 farms, primarily benefiting marginalized households selected by ILG and SHG members. GRAVIS will procure necessary materials such as stone slabs, cement, and murrum, and manage transportation and skilled labor, with unskilled labor contributed by beneficiary families. Technical guidance will be provided by a civil engineering consultant. 
          </p>

          <p className="text-lg text-gray-700">
           To address seed availability and affordability, 300 Community Seed Banks (CSBs) will be established (15 per village), managed by ILGs and SHGs, ensuring access to good quality seeds, especially during the short and unpredictable rainy season. The project will also organize community-level trainings on rainwater management for farming and innovative dryland farming methods, including crop diversification, mixed cropping, and the cultivation of drought-resistant crops. These trainings, led by expert resource persons, will be held across the four districts, aiming to enhance the knowledge base of at least 1,000 community members. The overall goal is to build resilience against water scarcity, directly contributing to economic stability and the widespread adoption of sustainable rain-fed farming practices.
          </p>

          {/* --------- Original Paragraph 1 --------- */}
       
          {/* --------- Original Paragraph 3 --------- */}
        
        </motion.div>
      </section>
    </div>
  );
};

export default RainwaterFarming;
