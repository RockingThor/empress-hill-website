import Image from "next/image";
import React from "react";

const SitePlan = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#E9DEDC] to-[#F2E8E5] w-full h-full pb-10 hidden lg:block ">
        <div className="bg-[#BD314C] h-1 w-[40vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Site Plan
          </h1>
        </div>
        <Image
          src="/site_plan.png"
          alt="site plan"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gradient-to-b from-[#E9DEDC] to-[#F2E8E5] w-full h-full pb-10 md:hidden">
        <div className="bg-[#BD314C] h-1 w-[18vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Site Plan
          </h1>
        </div>
        <Image
          src="/site_plan.png"
          alt="site plan"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default SitePlan;
