"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Center for Women’s Land Rights",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
  {
    id: 2,
    title: "Climate Change",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
  {
    id: 3,
    title: "Corporate Engagement",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
  {
    id: 4,
    title: "Center for Women’s Land Rights",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
  {
    id: 5,
    title: "Climate Change",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
  {
    id: 6,
    title: "Corporate Engagement",
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
  },
];

export default function OurWork() {
  return (
    <section className="bg-[#F8F7F2] py-20">
    
      <div className="container-xl mx-auto px-4">
        {/* Top Text */}
        <div className="grid grid-cols-[30%_70%] gap-8 mb-14">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            A systemic <br /> approach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To effect systemic change, we engage a range of actors from global
            arenas to grassroots initiatives. This includes national governments,
            global and regional conventions, private sector partners, local
            decision-makers and organizations, and communities on-the-ground.
            <br />
            <br />
            Learn more about our core programs:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.title}
                </h3>
                <ArrowRight className="text-gray-800" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
 
    </section>
  );
}
