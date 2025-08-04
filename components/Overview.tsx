import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div id="overview">
      <div className="bg-gradient-to-b from-[#F8F0ED] to-[#F2E8E5] w-full h-full pb-10 hidden lg:block">
        <Image
          src="/assets/clud_new.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute right-0 opacity-15 mt-[-60px]"
        />
        <Image
          src="/assets/clouds_left.png"
          alt="clouds"
          width={300}
          height={300}
          className="absolute left-0 opacity-15 mt-30"
        />
        <div className="bg-[#BD314C] h-1 w-[40vw] absolute mt-16"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Overview
          </h1>
          <p className="text-lg text-[#725054] font-poppins max-w-[70vw] text-center mb-10">
            Tucked away in the peaceful landscapes of Goa, Empress Hill offers
            an exclusive collection of 3 BHK apartments and duplexes designed
            for those who value grace, privacy, and timeless elegance.
          </p>
          <p className="text-lg text-[#725054] font-poppins max-w-[70vw] text-center">
            With just 24 residences spread across 9 floors, this boutique
            address brings you the comfort of thoughtful living and the charm of
            serene luxury, a place where life flows beautifully, like royalty.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#E9DEDC] to-[#F2E8E5] w-full h-full pb-10 md:hidden">
        <Image
          src="/assets/clouds_right.png"
          alt="clouds"
          width={200}
          height={200}
          className="absolute right-0 opacity-15 mt-[-40px]"
        />
        <Image
          src="/assets/clouds_left.png"
          alt="clouds"
          width={200}
          height={200}
          className="absolute left-0 opacity-15 mt-70"
        />
        <div className="bg-[#BD314C] h-1 w-[25vw] absolute mt-15.5"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Overview
          </h1>
          <p className="text- text-[#725054] font-poppins max-w-[70vw] text-center mb-10">
            Tucked away in the peaceful landscapes of Goa, Empress Hill offers
            an exclusive collection of 3 BHK apartments and duplexes designed
            for those who value grace, privacy, and timeless elegance.
          </p>
          <p className="text-lg text-[#725054] font-poppins max-w-[70vw] text-center">
            With just 24 residences spread across 9 floors, this boutique
            address brings you the comfort of thoughtful living and the charm of
            serene luxury, a place where life flows beautifully, like royalty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
