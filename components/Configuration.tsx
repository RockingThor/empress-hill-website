"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const Configuration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-gradient-to-b from-[#F2E8E5] to-[#F8F0ED] w-full h-full pb-10 hidden lg:block">
        <Image
          src="/assets/clouds_right.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute right-0 opacity-15 mt-50"
        />

        <div className="bg-[#BD314C] h-1 w-[35vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl text-[#725054] font-gentium-plus mb-10 mt-10">
            Configuration
          </h1>

          {/* Desktop Table Header */}
          <div className="grid grid-cols-4 gap-8 w-full max-w-4xl px-8 text-lg text-[#725054] font-poppins">
            <div className="text-center my-auto">
              <div className="font-bold">UNIT</div>
            </div>
            <div className="text-center">
              <div className="font-bold">SBA</div>
              <div className="text-sm">Super build up area</div>
            </div>
            <div className="text-center">
              <div className="font-bold">BA</div>
              <div className="text-sm">Build up area</div>
            </div>
            <div className="text-center">
              <div className="font-bold">CA</div>
              <div className="text-sm">Carpet area</div>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-[60vw] bg-[#6C5628] mx-auto mt-4"></div>

        {/* Desktop Table Data */}
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <div className="grid grid-cols-4 gap-8 w-full max-w-4xl px-8 text-lg text-[#725054] font-poppins">
            <div className="text-center">
              <div>3 BHK</div>
              <div>Apartments</div>
            </div>
            <div className="text-center">
              <div>260 m²</div>
              <div>2797.6 sq ft</div>
            </div>
            <div className="text-center">
              <div>180 m²</div>
              <div>1936.8 sq ft</div>
            </div>
            <div className="text-center">
              <div>166 m²</div>
              <div>1786.16 sq ft</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 w-full max-w-4xl px-8 text-lg text-[#725054] font-poppins">
            <div className="text-center">
              <div>4 BHK</div>
              <div>Duplexes</div>
            </div>
            <div className="text-center">
              <div>366 m²</div>
              <div>3938.16 sq ft</div>
            </div>
            <div className="text-center">
              <div>277 m²</div>
              <div>2980.5 sq ft</div>
            </div>
            <div className="text-center">
              <div>253 m²</div>
              <div>2722.28 sq ft</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-15">
          <button
            onClick={openModal}
            className="bg-[#FFFFFF] text-[#BD314C] px-5 py-3 rounded-md font-bold cursor-pointer shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            E-BROCHURE
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="bg-gradient-to-b from-[#F2E8E5] to-[#F8F0ED] w-full h-full pb-10 md:hidden">
        <Image
          src="/assets/clouds_right.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute right-0 opacity-15 mt-60"
        />

        <div className="bg-[#BD314C] h-1 w-[18vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl text-[#725054] font-gentium-plus mb-10 mt-10">
            Configuration
          </h1>

          {/* Mobile Table Header */}
          <div className="grid grid-cols-4 gap-2 w-full px-4 text-sm text-[#725054] font-poppins">
            <div className="text-center">
              <div className="font-bold text-xs">UNIT</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xs">SBA</div>
              <div className="text-xs">Super build up area</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xs">BA</div>
              <div className="text-xs">Build up area</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xs">CA</div>
              <div className="text-xs">Carpet area</div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-[90vw] bg-[#6C5628] mx-auto mt-2"></div>

        {/* Mobile Table Data */}
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <div className="grid grid-cols-4 gap-2 w-full px-4 text-xs text-[#725054] font-poppins">
            <div className="text-center">
              <div>3 BHK</div>
              <div>Apartments</div>
            </div>
            <div className="text-center">
              <div>260 m²</div>
              <div>2797.6 sq ft</div>
            </div>
            <div className="text-center">
              <div>180 m²</div>
              <div>1936.8 sq ft</div>
            </div>
            <div className="text-center">
              <div>166 m²</div>
              <div>1786.16 sq ft</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 w-full px-4 text-xs text-[#725054] font-poppins">
            <div className="text-center">
              <div>4 BHK</div>
              <div>Duplexes</div>
            </div>
            <div className="text-center">
              <div>366 m²</div>
              <div>3938.16 sq ft</div>
            </div>
            <div className="text-center">
              <div>277 m²</div>
              <div>2980.5 sq ft</div>
            </div>
            <div className="text-center">
              <div>253 m²</div>
              <div>2722.28 sq ft</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-15">
          <button
            onClick={openModal}
            className="bg-[#FFFFFF] text-[#BD314C] px-5 py-3 rounded-md font-bold cursor-pointer shadow-lg hover:bg-gray-100 transition-colors duration-200 z-50"
          >
            E-BROCHURE
          </button>
        </div>
      </div>

      {/* Contact Us Modal */}
      <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Configuration;
