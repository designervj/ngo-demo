"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ImpactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[65vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background gradient + pattern */}
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

        {/* Foreground Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Impact
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Transforming communities through innovation, empowerment, and sustainability.
          </motion.p>
        </motion.div>

        {/* Decorative Wave */}
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
      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">
        {/* Technical Impact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <img
            src="/assets/Image/image (18).png"
            alt="Technical Impact"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#166534] mb-4">
              Technical Impact
            </h2>
            <p className="text-gray-700">
              This project enhances the technical capabilities of{" "}
              <span className="font-semibold text-green-700">160 Community-Based Organizations</span>,
              improving their expertise in{" "}
              <span className="font-semibold">Agriculture-Based Livelihoods (ABL)</span>.
              Beneficiaries gain knowledge in sustainable agriculture, rainwater harvesting,
              crop diversification, arid horticulture, and animal husbandry. They also develop
              digital and financial literacy and improved marketing linkages, enabling them to
              lead future agricultural initiatives effectively.
            </p>
          </div>
        </motion.div>

        {/* Economic Impact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#166534] mb-4">
              Economic Impact
            </h2>
            <p className="text-gray-700">
              The project improves economic conditions through increased crop yields,
              better rain-fed farming practices, and enhanced horticultural production.
              Silvipasture units ensure fodder security, boosting livestock health.
              Training and market linkages foster local{" "}
              <span className="font-semibold">food processing units</span>,
              creating new income streams and empowering women and youth.
            </p>
          </div>
          <img
            src="/assets/Image/image (19).png"
            alt="Economic Impact"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Social Impact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <img
            src="/assets/Image/image (20).png"
            alt="Social Impact"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#166534] mb-4">
              Social Impact
            </h2>
            <p className="text-gray-700">
              The project elevates the leadership of{" "}
              <span className="font-semibold text-green-700">women and youth</span> in
              community decision-making. It ensures inclusivity across caste and
              marginalized groups, fostering unity and respect. Women and youth gain
              leadership, technical skills, and ownership in community assets, driving
              long-term social transformation.
            </p>
          </div>
        </motion.div>

        {/* Policy Impact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#166534] mb-4">
              Policy Impact
            </h2>
            <p className="text-gray-700">
              The project provides evidence-based insights for policymakers to support
              sustainable agriculture, dryland farming, and climate resilience. Advocacy
              briefs and case studies will influence{" "}
              <span className="font-semibold">state and national policies</span>,
              promoting replication of successful practices and prioritizing women and
              youth leadership in future development strategies.
            </p>
          </div>
          <img
            src="/assets/Image/image (21).png"
            alt="Policy Impact"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ImpactPage;
