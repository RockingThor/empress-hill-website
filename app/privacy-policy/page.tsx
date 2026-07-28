import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileFooter from '@/components/MobileFooter';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Nav />
            <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins">Privacy Policy — Empress Hill</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-poppins space-y-6">
                    <p>
                        Empress Hill (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website{' '}
                        <a href="https://www.empresshill.in" className="text-[#8E6C70] hover:underline">
                            www.empresshill.in
                        </a>
                        , submit your details through online forms or advertisements, or interact with us through digital platforms including Meta (Facebook & Instagram).
                    </p>
                    <p>By accessing or using our website or submitting your information, you agree to the terms of this Privacy Policy.</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We may collect the following types of information:</p>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Full Name</li>
                                <li>Email Address</li>
                                <li>Phone Number</li>
                                <li>City/Location</li>
                                <li>Budget or Property Preference</li>
                                <li>Any additional information voluntarily submitted</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Automatically Collected Information</h3>
                            <p className="mb-2">When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>IP address</li>
                                <li>Device information</li>
                                <li>Browser data</li>
                                <li>Cookies and tracking technologies</li>
                                <li>Pages viewed and time spent</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-2">We use the collected information to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Respond to your enquiries</li>
                            <li>Provide property details, pricing, or availability</li>
                            <li>Schedule site visits</li>
                            <li>Offer personalized communication</li>
                            <li>Improve our website and advertising performance</li>
                            <li>Share updates, offers, and project-related communication</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
                        <p className="mb-2">We may share your information with:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Our internal sales team</li>
                            <li>Authorized channel partners</li>
                            <li>CRM and communication service providers</li>
                            <li>Digital advertising platforms (e.g., Meta, Google) for retargeting</li>
                            <li>Legal or regulatory authorities, if required</li>
                        </ul>
                        <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                            internet is 100% secure.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking</h2>
                        <p>
                            Our website may use cookies or tracking technologies to enhance your browsing experience. You can modify your browser settings to decline cookies, but certain features may
                            not function properly.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Access the personal data we hold</li>
                            <li>Request correction or updates</li>
                            <li>Request deletion of your information</li>
                            <li>Withdraw consent for communication</li>
                        </ul>
                        <p className="mt-4">To exercise any of these rights, contact us at:</p>
                        <ul className="list-none space-y-1 ml-4">
                            {/*<li>📧 info@empresshill.in</li>*/}
                            <li>📞 9284911859</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
                        <p>Our website or ads may contain links to third-party pages. We are not responsible for the privacy practices or content of external websites.</p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated date.</p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                        <p className="mb-2">For any questions regarding this Privacy Policy, you may contact us at:</p>
                        <div className="ml-4 space-y-1">
                            <p className="font-semibold">Empress Hill</p>
                            <p>
                                Website:{' '}
                                <a href="https://www.empresshill.in" className="text-[#8E6C70] hover:underline">
                                    www.empresshill.in
                                </a>
                            </p>
                            {/*<p>Email: info@empresshill.in</p>*/}
                            <p>Phone: 9284911859</p>
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-[#8E6C70] hover:underline font-poppins">
                        ← Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
            <MobileFooter />
        </div>
    );
}
