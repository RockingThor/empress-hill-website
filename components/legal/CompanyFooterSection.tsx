import Link from 'next/link';
import React from 'react';

export const businessInfo = {
    companyName: 'Empress Hill by SUNNYVALE RESORT HOLDINGS LLP',
    address: `Nagarcem Palolem Street, House No. 135/11-A Shed, Sobit Sarovar Portico, <br/> Palolem Street, Nagarsai, Canacona, South Goa, Goa, 403702`,
    contactNumber: '+91 9284911859',
    email: 'info@empresshill.in',
};

const legalLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

interface CompanyFooterSectionProps {
    compact?: boolean;
}

const currentYear = new Date().getFullYear();
const addressLines = businessInfo.address.split(/<br\s*\/?>/);

const CompanyFooterSection: React.FC<CompanyFooterSectionProps> = ({ compact = false }) => {
    return (
        <div className={`w-full border-t border-[#e8d3d6] bg-[#f8eeee] ${compact ? 'px-4 py-4' : 'px-4 py-6 md:px-10 md:py-8'}`}>
            <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-1 text-sm text-[#5f4448]">
                    <p className="text-base font-semibold text-[#725054]">{businessInfo.companyName}</p>

                    <p>
                        {addressLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < addressLines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                    <p>{businessInfo.contactNumber}</p>
                    {/* <p>{businessInfo.email}</p> */}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#8E6C70]">
                    {legalLinks.map(link => (
                        <Link key={link.href} href={link.href} className="transition-colors hover:text-[#725054]">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mx-auto mt-4 max-w-7xl border-t border-[#e8d3d6] pt-4 text-xs sm:text-sm text-[#7a5e63]">
                <p>
                    © {currentYear} {businessInfo.companyName}. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default CompanyFooterSection;
