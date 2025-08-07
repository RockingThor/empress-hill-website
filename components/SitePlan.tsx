import Image from "next/image";
import React from "react";

const SitePlan = () => {
  return (
    <div id="site-plan">
      <div className="bg-gradient-to-b from-white to-[#E9DEDC] w-full h-full pb-10 hidden md:block overflow-hidden">
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
          className="w-full h-full object-fill scale-120 mt-[3vh] overflow-hidden"
        />
      </div>
      <div className="bg-gradient-to-b from-white to-[#E9DEDC] w-full h-full pb-10 md:hidden overflow-hidden">
        <div className="bg-[#BD314C] h-1 w-[25vw] absolute mt-16 right-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl  text-[#725054] font-gentium-plus mb-10 mt-10">
            Site Plan
          </h1>
        </div>
        <Image
          src="/site_plan.png"
          alt="site plan"
          width={2000}
          height={2000}
          className="w-full h-full object-fill scale-190 mt-[3vh] overflow-hidden"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-[#725054] font-poppins text-center mt-[10vh] px-10 text-[13px] mb-10">
            Thoughtfully planned spaces designed to offer privacy, openness,
            balance, and an effortless flow of living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitePlan;
