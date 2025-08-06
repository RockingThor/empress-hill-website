import React from "react";
import Image from "next/image";

const OnlyImage = () => {
  return (
    <div className="w-full h-full hidden md:block ">
      <Image
        src="/Rectangle.png"
        alt="3bhk"
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default OnlyImage;
