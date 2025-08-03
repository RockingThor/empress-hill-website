"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const navigationItems = [
  { name: "Overview", href: "#overview" },
  { name: "Configuration", href: "#configuration" },
  { name: "4 BHK Duplexes", href: "#four-bhk-duplexes" },
  { name: "3 BHK Apartments", href: "#three-bhk-apartments" },
  { name: "Site Plan", href: "#site-plan" },
  { name: "Connectivity", href: "#connectivity" },
  { name: "Contact Us", href: "#contact-us" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (href: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center bg-gradient-to-b from-[#FFFFFF] from-18% to-[#F7E9E4] to-100% p-4 sticky top-0 z-50">
        <Image
          src="/logos/Layer_1.svg"
          alt="logo"
          width={300}
          height={300}
          className="px-10 cursor-pointer"
          onClick={() => scrollToSection("#overview")}
        />
        <div className="flex items-center gap-4">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="text-[#725054] font-semibold text-[16px] font-poppins hover:text-[#BD314C] transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <nav className="flex items-center bg-gradient-to-b from-[#FFFFFF] from-18% to-[#F7E9E4] to-100% p-4 lg:hidden sticky top-0 z-100">
        <Image
          src="/logos/Layer_1.svg"
          alt="logo"
          width={250}
          height={250}
          className="mx-auto mt-[-15px] cursor-pointer"
          onClick={() => scrollToSection("#overview")}
        />
        <Menu
          className="w-7 h-7 text-[#725054] cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <>
            {/* Full screen overlay background */}
            <div
              className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Navigation menu */}
            <div
              className={`fixed top-0 right-0 w-[60%] max-w-[300px] h-full bg-[#F7E9E4] transform transition-all duration-300 ease-in-out z-50 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex flex-col items-center h-full gap-3 pt-20 bg-[#F7E9E4] shadow-lg">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#725054] font-semibold text-[16px] font-poppins hover:text-[#BD314C] active:text-[#BD314C] transition-colors duration-200 ease-in-out transform hover:scale-105 w-full py-3 px-4  rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
