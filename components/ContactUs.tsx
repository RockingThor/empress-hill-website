import { PhoneCallIcon } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10 py-6 md:h-[50vh]">
            {/* Mobile-only title and subtitle */}
            <div className="text-white flex flex-col items-center justify-center gap-2 md:hidden ">
                <h1 className="text-[16px] font-semibold font-poppins ">CONTACT US</h1>
                <p className="font-poppins text-center text-[12px] px-15">Please enter the details below to get in touch with us!</p>
            </div>

            {/* Desktop-only title and subtitle */}
            <div className="text-white hidden md:flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-poppins font-bold">Contact Us</h1>
                <div className="flex flex-col border-[0.1px] border-white rounded-md p-2 w-full font-poppins text-sm">
                    <p className="text-center font-semibold">Office Address:</p>
                    <p className="text-center">Nagarcem Palolem Street, House No. 135/11-A Shed, Sobit Sarovar Portico, <br/> Palolem Street, Nagarsai, Canacona, South Goa, Goa</p>
                </div>
                <div className="flex flex-col border-[0.1px] border-white rounded-md p-2 w-full font-poppins text-sm">
                    <p className="text-center font-semibold">Site Address:</p>
                    <p className="text-center">Nagarcem Palolem Street, House No. 135/11-A Shed, Sobit Sarovar Portico, <br/> Palolem Street, Nagarsai, Canacona, South Goa, Goa, 403702</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-col items-center justify-center gap-2 w-full">
                {/* Mobile: Horizontal split layout */}

                {/* Desktop: Vertical layout */}
                <div className="hidden md:flex flex-col items-center justify-center gap-5">
                    <a
                        href="https://wa.link/0raryc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center bg-[#8E6C70] text-white px-10 py-1 rounded-md shadow-xl cursor-pointer"
                    >
                        <p className="text-xl font-poppins">GET DETAILS ON</p>
                        <div className="flex flex-row items-center justify-center gap-1">
                            <FaWhatsapp className="text-xl font-poppins" />
                            WHATSAPP
                        </div>
                    </a>
                    <a href="tel:9284911859" className="flex flex-row items-center justify-center gap-2 bg-[#8E6C70] text-white px-15 py-4 rounded-md shadow-xl cursor-pointer">
                        <PhoneCallIcon className="text-xl" /> CALL NOW
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
