"use client";
import { motion } from "framer-motion";
import React from "react";

const ProjectOverviewPage = () => {
  return (
    <div className="bg-[#F7F8F6] text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[65vh] flex items-center justify-center text-center overflow-hidden">
        {/* Gradient background with wave */}
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Project Overview
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Strengthening Agriculture-Based Livelihoods through Women and Youth Empowerment
          </motion.p>
        </motion.div>

        {/* Decorative wave bottom */}
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

      {/* ---------- Content Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Strengthening Agriculture-Based Livelihoods (SABL)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-gray-700 mb-6"
        >
          The <strong>SABL</strong> (Strengthening Agriculture-Based Livelihoods through
          Women and Youth Empowerment in the Thar Desert, India) project is a
          60-month initiative undertaken by <strong>Gramin Vikas Vigyan Samiti (GRAVIS)</strong>
          and financially supported by the <strong>European Union (EU)</strong>. This project aims to
          empower women and youth economically by strengthening Agriculture-based
          Livelihoods (ABL) in 20 drought-prone villages across Barmer, Jaisalmer,
          Pali, and Phalodi districts of the Thar Desert in Rajasthan, India. The
          region faces severe challenges including water scarcity, low crop
          yields, food insecurity, and significant gender inequality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-700 mb-6"
        >
          The overall objective is to contribute to strengthened ABL, leading to
          economic empowerment through gender equality and youth empowerment.
          Specifically, the project seeks to enhance the participation of women
          and youth in ABL by building their capacities and facilitating
          entrepreneurship through targeted training and market linkages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-10 border-l-4 border-green-700"
        >
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Key Activities
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              Strengthening Community Based Organizations (CBOs) such as Self
              Help Groups (SHGs) and Intergenerational Learning Groups (ILGs).
            </li>
            <li>
              Providing training in rainwater harvesting, sustainable agriculture,
              and crop diversification.
            </li>
            <li>
              Implementing <strong>650 khadins</strong> across <strong>2,600 hectares</strong> to boost
              crop production by 50–100%.
            </li>
            <li>
              Developing <strong>586 Arid Horticultural Units</strong> (AHUs) and <strong>20 silvipasture
              units</strong> to improve food and fodder security for 20,000 people and
              80,000 cattle.
            </li>
            <li>
              Training <strong>2,400 women and youth</strong> in financial and digital
              literacy, enabling market access and entrepreneurship.
            </li>
            <li>
              Supporting <strong>100 women and youth</strong> to establish food processing
              units for income generation.
            </li>
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          The project also prioritizes documentation, advocacy, and policy
          engagement to promote the replication of successful ABL practices.
          Collaboration with local authorities, private sector, and research
          organizations ensures sustainability and impact. The initiative aligns
          with the <strong>EU’s development goals</strong> and <strong>India’s national rural livelihood
          and climate adaptation programmes</strong>, building a replicable model for
          sustainable, equitable, and resilient rural communities.
        </motion.p>
      </section>
    </div>
  );
};

export default ProjectOverviewPage;
