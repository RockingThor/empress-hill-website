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
      <div className="bg-[#E9DEDC] w-full h-full pb-10 hidden  lg:block ">
        <Image
          src="/assets/clouds_right.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute right-0 opacity-15 mt-50"
        />

        <div className="bg-[#BD314C] h-1 w-[35vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Configuration
          </h1>
          <div className="flex flex-row items-center justify-center gap-15 text-lg text-[#725054] font-poppins">
            <div className="font-bold">UNIT</div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold">SBA</div>
              <div>Super build up area</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold">BA</div>
              <div>Build up area</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold">CA</div>
              <div>Carpet area</div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-[45vw] bg-[#6C5628] mx-auto mt-4"></div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <div className="flex flex-row items-center justify-center gap-15 text-lg text-[#725054] font-poppins">
            <div className="flex flex-col items-center justify-center">
              <div>3 BHK</div>
              <div>Apartments</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>260 m2</div>
              <div>2797.6 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>180 m2</div>
              <div>1936.8 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>166 m2</div>
              <div>1786.16 sq ft</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-15 text-lg text-[#725054] font-poppins">
            <div className="flex flex-col items-center justify-center">
              <div>4 BHK</div>
              <div>Duplexes</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>366 m2</div>
              <div>3938.16 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>277 m2</div>
              <div>2980.5 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>253 m2</div>
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
      <div className="bg-[#E9DEDC] w-full h-full pb-10  md:hidden ">
        <Image
          src="/assets/clouds_right.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute right-0 opacity-15 mt-60"
        />

        <div className="bg-[#BD314C] h-1 w-[18vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Configuration
          </h1>
          <div className="flex flex-row items-center justify-center gap-5 text-sm text-[#725054] font-poppins p-2">
            <div className="font-bold">UNIT</div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold text-sm">SBA</div>
              <div className="text-xs text-center">Super build up area</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold text-sm">BA</div>
              <div className="text-xs text-center">Build up area</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold text-sm">CA</div>
              <div className="text-xs text-center">Carpet area</div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[90vw] bg-[#6C5628] mx-auto mt-2"></div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 p-2">
          <div className="flex flex-row items-center justify-center gap-4 text-xs text-[#725054] font-poppins">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">3 BHK</div>
              <div className="text-xs">Apartments</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">260 m2</div>
              <div className="text-xs">2797.6 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">180 m2</div>
              <div className="text-xs">1936.8 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">166 m2</div>
              <div className="text-xs">1786.16 sq ft</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-xs text-[#725054] font-poppins">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">4 BHK</div>
              <div className="text-xs">Duplexes</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">366 m2</div>
              <div className="text-xs">3938.16 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">277 m2</div>
              <div className="text-xs">2980.5 sq ft</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs">253 m2</div>
              <div className="text-xs">2722.28 sq ft</div>
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
