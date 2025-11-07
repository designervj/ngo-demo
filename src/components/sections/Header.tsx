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
  Linkedin,
} from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) setOpenDropdown(null);
      return next;
    });
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
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Logo + tagline (mobile) */}
          <div className="flex flex-col">
            <span className="text-[#6BA642] font-extrabold text-3xl md:text-4xl tracking-tight leading-none">
              SABL
            </span>
            {/* Tagline on mobile */}
            <p className="md:hidden mt-1 text-[13px] leading-snug text-[#6c4c35] font-medium">
              Strengthening Agriculture-based Livelihoods (SABL) in the Thar
              Desert
            </p>
          </div>

          {/* CENTER: Tagline + Nav (desktop only) */}
          <div className="hidden md:flex flex-col items-center">
            <p className="italic text-[#6c4c35] text-[15px] font-semibold mb-2 text-center">
              Strengthening Agriculture-based Livelihoods (SABL) in the Thar
              Desert
            </p>

            <nav className="flex items-center gap-6 text-[15px] font-medium text-gray-800 relative">
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

              <a href="#" className="hover:text-[#6BA642] transition  ">
                Photo Gallery
              </a>
              <a href="#" className="hover:text-[#6BA642] transition">
                Get Involved
              </a>
            </nav>
          </div>

          {/* RIGHT: Socials (desktop) + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Desktop socials */}
            <div className="hidden md:flex items-center gap-1 text-[#6BA642]">
              <a
                href="#"
                className="hover:bg-white p-2 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="hover:bg-white p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="hover:bg-white p-2 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center border border-gray-300 rounded-md p-2 bg-white/70"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 px-4 py-3 text-[15px] font-medium text-gray-800 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="space-y-3">
          <a href="#" className="block py-1 hover:text-[#6BA642]">
            Home
          </a>

          {menuItems.map((menu) => (
            <div
              key={menu.name}
              className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0"
            >
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center justify-between w-full hover:text-[#6BA642]"
              >
                <span>{menu.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === menu.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === menu.name && (
                <div className="pl-3 mt-2 space-y-1 text-[14px] text-gray-700">
                  {menu.sub.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block py-1 hover:text-[#6BA642]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className=" pt-1">
            <a href="#" className="block py-3 border-t border-gray-100 hover:text-[#6BA642]">
              Photo Gallery 
            </a>
            <a href="#" className="block py-1 pt-3 hover:text-[#6BA642] border-t border-gray-100">
              Get Involved
            </a>
          </div>
        </nav>

        {/* Socials for Mobile */}
        <div className="flex items-center gap-4 mt-2 pt-3 border-t border-gray-100 text-[#6BA642]">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
