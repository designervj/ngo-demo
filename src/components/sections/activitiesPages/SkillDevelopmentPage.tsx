"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SkillDevelopmentPage = () => {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Documentation and Advocacy
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed">
              Strengthening agriculture-based livelihoods through empowerment,
              innovation, and inclusivity.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10 mb-12 leading-relaxed">
        {/* ---------- Image Section ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="./assets/Image/Documentation-image1.png"
            alt="CBO Training"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <p className="text-gray-700 mb-3 text-lg ">
              Documentation and advocacy form a critical output of the project,
              designed to influence policies and promote the replication of
              successful Agriculture-Based Livelihoods (ABL) practices by local
              Civil Society Organizations (CSOs) and government agencies, both
              within India and beyond. Over the project's duration, two
              comprehensive learning documents will be compiled. These documents
              will focus on the pivotal role of women and youth in strengthening
              ABL and on effective livelihood development strategies within arid
              zones. These publications will synthesize project experiences,
              findings, and best practices, and will be widely disseminated both
              online and in print to facilitate knowledge sharing and exchange
              among various stakeholders.
            </p>
          </div>
        </motion.div>

        {/* ---------- Staff Training ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <p className="text-gray-700 text-lg ">
              In addition to these learning documents, three advocacy briefs
              will be developed. These briefs will address key themes: gender
              aspects in dryland/rain-fed farming, the participation of youth in
              ABL and the significance of intergenerational exchanges, and the
              crucial alignment between agriculture, horticulture, and animal
              husbandry within ABL. Each brief will include policy
              recommendations and advocacy messages aimed at influencing rural
              livelihood programs and policies, with a strong emphasis on
              promoting ABL through women and youth leadership. To further
              amplify these messages and foster participatory dialogue,
              community-level advocacy events will be organized at the district
              level. These events will bring together representatives from local
              communities, GRAVIS, other CSOs, local authorities, research
              organizations, and the private sector.
            </p>
          </div>
          <img
            src="./assets/Image/Documentation-image1.png"
            alt="Staff Training"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="./assets/Image/Documentation-image1.png"
            alt="CBO Training"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <p className="text-gray-700 mb-3 text-lg ">
              Furthermore, State and national-level advocacy events are planned
              for the final year of the project, targeting a broader audience of
              stakeholders, including government authorities and the EU
              Delegation, to discuss policy and practical advancements in ABL
              through women and youth empowerment. The project aims to document
              robust data and evidence to support these advocacy efforts,
              ensuring a long-lasting impact on policy and practice.
            </p>
          </div>
        </motion.div>

        {/* ---------- Evaluation ---------- */}
      </section>
    </>
  );
};

export default SkillDevelopmentPage;
