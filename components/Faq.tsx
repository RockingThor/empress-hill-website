"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

interface FaqItem {
  label: string;
  description: string;
}

const faqItems: FaqItem[] = [
  {
    label: "KEY DESTINATIONS",
    description: "Explore our key destinations and their unique offerings.",
  },
  {
    label: "ROAD CONNECTIVITY",
    description: "Learn about the road connectivity options available.",
  },
  {
    label: "AIRPORT CONNECTIVITY",
    description: "Find out about the airport connectivity services we provide.",
  },
];

const Faq: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(2); // Default to show airport connectivity

  return (
    <div className="w-full space-y-3 lg:space-y-4">
      {faqItems.map((item, idx) => (
        <div key={item.label} className="space-y-2 lg:space-y-3">
          <div className="flex items-center">
            <div
              className="flex-1 h-12 lg:h-16 flex items-center justify-center text-white bg-[#725054] text-sm lg:text-base font-semibold tracking-wider lg:tracking-widest rounded-l-[0.5rem] translate-x-[0.6rem] shadow-lg"
              style={{
                clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)",
              }}
            >
              {item.label}
            </div>
            <button
              className="h-12 lg:h-16 w-16 lg:w-20 bg-white rounded-r-[0.5rem] overflow-hidden flex items-center justify-center ml-2 -translate-x-[0.6rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer shadow-lg"
              style={{
                clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              aria-expanded={activeFaq === idx}
              aria-controls={`faq-desc-${idx}`}
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              {activeFaq === idx ? (
                <FiMinus className="text-[#725054] w-5 h-5 lg:w-7 lg:h-7 translate-x-1.5 transition-all duration-300" />
              ) : (
                <FiPlus className="text-[#725054] w-5 h-5 lg:w-7 lg:h-7 translate-x-1.5 transition-all duration-300" />
              )}
            </button>
          </div>
          {/* Animated description */}
          <div
            id={`faq-desc-${idx}`}
            className={`w-[calc(100%-1.2rem)] translate-x-[0.6rem] rounded-lg ring ring-[#c99ea1] bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out
              ${
                activeFaq === idx
                  ? "max-h-32 lg:max-h-40 py-3 lg:py-4 px-3 lg:px-4 opacity-100"
                  : "max-h-0 py-0 px-3 lg:px-4 opacity-0"
              }
            `}
            style={{
              transitionProperty: "max-height, opacity, padding",
            }}
          >
            <p className="text-gray-700 text-xs lg:text-sm font-medium tracking-wide">
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {/* Airport distance info */}
      <div className="w-[calc(100%-1.2rem)] text-[#6b5254] translate-x-[0.6rem] rounded-lg ring ring-[#b0898d] p-3 lg:p-4 bg-white shadow-lg flex items-center justify-start gap-2">
        <MdOutlineLocationOn className="w-5 h-5 lg:w-6 lg:h-6 text-[#6b5254] flex-shrink-0" />
        <span className="tracking-wider font-semibold text-sm lg:text-base">
          Dabolim International Airport - 2.9km
        </span>
      </div>
    </div>
  );
};

export default Faq;
