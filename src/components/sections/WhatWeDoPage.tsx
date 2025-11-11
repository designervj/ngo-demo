"use client";

import { motion } from "framer-motion";
import { FaTint, FaSeedling, FaStethoscope, FaBookOpen, FaUsers, FaBullhorn } from "react-icons/fa";

const sections = [
  {
    title: "Water Security",
    icon: <FaTint className="text-green-600 text-4xl" />,
    content:
      "In drought-prone areas, water scarcity jeopardizes health, agriculture, and girls' education. GRAVIS implements integrated watershed programs, constructing traditional rainwater harvesting structures like taankas, naadis, and beris to provide sustainable water access.",
    image: "/assets/Image/image (12).png",
  },
  {
    title: "Agriculture and Animal Husbandry",
    icon: <FaSeedling className="text-green-600 text-4xl" />,
    content:
      "Desert communities face declining water tables, droughts, and unsustainable farming practices, threatening food security. GRAVIS collaborates with villagers on carefully planned agriculture and livestock management programs to enhance food security.",
    image: "/assets/Image/img (4).JPG",
  },
  {
    title: "Health",
    icon: <FaStethoscope className="text-green-600 text-4xl" />,
    content:
      "Harsh conditions lead to health issues like malnutrition, poor sanitation, and limited medical access. GRAVIS improves well-being through affordable medical facilities, Village Health Worker training, and medical camps. We offer specific programs for women and girls, including pre-natal, post-natal, nutrition, and family planning. We also support the elderly through nutrition, economic security, and Village Older People's Associations (VOPAs), addressing their physical and mental health needs.",
    image: "/assets/Image/image (11).png",
  },
  {
    title: "Education",
    icon: <FaBookOpen className="text-green-600 text-4xl" />,
    content:
      "Basic education is a luxury in rural areas, especially for girls, due to daily chores, lack of nutrition, and distant schools. GRAVIS provides schools, teachers, materials, uniforms, and transport. Our water harvesting initiatives also free up girls' and women's time for education.",
    image: "/assets/Image/image (7).png",
  },
  {
    title: "Community Mobilization",
    icon: <FaUsers className="text-green-600 text-4xl" />,
    content:
      "We foster village self-reliance by forming CBOs in the Thar region. These groups actively participate in all project phases—planning, training, implementation, monitoring, and maintenance—serving as platforms for community expression.",
    image: "/assets/Image/img (7).jpg",
  },
  {
    title: "Research & Advocacy",
    icon: <FaBullhorn className="text-green-600 text-4xl" />,
    content:
      "GRAVIS prioritizes research to identify effective measures and disseminate best practices. Through publications, we share valuable insights, extending our impact. We also support the poor by amplifying their voice in critical policy decisions.",
    image: "/assets/Image/img (6).jpg",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="w-full">
      {/* 🌟 HERO SECTION */}
<div className="relative w-full h-[65vh] overflow-hidden flex items-center justify-center">
  {/* 🌄 Gradient + Pattern Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800">
    {/* Subtle SVG wave pattern overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" stroke=\"%23fff\" stroke-width=\"0.5\"%3E%3Cpath d=\"M0 40 Q40 0 80 40 T160 40\"/%3E%3Cpath d=\"M0 60 Q40 20 80 60 T160 60\"/%3E%3C/g%3E%3C/svg%3E')",
        backgroundSize: "cover",
      }}
    ></div>

    {/* Animated floating gradient lights */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)] animate-pulse-slow"></div>
  </div>

  {/* 🌿 Foreground Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative pb-10 z-10 flex flex-col items-center justify-center text-center text-white px-6"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
      What We Do
    </h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="max-w-3xl mx-auto mt-5 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
    >
      GRAVIS empowers communities through participation, planning, and partnerships — 
      building a resilient and self-reliant future.
    </motion.p>
  </motion.div>

  {/* Decorative SVG Wave at Bottom */}
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
</div>





      {/* 🌿 INTRO SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          GRAVIS empowers communities by ensuring active participation in decision-making and project planning. Recognizing the interconnectedness of rural challenges, we adopt a holistic approach—tackling multiple issues simultaneously to foster overall improvement. Through partnerships with CBOs, we enhance the living standards of villagers.
        </p>
      </section>

      {/* 🪴 MAIN CONTENT SECTIONS */}
      {sections.map((sec, index) => (
        <motion.section
          key={sec.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 px-6 gap-10 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex items-center gap-4">
              {sec.icon}
              <h2 className="text-3xl font-semibold text-gray-800">{sec.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{sec.content}</p>
          </div>
        </motion.section>
      ))}

      {/* 🌍 FOOTER CALL */}
      <div className="bg-green-50 text-center py-16 px-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Together, we’re shaping resilient, sustainable communities.
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Every drop saved, every girl educated, every farmer empowered—moves us closer to a future of equality, dignity, and self-reliance.
        </p>
      </div>
    </div>
  );
}
