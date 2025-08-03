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
      <div className="bg-gradient-to-b from-[#FBEFEB] to-[#FDF6F3] w-full h-full pb-10 hidden  lg:flex flex-row gap-5 pt-20 ">
        <div className="bg-[#BD314C] h-1 w-[7vw] absolute mt-17 left-0"></div>
        <div className="flex flex-col  text-center gap-5 w-[30vw] p-5">
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl  text-[#725054] font-gentium-plus">
                3 BHK
              </h1>
              <h1 className="text-5xl  text-[#725054] font-gentium-plus italic">
                Apartments
              </h1>
            </div>
            <p className="text-sm text-[#725054] font-poppins px-15">
              Our 4 BHK duplexes redefine luxury with expansive layouts spread
              across two levels.
            </p>
            <p className="text-sm text-[#725054] font-poppins px-15">
              These homes bring villa-like privacy with the convenience of
              apartment living; perfect for those who desire more.
            </p>
          </div>
        </div>
        <div className="w-[70vw] h-96">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FDF6F3] to-white w-full h-full hidden  lg:flex flex-col items-center pb-20">
        <div className="flex flex-row items-center justify-center gap-5 w-full">
          <div className="flex flex-col items-center justify-center gap-3 w-[40vw]">
            <Image
              src="/3bhk/unit_1.png"
              alt="4BHK floor plan"
              width={600}
              height={600}
            />
            <div className="flex flex-row items-center justify-between gap-100 text-sm text-[#725054] font-poppins ">
              <p>TOP VIEW OF ATTIC FLOOR </p>
            </div>
          </div>
          <div className="bg-[#BD314C] h-1 w-[20vw] absolute mt-4 right-0"></div>
          <div className="flex flex-col text-center gap-5 w-[40vw]">
            <div className="flex flex-row  justify-center text-center gap-2  ">
              <h1 className="text-5xl  text-[#725054] font-gentium-plus">
                Unit
              </h1>
              <h1 className="text-5xl  text-[#725054] font-gentium-plus italic">
                Plan
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-gradient-to-b from-[#FBEFEB] to-[#FDF6F3] w-full h-full  md:hidden flex-row gap-5  ">
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
        <div className="bg-gradient-to-b from-[#FBEFEB] to-[#FDF6F3] w-full h-full flex flex-col items-center mt-5">
          <div className="bg-[#BD314C] h-1 w-[28vw] absolute mt-6 right-0"></div>
          <h1 className="text-4xl  text-[#725054] font-gentium-plus flex flex-row items-center justify-center gap-0.5 ">
            Unit
            <h1 className="text-4xl  text-[#725054] font-gentium-plus italic ml-2">
              Plan
            </h1>
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
