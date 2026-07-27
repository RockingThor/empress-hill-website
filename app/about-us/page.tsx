import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileFooter from '@/components/MobileFooter';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata = {
    title: 'About Us | Empress Hill',
    description: 'Learn more about Empress Hill, its vision, projects, and commitment to premium living in Goa.',
};

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-[#fcf8f8]">
            <Nav />
            <LegalPageLayout
                title="About Us"
                intro="Empress Hill is a premium residential project envisioned to offer timeless living, architectural elegance, and a serene environment in one of Goa’s most promising locations."
                lastUpdated="25 July 2026"
                sections={[
                    {
                        heading: 'Our Vision',
                        body: (
                            <>
                                <p>
                                    Empress Hill was created with the vision of redefining modern living by blending luxury, comfort, and natural tranquillity. Every detail of the development reflects
                                    a commitment to thoughtful design and refined lifestyle experiences.
                                </p>
                                <p>
                                    The project brings together contemporary architecture, premium amenities, and carefully planned spaces to create a property that feels both prestigious and
                                    welcoming.
                                </p>
                            </>
                        ),
                    },
                    {
                        heading: 'Why Empress Hill',
                        body: (
                            <>
                                <p>
                                    Located in Goa, Empress Hill offers residents a balanced lifestyle with easy access to everyday essentials, key destinations, and surrounding landmarks. The
                                    development is designed for families, professionals, and investors seeking a property that combines elegance with convenience.
                                </p>
                                <p>From well-planned residences to strong connectivity and a calm ambience, the project is built around comfort and long-term value.</p>
                            </>
                        ),
                    },
                    {
                        heading: 'Our Commitment',
                        body: (
                            <>
                                <p>
                                    We are committed to delivering a residential experience rooted in quality, transparency, and customer care. Our team focuses on helping buyers and visitors discover
                                    the project with clarity and confidence through detailed information, responsive support, and a seamless enquiry experience.
                                </p>
                            </>
                        ),
                    },
                    {
                        heading: 'Contact Us',
                        body: (
                            <>
                                <p>For consultations, enquiries, or site visits, please reach out to us at info@empresshill.in or call us at 9284911859.</p>
                            </>
                        ),
                    },
                ]}
            />
            <Footer />
            <MobileFooter />
        </div>
    );
};

export default AboutUsPage;
