"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    {
      name: "About GRAVIS",
      sub: [
        "Overview",
        "History",
        "Mission & Vision",
        "Guiding Principles",
        "What We Do",
      ],
    },
    {
      name: "SABL Project",
      sub: [
        "Project Overview",
        "Objectives",
        "Approach",
        "Activities",
        "Capacity Building",
        "Rainwater Harvesting & Dryland Farming",
        "Horticulture",
        "Animal Husbandry",
        "Enterprise Development",
      ],
    },
    {
      name: "Resources",
      sub: [
        "Publications (Learning Documents)",
        "Advocacy Briefs",
        "Case Studies",
        "Annual Reports",
        "IEC Materials",
        "Media",
      ],
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f8f7f2] border-b border-gray-200 shadow-sm">
      {/* ===== TOP SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#6BA642] font-extrabold text-4xl tracking-tight">
            SABL
          </span>
        </div>
        

        {/* CENTER: Tagline + Nav */}
        <div className="flex flex-col items-center text-center">
          <p className="italic text-[#6c4c35] text-[15px] font-semibold mb-2">
            Strengthening Agriculture-based Livelihoods (SABL) in the Thar Desert
          </p>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-800 relative">
            <a href="#" className="hover:text-[#6BA642] transition">
              Home
            </a>

            {menuItems.map((menu) => (
              <div
                key={menu.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(menu.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-[#6BA642]">
                  {menu.name} <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown - instant open */}
                <div
                  className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-64 z-50 transition-all duration-150 ease-in-out origin-top ${
                    openDropdown === menu.name
                      ? "opacity-100 scale-y-100 visible"
                      : "opacity-0 scale-y-95 invisible"
                  }`}
                >
                  {menu.sub.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a href="#" className="hover:text-[#6BA642] transition">
              Photo Gallery
            </a>
            <a href="#" className="hover:text-[#6BA642] transition">
              Get Involved
            </a>
          </nav>
        </div>

        {/* RIGHT: Socials */}
        <div className="hidden md:flex items-center gap-3 text-[#6BA642]">
          <a href="#" className="hover:text-[#3b5998]">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#00acee]">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#C13584]">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#FF0000]">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden border border-gray-300 rounded-md p-2"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-[15px] font-medium text-gray-800 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#" className="block hover:text-[#6BA642]">
          Home
        </a>

        {menuItems.map((menu) => (
          <div key={menu.name}>
            <button
              onClick={() => toggleDropdown(menu.name)}
              className="flex items-center justify-between w-full hover:text-[#6BA642]"
            >
              {menu.name} <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === menu.name && (
              <div className="pl-4 mt-2 space-y-2">
                {menu.sub.map((sub) => (
                  <a key={sub} href="#" className="block hover:text-[#6BA642]">
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <a href="#" className="block hover:text-[#6BA642]">
          Photo Gallery
        </a>
        <a href="#" className="block hover:text-[#6BA642]">
          Get Involved
        </a>

        {/* Socials for Mobile */}
        <div className="flex items-center gap-3 mt-4 text-[#6BA642]">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
