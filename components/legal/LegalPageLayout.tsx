import React from 'react';
import Link from 'next/link';

interface LegalPageLayoutProps {
    title: string;
    intro: string;
    sections: Array<{
        heading: string;
        body: React.ReactNode;
    }>;
    lastUpdated?: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, intro, sections, lastUpdated }) => {
    return (
        <div className="min-h-screen bg-[#fcf8f8] text-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="mb-8 md:mb-10">
                    <p className="text-sm font-semibold tracking-[0.3em] text-[#8E6C70] uppercase">Legal Information</p>
                    <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#725054]">{title}</h1>
                    <p className="mt-4 text-base sm:text-lg leading-8 text-gray-700">{intro}</p>
                    {lastUpdated ? <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p> : null}
                </div>

                <div className="rounded-3xl border border-[#f0e0e2] bg-white p-6 shadow-[0_10px_40px_rgba(114,80,84,0.08)] sm:p-8 lg:p-10">
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <section key={section.heading} className="scroll-mt-20">
                                <h2 className="text-xl font-semibold text-[#725054]">
                                    {index + 1}. {section.heading}
                                </h2>
                                <div className="mt-3 space-y-3 text-sm sm:text-base leading-8 text-gray-700">{section.body}</div>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#8E6C70] hover:text-[#725054] transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LegalPageLayout;
