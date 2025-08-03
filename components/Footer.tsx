import React from "react";
import ContactUs from "./ContactUs";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div id="contact-us">
      <div className="bg-gradient-to-br from-[#735054] via-[#735054] to-[#8e6e71] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-10 md:max-h-[70vh]">
        <div className="w-full md:w-[30vw] order-2 md:order-1">
          <ContactForm />
        </div>
        <div className="w-full md:w-[30vw] order-1 md:order-2">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Footer;
