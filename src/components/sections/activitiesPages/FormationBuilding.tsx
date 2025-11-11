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
                Formation of CBOs and Capacity Building

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
      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700">
            The project places significant emphasis on strengthening
            <span className="font-semibold text-[#166534]">
              {" "}Community-Based Organizations (CBOs){" "}
            </span>
            through both formation and extensive capacity building, targeting{" "}
            <span className="font-semibold">160 CBOs</span>, specifically{" "}
            <span className="font-semibold">
              80 Intergenerational Learning Groups (ILGs)
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              80 Self-Help Groups (SHGs)
            </span>. This initiative is crucial for empowering local communities,
            particularly women and youth, to lead agricultural livelihood development.
          </p>

          <p className="text-gray-700">
            Activities under this output include the formation of new ILGs and SHGs, or the
            identification and strengthening of existing ones in each of the{" "}
            <span className="font-semibold">20 project villages</span>. Each ILG and SHG will
            comprise approximately <span className="font-semibold">15 members</span>, with ILGs
            including young girls and boys, adult women, and older women, while SHGs focus on
            adult and older women.
          </p>

          <p className="text-gray-700">
            These groups will undergo comprehensive leadership and management training, covering
            aspects like CBO roles, intergenerational exchange, and group sustainability.
          </p>
        </motion.div>

        {/* ---------- Image Section ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/assets/Image/img (6).jpg"
            alt="CBO Training"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Technical and Leadership Training
            </h2>
            <p className="text-gray-700 mb-3">
              Additionally, technical trainings will be provided to enhance their understanding
              of <span className="font-semibold">Agriculture-Based Livelihoods (ABL)</span>,
              focusing on:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Improved rainwater harvesting</li>
              <li>Sustainable agriculture practices</li>
              <li>Crop diversification</li>
              <li>Rain-fed farming methods</li>
            </ul>
          </div>
        </motion.div>

        {/* ---------- Staff Training ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Staff Training and Knowledge Exchange
            </h2>
            <p className="text-gray-700">
              GRAVIS will also conduct staff trainings for its own team and other local CSOs
              to ensure a consistent and high level of knowledge and implementation capacity.
              Furthermore, GRAVIS will participate in national and international events to
              share learnings and gain exposure.
            </p>
            <p className="text-gray-700 mt-3">
              In addition, Information, Education, and Communication (IEC) materials will be
              developed in local languages and English to disseminate crucial information
              effectively among communities and stakeholders.
            </p>
          </div>
          <img
            src="/assets/Image/image (11).png"
            alt="Staff Training"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* ---------- Evaluation ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/assets/Image/img (1).JPG"
            alt="CBO Evaluation"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Monitoring and Evaluation
            </h2>
            <p className="text-gray-700">
              A mid-term review and final evaluation will assess the progress and impact of
              these capacity-building efforts, reinforcing the CBOs' role as key drivers of
              change and sustainability within their villages.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FormationBuilding;
