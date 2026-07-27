import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileFooter from '@/components/MobileFooter';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata = {
    title: 'Terms & Conditions | Empress Hill',
    description: 'Terms and conditions for Empress Hill website visitors and enquiry submissions.',
};

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen bg-[#fcf8f8]">
            <Nav />
            <LegalPageLayout
                title="Terms & Conditions"
                intro="These Terms & Conditions govern your use of the Empress Hill website and any property enquiry or site visit request submitted through the platform. By browsing our website, you agree to the terms outlined below."
                lastUpdated="25 July 2026"
                sections={[
                    {
                        heading: 'Acceptance of Terms',
                        body: (
                            <>
                                <p>
                                    By accessing or using the website of Empress Hill, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please
                                    discontinue use of the website immediately.
                                </p>
                                <p>These terms may be updated from time to time, and continued use of the website after any revisions constitutes acceptance of those updates.</p>
                            </>
                        ),
                    },
                    {
                        heading: 'Use of Website',
                        body: (
                            <>
                                <p>
                                    The website is intended to provide information about the Empress Hill project, including property details, locations, amenities, and contact information. You agree
                                    to use the website only for lawful purposes and not to misuse, overload, or interfere with its functionality.
                                </p>
                                <p>Any unauthorised copying, scraping, reproduction, or redistribution of the website content is prohibited unless expressly permitted.</p>
                            </>
                        ),
                    },
                    {
                        heading: 'Enquiry and Contact Information',
                        body: (
                            <>
                                <p>
                                    When you submit an enquiry through the website, you consent to being contacted by the Empress Hill team regarding your inquiry, project information, and related
                                    offers.
                                </p>
                                <p>You agree that the information provided is accurate and that you are authorised to share it for communication purposes.</p>
                            </>
                        ),
                    },
                    {
                        heading: 'Intellectual Property',
                        body: (
                            <>
                                <p>
                                    All content displayed on this website, including text, images, graphics, layout, logos, and project visuals, is the property of Empress Hill or its authorised
                                    partners and is protected by applicable intellectual property laws.
                                </p>
                                <p>You may not reproduce, distribute, or commercially exploit any content without prior written permission.</p>
                            </>
                        ),
                    },
                    {
                        heading: 'Limitation of Liability',
                        body: (
                            <>
                                <p>
                                    Empress Hill will make reasonable efforts to ensure the accuracy of information displayed on the website, but it does not guarantee that the website will be
                                    error-free, uninterrupted, or free from technical issues.
                                </p>
                                <p>
                                    Empress Hill shall not be liable for any indirect, incidental, or consequential loss arising from the use of this website or reliance on the information provided.
                                </p>
                            </>
                        ),
                    },
                    {
                        heading: 'Governing Law',
                        body: (
                            <>
                                <p>
                                    These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising from the use of this website shall be subject
                                    to the jurisdiction of the courts in Goa, India.
                                </p>
                            </>
                        ),
                    },
                    {
                        heading: 'Contact Us',
                        body: (
                            <>
                                <p>For any questions related to these Terms & Conditions, please contact us at info@empresshill.in or call us at 9284911859.</p>
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

export default TermsAndConditionsPage;
