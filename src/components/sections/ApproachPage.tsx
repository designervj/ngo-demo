"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ApproachPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
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
                  Our Approach

                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
                >
                   GRAVIS's strategy for implementing the SABL project is built on several key pillars
          to achieve sustainable agriculture-based livelihoods and empower women and youth in the Thar Desert.
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


      {/* ---------- Main Section ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 leading-relaxed">
        

        {/* ---------- Section 1 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/image (6).png"
            alt="Community Empowerment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Community-Centric Empowerment
            </h2>
            <p>
              The strategy prioritizes active involvement of local communities, particularly women and youth,
              through the formation and strengthening of Community-Based Organizations (CBOs) like
              Self-Help Groups (SHGs) and Intergenerational Learning Groups (ILGs).
              These CBOs will be in leadership roles for planning, implementation, and monitoring,
              fostering local ownership and sustainability.
            </p>
          </motion.div>
        </div>

        {/* ---------- Section 2 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Integrated Livelihood Approach
            </h2>
            <p>
              GRAVIS recognizes that agricultural livelihoods are interconnected. The strategy emphasizes
              integrating agriculture with allied sectors such as horticulture and animal husbandry.
              This includes developing Arid Horticultural Units (AHUs) and silvipasture units to enhance
              food and fodder security and diversify income sources.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/image (8).png"
            alt="Integrated Livelihood"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 3 (Capacity Building) ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/image (9).png"
            alt="Capacity Building"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Capacity Building and Knowledge Transfer
            </h2>
            <p className="mb-4">
              A significant aspect of the strategy is to enhance knowledge and skills at multiple levels.
              This involves:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Training CBO members in improved rainwater harvesting, sustainable agriculture practices,
                crop diversification, and rain-fed farming.
              </li>
              <li>
                Equipping women and youth with financial and digital literacy, crucial for accessing markets and capital.
              </li>
              <li>
                Strengthening the capacity of GRAVIS and other local CSOs to lead similar initiatives in the future.
              </li>
              <li>
                Facilitating knowledge exchange with national and international stakeholders.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ---------- Section 4 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Entrepreneurship and Market Linkages
            </h2>
            <p>
              The project aims to move beyond subsistence farming by fostering entrepreneurship.
              This includes providing income-generating support for establishing food processing units
              and developing marketing linkages to ensure that produce reaches markets effectively,
              thereby boosting incomes.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/image (10).png"
            alt="Market Linkages"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 5 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/image (11).png"
            alt="Traditional Wisdom"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Leveraging Traditional Wisdom and Modern Techniques
            </h2>
            <p>
              The strategy blends traditional knowledge, such as the use of khadins for rainwater harvesting,
              with modern, innovative rain-fed farming techniques and crop diversification
              to improve agricultural productivity in the arid environment.
            </p>
          </motion.div>
        </div>

        {/* ---------- Section 6 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Advocacy and Policy Influence
            </h2>
            <p>
              GRAVIS plans to document learning and develop advocacy briefs to influence government policies
              related to agriculture, dryland farming, rural livelihoods, and women and youth empowerment.
              This aims to promote replication of successful practices by government agencies and other CSOs.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/image (12).png"
            alt="Advocacy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 7 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/image (13).png"
            alt="Partnerships"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Partnerships and Synergy
            </h2>
            <p>
              The approach involves collaboration with various stakeholders, including local authorities,
              the private sector, and research organizations. This is intended to leverage existing government programs
              and infrastructure, gain technical support, and amplify the project's impact.
            </p>
          </motion.div>
        </div>

        {/* ---------- Closing ---------- */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            By combining these strategic elements, GRAVIS seeks to create a replicable model for strengthening
            agriculture-based livelihoods, leading to economic empowerment and improved well-being
            for vulnerable communities in the Thar Desert.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ApproachPage;
