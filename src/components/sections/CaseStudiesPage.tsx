import React from "react";
import NewsSection from "./NewsSection";
import OurWork from "./OurWork";
import { AnimatePresence, motion } from "framer-motion";

const CaseStudiesPage = () => {
  return (
    <div>
     



                  <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-center text-white px-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
                        Case Studies
                        </h1>
                      </motion.div>
                    </div>
                  </div>
      

      <OurWork />
      {/* </div> */}
    </div>
  );
};

export default CaseStudiesPage;
