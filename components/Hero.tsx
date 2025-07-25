import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        src="/assets/Hero_Section_Desktop.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-full"
      />
    </div>
  );
};

export default Hero;
