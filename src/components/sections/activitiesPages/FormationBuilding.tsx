"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FormationBuilding = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ---------- Hero Section ---------- */}

      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Formation of CBOs and Capacity Building
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ---------- Content Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6">
          {/* --------- Paragraph 1 --------- */}
          <p className="text-lg text-gray-700">
            The project places significant emphasis on strengthening
         
          
              Community-Based Organizations (CBOs)
        
            through both formation and extensive capacity building, targeting
          160 CBOs, specifically
         
              80 Intergenerational Learning Groups (ILGs)
          
            and
         80 Self-Help Groups (SHGs).
            This initiative is crucial for empowering local communities,
            particularly women and youth, to lead agricultural livelihood
            development.
          </p>

          {/* --------- Paragraph 2 --------- */}
          <p className="text-lg text-gray-700">
            Activities under this output include the formation of new ILGs and
            SHGs, or the identification and strengthening of existing ones in
            each of the
           20 project villages. Each
            ILG and SHG will comprise approximately
           15 members, with ILGs
            including young girls and boys, adult women, and older women, while
            SHGs focus on adult and older women. These groups will undergo
            comprehensive leadership and management training, covering aspects
            like CBO roles, intergenerational exchange, and group
            sustainability. Additionally, technical trainings will be provided
            to enhance their understanding of
         
              Agriculture-Based Livelihoods (ABL)
           
            , focusing on improved rainwater harvesting, sustainable
            agriculture, crop diversification, and rain-fed farming methods.
          </p>

          {/* --------- Paragraph 3 --------- */}
          <p className="text-lg text-gray-700">
            GRAVIS will also conduct staff trainings for its own team and other
            local CSOs to ensure a consistent and high level of knowledge and
            implementation capacity. Furthermore, GRAVIS will participate in
            national and international events to share learnings and gain
            exposure, while developing Information, Education, and Communication
            (IEC) materials in local languages and English to disseminate
            crucial information effectively among communities and stakeholders.
            A mid-term review and final evaluation will assess the progress and
            impact of these capacity-building efforts, reinforcing the CBOs'
            role as key drivers of change and sustainability within their
            villages.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default FormationBuilding;
