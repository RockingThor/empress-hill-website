"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const navigationItems = [
  "Overview",
  "Configuration",
  "4 BHK Duplexes",
  "3 BHK Apartments",
  "Site plan",
  "Connectivity",
  "Contact us",
  "Download Brochure",
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center bg-gradient-to-b from-[#FFFFFF] from-18% to-[#F7E9E4] to-100% p-4 ">
        <Image
          src="/logos/Layer_1.svg"
          alt="logo"
          width={300}
          height={300}
          className="px-10 "
        />
        <div className="flex items-center gap-4 ">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[#725054] font-semibold text-[16px] font-poppins"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <nav className="flex  items-center bg-gradient-to-b from-[#FFFFFF] from-18% to-[#F7E9E4] to-100% p-4 lg:hidden ">
        <Image
          src="/logos/Layer_1.svg"
          alt="logo"
          width={250}
          height={250}
          className="mx-auto mt-[-15px] "
        />
        <Menu
          className="w-7 h-7 text-[#725054] cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div
            className={`absolute top-15 right-0 w-[60%] max-w-[300px] h-full bg-[#F7E9E4] transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col items-center h-full gap-3 pt-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#725054] font-semibold text-[16px] font-poppins hover:text-[#BD314C] active:text-[#BD314C] transition-colors duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
