"use client";
import React, { useState } from "react";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div className="bg-[#725054] rounded-lg p-6 md:p-8 w-full max-w-md mx-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#E9DEDC] hover:text-white text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E9DEDC] mb-2">
            CONTACT US
          </h2>
          <p className="text-[#E9DEDC] text-sm md:text-base">
            Please enter the details below to get in touch with us!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name Field */}
          <div className="flex">
            <div className="bg-[#E9DEDC] rounded-l-lg p-3 flex items-center justify-center w-12">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="FIRST NAME"
              className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#BD314C]"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="flex">
            <div className="bg-[#E9DEDC] rounded-l-lg p-3 flex items-center justify-center w-12">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="PHONE"
              className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#BD314C]"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex">
            <div className="bg-[#E9DEDC] rounded-l-lg p-3 flex items-center justify-center w-12">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="EMAIL"
              className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#BD314C]"
              required
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-[#BD314C] bg-[#E9DEDC] border-gray-300 rounded focus:ring-[#BD314C] focus:ring-2"
              required
            />
            <label className="text-[#E9DEDC] text-[10px]  leading-relaxed">
              By submitting this form you are agreeing to be contacted regarding
              any special offer or promotion we feel you might be interested in.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#8E6C70] hover:bg-[#4A354A] text-[#E9DEDC] font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>SUBMIT</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal;
