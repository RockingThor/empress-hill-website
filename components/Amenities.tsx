import Image from "next/image";
import React from "react";

const Amenities = () => {
  return (
    <div id="amenities">
      <div className="bg-gradient-to-b from-[#FBEFEB] to-white w-full h-full pt-5 hidden md:block ">
        <div className="bg-[#BD314C] h-1 w-[40vw] absolute mt-16"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-5 mt-10">
            Amenities
          </h1>
          <div className="flex flex-col items-center justify-center gap-10 py-15">
            <Image
              src="/amenities/desktop_1.svg"
              alt="Amenities"
              width={1000}
              height={1000}
              className="w-full h-full object-cover scale-80"
            />
            <Image
              src="/amenities/desktop_2.svg"
              alt="Amenities"
              width={1000}
              height={1000}
              className="w-full h-full object-cover scale-80"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FBEFEB] to-white w-full h-full  md:hidden mt-[-10vh]">
        <div className="bg-[#BD314C] h-1 w-[20vw] absolute mt-15.5"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl  text-[#725054] font-gentium-plus mb-5 mt-10">
            Amenities
          </h1>
          <Image
            src="/Rectangle_mobile.png"
            alt="3bhk"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="flex flex-row items-center justify-center gap-10 py-10  overflow-x-hidden">
            <Image
              src="/amenities/mobile_1.svg"
              alt="First column of amenities"
              width={100}
              height={100}
            />
            <Image
              src="/amenities/mobile_2.svg"
              alt="Second column of amenities"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
