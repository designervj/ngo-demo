"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Quote icon hata diya
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// 🌟 Video data
const videos = [
  {
    id: 1,
    // Note: Ye dummy URLs hain, inko client ke video embed URLs se badal dena
    url: "/assets/Image/video.mp4",
    title: "Project Field Activities Overview",
  },
  {
    id: 2,
    url: "/assets/Image/video.mp4",
    title: "Community Engagement & Impact",
  },
  {
    id: 3,
    url: "/assets/Image/video.mp4",
    title: "Event Highlights 2023",
  },
];

const WhatsNew = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
 <section className="relative bg-[#F8F7F2] py-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')] opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Header */}
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#6c4c35] mb-5">What's New</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
          className="relative mt-8"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex justify-center items-center bg-white rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100 transition-all duration-500 overflow-hidden">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> 
        {/* 🌟 **FIX YAHAN HAI: Missing closing </Swiper> tag add kar diya** */}

        {/* 🌟 Caption Area */}
        <div className="mt-8 text-center text-gray-700 text-lg">
          <p className="font-semibold">Upcoming Field and Event Activities:</p>
          <p className="mt-2">
            Stay tuned for updates on our latest projects and community events.
            We will be sharing details on our efforts in sustainable agriculture,
            water conservation, and skill development very soon.
          </p>
         
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button className="prev-btn bg-[#8bb66c] hover:bg-[#69a242] transition-all duration-300 w-10 h-10 flex items-center justify-center md:p-4 rounded-full shadow-md">
            <span className="text-white text-sm font-bold">
              <FaArrowLeft />
            </span>
          </button>

          <span className="text-[#636B78] text-sm italic tracking-wide">
            {activeIndex} / {videos.length}
          </span>

          <button className="next-btn bg-[#8bb66c] hover:bg-[#69a242] justify-center transition-all duration-300 w-10 h-10 flex items-center md:p-4 rounded-full shadow-md">
            <span className="text-white text-sm font-bold">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;