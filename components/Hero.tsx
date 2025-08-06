import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";

const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];
const images_mobile = [
  "/hero_mobile/1.jpg",
  "/hero_mobile/2.jpg",
  "/hero_mobile/3.jpg",
];

const Hero = () => {
  return (
    <>
      <div className="w-full h-[100vh] hidden lg:flex">
        <ImageSlider
          images={images}
          autoPlayInterval={5000}
          showArrows={false}
          showDots={false}
        />
      </div>
      <div className="w-full h-80 flex lg:hidden">
        <ImageSlider
          images={images_mobile}
          autoPlayInterval={5000}
          showArrows={false}
          showDots={false}
        />
      </div>
    </>
  );
};

export default Hero;
