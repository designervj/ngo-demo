"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// 🌟 Video + Text data
const videos = [
  {
    id: 1,
    url: "/assets/Image/video.mp4",
    title: "Project Field Activities Overview",
    content:
      "Explore our field activities focusing on sustainable agriculture and rural development. Learn how communities are transforming livelihoods.",
  },
  {
    id: 2,
    url: "/assets/Image/video.mp4",
    title: "Community Engagement & Impact",
    content:
      "Discover how our community-based programs empower women, youth, and farmers to achieve greater resilience and economic growth.",
  },
  {
    id: 3,
    url: "/assets/Image/video.mp4",
    title: "Event Highlights 2023",
    content:
      "Take a look at our 2023 event highlights where stakeholders and beneficiaries came together to celebrate our collective achievements.",
  },
];

const WhatsNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // ✅ Ensure navigation buttons are attached even after render
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      swiperInstance.params.navigation
    ) {
      const navigation = swiperInstance.params.navigation as any;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative bg-[#F8F7F2] py-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')] opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#6c4c35] mb-5">
          What's New
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative mt-8"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex justify-center items-center bg-white rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100 transition-all duration-500 overflow-hidden">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
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

        {/* 🌟 Dynamic Title + Content based on active slide */}
        <div className="mt-10 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          <p className="font-semibold text-[#6c4c35] text-xl">
            {videos[activeIndex].title}
          </p>
          <p className="mt-2">{videos[activeIndex].content}</p>
        </div>

        {/* 🌟 Controls (Now at bottom + working) */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            ref={prevRef}
            className="bg-[#8bb66c] hover:bg-[#69a242] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowLeft className="text-white" />
          </button>

          <span className="text-[#636B78] text-sm italic tracking-wide">
            {activeIndex + 1} / {videos.length}
          </span>

          <button
            ref={nextRef}
            className="bg-[#8bb66c] hover:bg-[#69a242] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
