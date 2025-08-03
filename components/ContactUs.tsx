import { PhoneCallIcon } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-10 py-6 md:h-[50vh]">
      {/* Mobile-only title and subtitle */}
      <div className="text-white flex flex-col items-center justify-center gap-2 md:hidden">
        <h1 className="text-3xl font-poppins font-bold">CONTACT US</h1>
        <p className="text-lsm font-poppins text-center">
          Please enter the details below to get in touch with us!
        </p>
      </div>

      {/* Desktop-only title and subtitle */}
      <div className="text-white flex flex-col items-center justify-center gap-2 hidden md:flex">
        <h1 className="text-3xl font-poppins font-bold">Contact Us</h1>
        <p className="text-lsm font-poppins">
          Please enter the details below to get in touch with us.
        </p>
      </div>

      <div className="flex flex-col md:flex-col items-center justify-center gap-2 w-full">
        {/* Mobile: Horizontal split layout */}
        <div className="flex flex-row md:hidden w-full gap-2">
          <button className="flex-1 flex flex-col items-center justify-center bg-[#8E6C70] text-white px-4 py-3 rounded-md shadow-xl">
            <p className="text-xs font-poppins">GET DETAILS ON</p>
            <div className="flex flex-row items-center justify-center gap-1">
              <FaWhatsapp className="text-sm" />{" "}
              <span className="text-sm">WHATSAPP</span>
            </div>
          </button>
          <button className="flex-1 flex flex-row items-center justify-center gap-2 bg-[#8E6C70] text-white px-4 py-3 rounded-md shadow-xl">
            <PhoneCallIcon className="text-xl" />{" "}
            <span className="text-sm">CALL NOW</span>
          </button>
        </div>

        {/* Desktop: Vertical layout */}
        <div className="hidden md:flex flex-col items-center justify-center gap-2">
          <button className="flex flex-col items-center justify-center bg-[#8E6C70] text-white px-10 py-1 rounded-md shadow-xl">
            <p className="text-sm font-poppins">GET DETAILS ON</p>
            <div className="flex flex-row items-center justify-center gap-2">
              <FaWhatsapp className="text-sm" /> WHATSAPP
            </div>
          </button>
          <button className="flex flex-row items-center justify-center gap-2 bg-[#8E6C70] text-white px-10 py-2 rounded-md shadow-xl">
            <PhoneCallIcon className="text-2xl" /> CALL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
