import React from "react";
import NewsSection from "./NewsSection";
import { AnimatePresence, motion } from "framer-motion";
import MediaSection from "./MediaSection";

const IECMaterialspage = () => {
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
             IEC Materials
            </h1>
          </motion.div>
        </div>
      </div>

      <MediaSection />
    </div>
  );
};

export default IECMaterialspage;
