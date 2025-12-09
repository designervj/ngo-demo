"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";

const photos = [
  "/assets/Image/GalleryImage/ (1).jpeg",
   "/assets/Image/GalleryImage/ (1).jpg",
    "/assets/Image/GalleryImage/ (2).jpg",
  "/assets/Image/GalleryImage/ (2).jpeg",
  "/assets/Image/GalleryImage/ (3).jpeg",
   "/assets/Image/GalleryImage/ (3).JPG",
  "/assets/Image/GalleryImage/ (4).jpeg",
  "/assets/Image/GalleryImage/ (4).JPG",

  "/assets/Image/GalleryImage/ (5).jpeg",
  "/assets/Image/GalleryImage/ (5).JPG",
  "/assets/Image/GalleryImage/ (6).jpeg",
  "/assets/Image/GalleryImage/ (6).JPG",
  "/assets/Image/GalleryImage/ (7).jpeg",
  "/assets/Image/GalleryImage/ (7).JPG",
  "/assets/Image/GalleryImage/ (8).jpeg",
  "/assets/Image/GalleryImage/ (8).JPG",
  "/assets/Image/GalleryImage/ (9).jpeg",
  "/assets/Image/GalleryImage/ (9).JPG",
  "/assets/Image/GalleryImage/ (10).jpeg",
  "/assets/Image/GalleryImage/ (10).JPG",
  "/assets/Image/GalleryImage/ (11).JPG",
  "/assets/Image/GalleryImage/ (12).JPG",
  "/assets/Image/GalleryImage/ (13).JPG",
  "/assets/Image/GalleryImage/ (14).JPG",
  "/assets/Image/GalleryImage/ (15).JPG",
  "/assets/Image/GalleryImage/ (16).jpg",
  "/assets/Image/GalleryImage/ (17).jpg",
  "/assets/Image/GalleryImage/ (18).JPG",
  "/assets/Image/GalleryImage/ (19).JPG",
  "/assets/Image/GalleryImage/ (20).JPG",
  "/assets/Image/GalleryImage/ (21).JPG",
  "/assets/Image/GalleryImage/ (22).jpg",
  "/assets/Image/GalleryImage/ (23).jpg",
  "/assets/Image/GalleryImage/ (24).JPG",
  "/assets/Image/GalleryImage/ (25).jpg",
  "/assets/Image/GalleryImage/ (26).jpg",
  "/assets/Image/GalleryImage/ (27).JPG",
  "/assets/Image/GalleryImage/ (28).jpg",
  "/assets/Image/GalleryImage/ (29).jpg",
  "/assets/Image/GalleryImage/ (30).JPG",
  "/assets/Image/GalleryImage/ (31).jpg",
  "/assets/Image/GalleryImage/ (32).jpg",
  "/assets/Image/GalleryImage/ (33).jpg",
  "/assets/Image/GalleryImage/ (34).jpg",
  "/assets/Image/GalleryImage/ (35).jpg",
  "/assets/Image/GalleryImage/ (36).jpg",
  "/assets/Image/GalleryImage/ (37).jpg",
  "/assets/Image/GalleryImage/ (38).jpg",
  "/assets/Image/GalleryImage/ (39).jpg",
  "/assets/Image/GalleryImage/ (40).jpg",
  "/assets/Image/GalleryImage/ (41).jpg",
  "/assets/Image/GalleryImage/ (42).jpg",
  "/assets/Image/GalleryImage/ (43).jpg",
  "/assets/Image/GalleryImage/ (44).jpg",
  "/assets/Image/GalleryImage/ (45).jpg",
  "/assets/Image/GalleryImage/ (46).jpg",
  "/assets/Image/GalleryImage/ (47).jpg",
  "/assets/Image/GalleryImage/ (48).jpg",
  "/assets/Image/GalleryImage/ (49).jpg",
  "/assets/Image/GalleryImage/ (50).jpg",
  "/assets/Image/GalleryImage/ (51).jpg",
  "/assets/Image/GalleryImage/ (52).jpg",
  "/assets/Image/GalleryImage/ (53).jpg",
  "/assets/Image/GalleryImage/ (54).jpg",
  "/assets/Image/GalleryImage/ (55).jpg",
  "/assets/Image/GalleryImage/ (56).jpg",
  "/assets/Image/GalleryImage/ (57).jpg",
  "/assets/Image/GalleryImage/ (58).jpg",
  "/assets/Image/GalleryImage/ (59).jpg",
  "/assets/Image/GalleryImage/ (60).jpg",
 












];

const PhotoGalleryPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-[#F7F8F6]">
    
      {/* <div className="relative w-full h-[65vh] flex items-center justify-center text-center overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Photo Gallery
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
            Explore moments that capture GRAVIS’s mission — empowering rural
            communities through sustainability and inclusion.
          </motion.p>
        </motion.div>

    
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
      </div> */}

         <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative z-10 text-center text-white px-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
                   Photo Gallery
                  </h1>
                </motion.div>
              </div>
            </div>

      {/* ---------- Gallery Section ---------- */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#008a2c] text-center mb-10"
        >
          Our Gallery
        </motion.h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide text-lg">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- Overlay Full Image ---------- */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelected(null)}
          >
            <X size={36} />
          </button>
          <motion.img
            src={selected}
            alt="Full View"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[90vh] w-auto rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGalleryPage;
