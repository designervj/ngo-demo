"use client";

import React from "react";
import { motion } from "framer-motion";

const ImpactPage = () => {
  const impacts = [
    {
      id: 1,
      title: "Technical Impact",
      content: `This project will significantly enhance the technical capabilities of 160 Community-Based Organizations (CBOs), including 80 Intergenerational Learning Groups (ILGs) and 80 Self-Help Groups (SHGs), by improving their understanding of Agriculture-Based Livelihoods (ABL) and its various components. Beneficiaries will gain advanced knowledge in critical areas such as rainwater harvesting technologies, sustainable agriculture practices, crop diversification, and rain-fed farming methods. Furthermore, their expertise in arid horticulture, animal husbandry, and the integrated management of these sectors with agriculture will be substantially upgraded. Participants will also develop essential digital and financial literacy, alongside improved marketing linkages, empowering them to lead and sustain future agricultural initiatives within their communities. These enhanced skills will not only improve CBOs' ability to implement and monitor ABL interventions but also serve as a valuable resource for other communities facing similar challenges. Other local CSOs will also benefit from capacity building, ensuring a broader and more sustained technical impact across the Thar Desert region.`,
    },
    {
      id: 2,
      title: "Economic Impact",
      content: `The economic conditions of the target groups and final beneficiaries are expected to improve significantly through the project's interventions. By implementing advanced rainwater harvesting technologies and innovative rain-fed farming practices, the project anticipates a notable increase in crop yields and enhanced horticultural production, directly leading to raised incomes for farmers. The establishment of silvipasture units will ensure greater fodder security for livestock, consequently boosting the animal husbandry sector and providing additional economic benefits. The comprehensive training and capacity building for CBOs, coupled with the creation of vital marketing linkages and provision of development support, will foster the establishment of income-generating food processing units. These units, utilizing local produce, will create new revenue streams and strengthen the rural economy. Ultimately, the entire community of the project villages will experience positive economic growth due to increased knowledge, the creation of sustainable agricultural assets, and the generation of new income opportunities, with a particular focus on empowering women and youth.`,
    },
    {
      id: 3,
      title: "Social Impact",
      content: `The project is designed to bring about a profound and inclusive social impact, particularly by elevating the status and leadership roles of women and youth within their communities. Women and youth leaders from CBOs will actively participate in crucial meetings with local authorities and Village Panchayats, advocating for their needs and driving community development initiatives. The project ensures the inclusion of women and youth from all caste groups and marginalized sections within CBOs, fostering an environment where every voice is heard and valued. This empowerment will manifest through their leadership in implementing and monitoring project interventions, their enhanced technical knowledge in ABL, and their direct ownership of income-generating units and assets created. The broader community, as indirect beneficiaries, will also be positively impacted, gaining increased understanding of ABL and developing greater acceptance of women and youth's vital roles in livelihoods and community development. This shift in perception will contribute to a sense of collective pride and shared responsibility, fostering a long-lasting and cohesive social transformation.`,
    },
    {
      id: 4,
      title: "Policy Impact",
      content: `The project holds significant potential to influence policies at both the state and national levels concerning agriculture, dryland farming, rural livelihoods, and climate change, particularly within arid zones like the Thar Desert. By demonstrating the effective leadership of women and youth in ABL and community development, the project will provide crucial evidence to policymakers. The planned studies and advocacy briefs, combined with strategically organized advocacy events, will offer concrete policy insights and recommendations. These efforts will highlight the critical role of ABL in addressing food security and economic empowerment in drought-prone regions and underscore the importance of integrating women and youth leadership into development strategies. Over its five-year duration, the project's robust documentation and advocacy initiatives are expected to generate key policy inputs that will have long-lasting impacts, encouraging the replication of successful practices and influencing the design of future rural livelihood programs and climate change adaptation policies.`,
    },
  ];

  return (
  
<>
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
                        className="relative z-10 text-white px-6 pb-12"
                      >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                         Impact
        
                        </h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="max-w-6xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
                        >
                            The <strong>SABL</strong> project aims to generate meaningful impacts across multiple dimensions — 
            <strong> technical, economic, social, and policy</strong>. These impacts collectively 
            contribute to sustainable agricultural development, community empowerment, and improved 
            resilience in drought-prone regions of Rajasthan.
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
  <div className="bg-[#f8faf9] text-gray-800 py-20 px-5 sm:px-10 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* ---------- Intro Section ---------- */}
      



               


        {/* ---------- Impact Cards ---------- */}
        <div className="space-y-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border-l-4 border-green-600 p-6 sm:p-8 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
                {impact.id}. {impact.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {impact.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------- Footer Resources Section ---------- */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#166534] mb-3">
            Resources
          </h3>
          <a
            href="#"
            className="text-green-700 hover:text-green-800 font-medium underline"
          >
            Case Studies
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImpactPage;
