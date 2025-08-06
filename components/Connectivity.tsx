import React from "react";
import Map from "./Map";
import Faq from "./Faq";

const Connectivity = () => {
  return (
    <div id="connectivity">
      {/* Desktop View */}
      <div className="bg-gradient-to-b from-[#FDF6F3] to-white w-full min-h-screen pt-16 hidden md:block">
        {/* Red line above title */}
        <div className="bg-[#BD314C] h-1 w-[40vw] absolute mt-7 left-0"></div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-5xl text-[#725054] font-gentium-plus">
            Connectivity
          </h1>
        </div>

        {/* Main content container */}
        <div className="flex flex-row items-start justify-center gap-20 px-20 max-w-6xl mx-auto">
          {/* Left side - Map */}
          <div className="flex-1 max-w-2xl">
            <Map />
          </div>

          {/* Right side - Connectivity information */}
          <div className="flex-1 max-w-md self-center">
            <Faq />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-gradient-to-b from-[#FDF6F3] to-white w-full min-h-screen pt-8 md:hidden">
        {/* Red line above title */}
        <div className="bg-[#BD314C] h-1 w-[25vw] absolute mt-5 left-0"></div>

        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-3xl text-[#725054] font-gentium-plus">
            Connectivity
          </h1>
        </div>

        {/* Main content container - Vertical stack on mobile */}
        <div className="flex flex-col items-center justify-center gap-8 px-6">
          {/* Map - Full width on mobile */}
          <div className="w-full max-w-md">
            <Map />
          </div>

          {/* Connectivity information - Full width on mobile */}
          <div className="w-full max-w-md">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectivity;
