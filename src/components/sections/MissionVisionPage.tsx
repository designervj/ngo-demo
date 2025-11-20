"use client";
import { motion } from "framer-motion";
import React from "react";

const MissionVisionPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview / What We Do) */}
    

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
                        Mission & Vision

      
                      </h1>
                      
                    </motion.div>
            
                    {/* Decorative Bottom Wave */}
                  
                  </div>



     


      {/* 🌱 Vision Section (Alternate layout) */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-20 text-gray-800 ">
      <div className="max-w-6xl mx-auto">

          <p className="text-lg leading-relaxed text-gray-700">
              GRAVIS is guided by two foundational Gandhian principles: Sarvodaya, meaning "all rising, but the last person first," which emphasizes a bottom-up approach for inclusive socio-economic progress. We champion the collective advancement of all individuals, irrespective of their economic status, age, caste, or religion.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">To achieve this, GRAVIS embraces Gram Swaraj, or village self-rule. This philosophy promotes independent, self-sufficient villages. Our interventions are therefore planned and executed with extensive community involvement, ensuring local ownership, maintenance, and monitoring. Strong community-based organizations (CBOs) are central to GRAVIS' work, actively engaging members in projects to foster self-empowerment rather than merely supplementing failing systems.</p>

   
      {/* <div className="flex gap-2 justify-center mt-6 ">
          <img src="assets/Image/history-img.png" alt="OverView Image" className="w-1/2 rounded-md"></img>
          <img src="assets/Image/history-img1.png" alt="Overview Image" className="w-1/2 rounded-md"></img>

        </div> */}
</div>
      </section>
    </div>
  );
};

export default MissionVisionPage;
