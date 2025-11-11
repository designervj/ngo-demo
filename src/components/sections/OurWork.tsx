"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

// 🌟 **FIX 1: Har program mein 'pdfUrl' property add ki hai**
// (Aapko in paths ko apne actual PDF links se replace karna hoga)
const programs = [
  {
    id: 1,
    title: "Center for Women’s Land Rights",
    image: "/assets/Image/img (1).jpeg",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
  {
    id: 2,
    title: "Climate Change",
    image: "/assets/Image/img (2).jpg",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
  {
    id: 3,
    title: "Corporate Engagement",
    image: "/assets/Image/img (3).JPG",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
  {
    id: 4,
    title: "Center for Women’s Land Rights", // Assuming this is a different one
    image: "/assets/Image/img (4).JPG",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
  {
    id: 5,
    title: "Climate Change", // Assuming this is a different one
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
  {
    id: 6,
    title: "Corporate Engagement", // Assuming this is a different one
    image: "/assets/Image/Corporate-Engagement-img-4-min.jpg",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
  },
];

export default function OurWork() {
  return (
    <section className="bg-[#F8F7F2] py-20">
      <div className="container-xl mx-auto px-4">
        {/* Top Text */}
        <div className="grid md:grid-cols-[30%_70%] gap-8 mb-14">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            A systemic approach
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
            // 🌟 **FIX 2: <div> ko <a> tag se badal diya**
            <a
              key={program.id}
              href={program.pdfUrl} // 👈 Link yahaan add kiya
              target="_blank" // 👈 Naye tab mein kholne ke liye
              rel="noopener noreferrer" // 👈 Security ke liye
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group" // 'group' add kiya (optional, styling ke liye)
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-72 object-cover"
              />
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.title}
                </h3>
                <ArrowRight
                  className="text-gray-800 transition-transform duration-300 group-hover:translate-x-1" // 👈 Bonus: Arrow ko hover par move kiya
                  size={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}