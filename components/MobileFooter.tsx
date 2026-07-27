import { PhoneCallIcon } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import CompanyFooterSection from './legal/CompanyFooterSection';

const MobileFooter = () => {
    return (
        <div className="md:hidden">
            <div className="flex flex-row bg-white w-full h-20 items-center justify-center rounded-t-xl">
                <a href="https://wa.link/0raryc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 w-full cursor-pointer">
                    <p>GET DETAILS ON</p>
                    <p className="flex flex-row items-center justify-center gap-1">
                        <FaWhatsapp className="h-5 w-5" /> WHATSAPP
                    </p>
                </a>
                <div className="w-[2px] h-15 bg-black"></div>
                <a href="tel:9284911859" className="flex flex-row items-center justify-center gap-1 w-full cursor-pointer">
                    <PhoneCallIcon className="h-5 w-5" />
                    <p>CALL NOW</p>
                </a>
            </div>
        </div>
    );
};

export default MobileFooter;
