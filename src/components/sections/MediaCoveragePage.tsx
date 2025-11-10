import React from 'react'
import NewsSection from './NewsSection'
import { AnimatePresence, motion } from 'framer-motion'
import MediaSection from './MediaSection'

const MediaCoveragePage = () => {
  return (
    <div 
   >
     
      <div 
      
       className='relative h-full w-full bg-green-500 py-24' // relative positioning for pattern
        style={{
          // 🌟 **FIX: Background Pattern Styles**
          // Ye ek subtle dots pattern hai. Aap apni pasand ka URL ya inline SVG use kar sakte ho.
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23888\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M9 0h1L0 10V9zM0 0h1L10 9v1z\'/%3E%3C/g%3E%3C/svg%3E")',
backgroundSize: '20px 20px',
          // Agar aapko gradient bhi chahiye pattern ke sath, to aise laga sakte ho:
          // background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("...")',
        }}
        > {/* Background color for contrast */}
      <div 
       
      >
        <AnimatePresence mode="wait">
          <motion.h2
            // variants={slideVariants} // Uncomment if you use slideVariants
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white text-center text-2xl sm:text-4xl lg:text-5xl mx-auto font-semibold max-w-3xl md:leading-[62px]"
          >
            Media Coverage
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
   
   <div className='container-xl mx-auto '>
       {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What’s New
        </h2> */}
      <MediaSection/>
      </div>
    </div>
  )
}

export default MediaCoveragePage
