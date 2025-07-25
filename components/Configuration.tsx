import Image from "next/image";
import React from "react";

const Configuration = () => {
  return (
    <>
      <div className="bg-[#E9DEDC] w-full h-full pb-10  lg:block ">
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
          <button className="bg-[#FFFFFF] text-[#BD314C] px-5 py-3 rounded-md font-bold cursor-pointer shadow-lg">
            E-BROCHURE
          </button>
        </div>
      </div>
    </>
  );
};

export default Configuration;
