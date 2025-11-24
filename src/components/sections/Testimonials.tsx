"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.params?.navigation) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // 🔊 Stop previous video on slide change
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        index === activeIndex ? video.play() : video.pause();
      }
    });
  }, [activeIndex]);

  // 🔊 Click to unmute
  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = !video.muted;
  };

  return (
    <section className="relative bg-[#F8F7F2] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#123751] mb-5">
          What's New
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative mt-16"
        >
          {videos.map((video, index) => (
         <SwiperSlide key={video.id}>
  <div className="flex justify-center items-center bg-white rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100 transition-all duration-500 overflow-hidden">
    <div
      className="relative w-full"
      style={{ paddingTop: "56.25%" }}
    >
      <video
        ref={(el) => (videoRefs.current[index] = el!)}
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src={video.url}
        controls
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        <div className="mt-10 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          <p className="font-semibold text-[#123751] text-xl">
            {videos[activeIndex].title}
          </p>
          <p className="mt-2">{videos[activeIndex].content}</p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            ref={prevRef}
            className="bg-[#008a2c] hover:bg-[#008a2ceb] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowLeft className="text-white" />
          </button>

          <span className="text-[#636B78] text-sm italic tracking-wide">
            {activeIndex + 1} / {videos.length}
          </span>

          <button
            ref={nextRef}
            className="bg-[#008a2c] hover:bg-[#008a2ceb] transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
