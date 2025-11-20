"use client";
import { motion } from "framer-motion";
import React from "react";

const HistoryPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview Page) */}
  


       <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
              {/* Gradient + Pattern Background */}
              <div className="absolute inset-0 bg-[#123751]">
                {/* Decorative Texture */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "url('https://www.transparenttextures.com/patterns/cubes.png')",
                  }}
                ></div>
      
                {/* Floating light effect */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.15),transparent_60%)] animate-pulse-slow"></div> */}
              </div>
      
              {/* Foreground Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-white px-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
                  History

                </h1>
               
              </motion.div>
      
              {/* Decorative Bottom Wave */}
            
            </div>
      

      {/* 📜 History Content Section */}
      <section className="bg-[#F7F8F6] py-16 px-6 md:px-20 text-gray-800 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-green-800">
            Our Journey Since 1983
          </h2>

          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Established in 1983 by <strong>Laxmi Chand Tyagi</strong> and{" "}
            <strong>Shashi Tyagi</strong>, GRAVIS originated from their
            dedication to activism and their backgrounds in agriculture
            and education. Along with other notable activities, they 
            founded the organization in Rajasthan's Thar Desert, a region 
            grappling with extreme climate, chronic water scarcity, and 
            a notable absence of development agencies. This challenging 
            environment, characterized by over 70 drought years in the 
            past century and summer temperatures soaring to 48 degrees 
            Celsius, severely impedes agricultural productivity, contributing
            to widespread malnutrition and health crises among its remote, 
            yet densely populated, communities.

          </p>   


          <p className="text-lg leading-relaxed text-gray-700">
           From its humble beginnings in <strong>20 villages</strong>,
            GRAVIS has expanded its reach to over <strong>2000 communities</strong>, 
            positively impacting over <strong>2 million individuals</strong> and 
            facilitating the creation of <strong> 4000 Community-based Organizations</strong>. 
            Recognizing the persistent vulnerabilities faced by women, children,
             and the elderly due to water and food insecurity, GRAVIS adopted
              a holistic,integrated development strategy. This approach extends to 
               regions in Uttarakhand, addressing challenges posed by floods 
               and dry periods in its mountainous terrain, and to the drought
               -afflicted Bundelkhand region of Uttar Pradesh, with a strong 
               focus on farmer empowerment, women's upliftment, and community 
               health initiatives. Beyond providing disaster relief and fostering 
               global knowledge exchange, GRAVIS is committed to sustainable development.
                The organization strives to ensure reliable access to safe drinking and
                 irrigation water, while simultaneously transforming lives through 
                 comprehensive programmes in education, healthcare, microfinance, and 
                 dedicated advocacy for the rights of society's most vulnerable members.
          </p>
        </motion.div>
      <div className="flex gap-2 justify-center mt-6 mx-auto max-w-6xl">
          <img src="assets/Image/history-img.png" alt="OverView Image" className="w-1/2 rounded-md"></img>
          <img src="assets/Image/history-img1.png" alt="Overview Image" className="w-1/2 rounded-md"></img>

        </div>
      </section>

        
    </div>
  );
};

export default HistoryPage;
