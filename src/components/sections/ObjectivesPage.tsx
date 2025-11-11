"use client";
import { motion } from "framer-motion";
import React from "react";

const ObjectivesPage = () => {
  return (
    <div className="bg-[#F7F8F6] text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[65vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background gradient + subtle pattern */}
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Objectives
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Strengthening agriculture-based livelihoods through empowerment, innovation, and inclusivity.
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-700 mb-8"
        >
          The <strong>SABL</strong> project is driven by a clear set of objectives, all geared
          towards fostering sustainable development and economic empowerment in
          the drought-prone regions of Rajasthan. Our overarching goal is to
          strengthen agriculture-based livelihoods (ABL), enhancing economic
          well-being through gender equality and youth empowerment.
        </motion.p>

        {/* Objectives List */}
        <div className="space-y-8">
          {[
            {
              title:
                "1. Enhance Participation of Women and Youth in Agriculture-Based Livelihoods",
              desc: "A core objective is to significantly increase the involvement and leadership of women and youth in all aspects of ABL. This is achieved through targeted capacity building, providing them with essential skills, knowledge, and resources to thrive in agricultural and allied sectors.",
            },
            {
              title: "2. Improve Agricultural Productivity and Resource Management",
              desc: "The project focuses on boosting agricultural output and ensuring efficient use of natural resources. This includes implementing improved rainwater harvesting structures like khadins, promoting sustainable farming practices, and encouraging crop diversification to enhance food and fodder security in the region.",
            },
            {
              title: "3. Strengthen Community Resilience and Adaptive Capacity",
              desc: "By developing Arid Horticultural Units (AHUs) and silvipasture units, we aim to build the resilience of communities against climate variability and resource scarcity. These initiatives provide alternative livelihood options and secure access to essential resources for both people and livestock.",
            },
            {
              title: "4. Foster Entrepreneurship and Market Linkages",
              desc: "We are committed to nurturing entrepreneurial ventures among women and youth. By facilitating access to finance, connecting them with markets, and supporting the establishment of food processing and other value-added units, we aim to create sustainable income-generating opportunities.",
            },
            {
              title: "5. Facilitate Learning, Knowledge Sharing, and Advocacy",
              desc: "A vital objective is to document the lessons learned and best practices throughout the project's implementation. Through comprehensive learning documents and advocacy briefs, we aim to influence policy decisions, promote the replication of successful ABL models, and contribute to broader development dialogues.",
            },
            {
              title: "6. Promote Gender Equality and Youth Empowerment",
              desc: "Underpinning all project activities is a strong commitment to gender equality and youth empowerment. We work to dismantle barriers, provide equal opportunities, and ensure that women and young people are active participants and beneficiaries in the region's agricultural transformation.",
            },
          ].map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                {obj.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-lg leading-relaxed text-gray-700"
        >
          Through these interconnected objectives, the <strong>SABL</strong> project strives to
          create a replicable model for sustainable economic empowerment,
          building adaptive and just communities in the Thar Desert and beyond.
        </motion.p>
      </section>
    </div>
  );
};

export default ObjectivesPage;
