import { PhoneCallIcon } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="flex flex-row md:hidden bg-white w-full h-20 items-center justify-center rounded-t-xl">
      <button className="flex flex-col items-center justify-center gap-1 w-full cursor-pointer">
        <p>GET DETAILS ON</p>
        <p className="flex flex-row items-center justify-center gap-1">
          <FaWhatsapp className="" /> WHATSAPP
        </p>
      </button>
      <div className="w-[2px] h-15 bg-black"></div>
      <button className="flex flex-row items-center justify-center gap-1 w-full cursor-pointer">
        <PhoneCallIcon className="text-xl" />
        <p>CALL NOW</p>
      </button>
    </div>
  );
};

export default MobileFooter;
