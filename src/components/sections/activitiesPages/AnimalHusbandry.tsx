import { motion } from "framer-motion";
import React from "react";
// import { fadeInUp } from "../anim";
// import { fadeInUp } from "../anim";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const AnimalHusbandry = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Horticulture and Animal Husbandry
            </h1>
          </motion.div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6" >
          {/* --------- Paragraph 1 --------- */}
          <p className="text-lg text-gray-700">
           The project actively supports horticulture as a vital component of 
           Agriculture-Based Livelihoods (ABL), aiming to enhance food and fodder security,
           improve nutrition, and generate additional income for approximately 20,000 humans
           and 80,000 cattle. One of the significant activities involve the establishment
           of 586 Arid Horticultural Units (AHUs). These units will be set up in needy
           households with small plots of land, providing them with drought-resilient
           fruit and vegetable saplings, such as okra, tomatoes, pumpkin, cabbage,
           eggplant, coriander, spinach, pomegranate, plum, lemon, and guava.
                  These crops are specifically chosen for their ability to thrive with moderate water
                   supply in extreme weather conditions. The AHUs will be continuously monitored by
                    beneficiary families, with support and technical knowledge from ILG and SHG members, 
                    acting as crucial sources of nutrition and income. GRAVIS will be responsible for
                     procuring all necessary materials, including stone slabs, fencing wires, plants, and manure,
            and will manage their transportation and the hiring of skilled labourers, while unskilled labour will be provided by the communities
          </p>

          {/* --------- Paragraph 2 --------- */}
          <p className="text-lg text-gray-700">
            Furthermore, the project will develop 20 silvipasture units—one in each village—to ensure a
             sustainable supply of fodder for livestock, particularly during droughts, and to
              prevent uncontrolled grazing. These units, which involve growing drought-resistant 
              shrubs, grasses, and desert trees with appropriate fencing, will be managed by ILGs 
              and SHGs in collaboration with Village Panchayats, who will establish rules for their
               use and maintenance. Community-level trainings on the management of both AHUs and 
               silvipasture units will be regularly organized by expert resource 
            persons to enhance local knowledge and ensure the long-term sustainability and 
            effectiveness of these horticultural interventions.
          </p>
        </motion.div>



        <div className="flex items-center justify-center gap-2 mt-8">
          <img src="./assets/Image/Animal-Husbandry-Option3.png" className="w-1/2 rounded-md"></img>
          <img src="./assets/Image/Animal-Husbandry-Option2.png" className="w-1/2 rounded-md"></img>
        </div>
      </section>
    </div>
  );
};

export default AnimalHusbandry;
