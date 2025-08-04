import React from "react";
import ImageSlider from "./ImageSlider";
import Image from "next/image";

const sampleImages = [
  "/3bhk/1.jpg",
  "/3bhk/2.jpg",
  "/3bhk/3.jpg",
  "/3bhk/4.jpg",
];

const ThreeBHK = () => {
  return (
    <div id="three-bhk-apartments">
      <div className="bg-gradient-to-b from-[#F8F0ED] to-[#FBEFEB] w-full h-full  hidden  lg:flex flex-col gap-5  ">
        <div className="w-full h-[100vh]">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
          />
        </div>
        <div className="flex flex-col text-center gap-5 w-[30vw] p-5 items-center  mx-auto">
          <div className="bg-[#BD314C] h-1 w-[35vw] absolute right-0 mt-6"></div>
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <div className="flex flex-row items-center justify-center text-center gap-5">
              <h1 className="text-5xl  text-[#725054] font-gentium-plus">
                3 BHK
              </h1>
              <h1 className="text-5xl  text-[#725054] font-gentium-plus italic">
                Apartments
              </h1>
            </div>
            <p className="text-lg text-[#725054] font-poppins">
              Gracefully designed for modern families, our 3 BHK residences
              offer a harmonious blend of space, natural light, and everyday
              elegance.
            </p>
            <p className="text-lg text-[#725054] font-poppins">
              Ideal for those who seek comfort without compromise.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#F8F0ED] to-[#FBEFEB] w-full h-full hidden  lg:flex flex-col items-center pb-15">
        <Image
          src="/assets/clouds_left.png"
          alt="clouds"
          width={200}
          height={200}
          className="absolute left-0 opacity-15 mt-60"
        />
        <div className="flex flex-row items-center justify-center gap-5 w-full">
          <Image
            src="/3bhk/unit_1.png"
            alt="3BHK floor plan"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-100 text-sm text-[#725054] font-poppins ">
          <p>TOP VIEW OF 3BHK FLOOR </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-gradient-to-b from-[#F8F0ED] to-[#FBEFEB] w-full h-full pb-10 md:hidden flex-row gap-5  ">
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-[#BD314C] h-1 w-[30vw] absolute mt-0 left-0"></div>
            <h1 className="text-4xl  text-[#725054] font-gentium-plus">
              3 BHK
            </h1>
            <h1 className="text-4xl  text-[#725054] font-gentium-plus italic">
              Apartments
            </h1>
          </div>
        </div>

        <div className="w-full h-80 mt-5">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
          />
        </div>
        <div className="flex flex-col bg-[#725054] w-full h-full items-center justify-center p-5 gap-5 py-12">
          <h2 className="text-2xl text-[#EFE7E5] font-poppins">OVERVIEW</h2>
          <p className="text-sm text-[#EFE7E5] font-poppins text-center">
            Gracefully designed for modern families, our 3 BHK residences offer
            a harmonious blend of space, natural light, and everyday elegance.
            Ideal for those who seek comfort without compromise.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#F8F0ED] to-[#FBEFEB] w-full h-full flex flex-col items-center mt-5 mb-2">
          <div className="bg-[#BD314C] h-1 w-[28vw] absolute mt-6 right-0"></div>
          <h1 className="text-4xl  text-[#725054] font-gentium-plus flex flex-row items-center justify-center gap-0.5 ">
            Unit
            <span className="text-4xl  text-[#725054] font-gentium-plus italic ml-2">
              Plan
            </span>
          </h1>
          <div className="w-full h-80 mt-3">
            <Image
              src="/3bhk/unit_1.png"
              alt="3BHK floor plan"
              width={600}
              height={600}
            />
            <div className=" text-center justify-between text-sm text-[#725054] font-poppins  mt-2">
              <p>TOP VIEW OF 3BHK FLOOR </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBHK;
