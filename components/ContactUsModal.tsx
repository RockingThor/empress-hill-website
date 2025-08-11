"use client";
import React, { useState } from "react";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  phone: string;
  email: string;
  consent: boolean;
}

interface ValidationErrors {
  firstName?: string;
  phone?: string;
  email?: string;
}

interface SubmissionState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    phone: "",
    email: "",
    consent: false,
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isLoading: false,
    error: null,
    success: false,
  });

  // Validation functions
  const validateFirstName = (value: string): string | undefined => {
    if (!value.trim()) return "First name is required";
    if (value.trim().length < 2)
      return "First name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(value.trim()))
      return "First name can only contain letters and spaces";
    return undefined;
  };

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) return "Phone number is required";
    if (!/^\d+$/.test(value)) return "Phone number must contain only digits";
    if (value.length !== 10) return "Phone number must be exactly 10 digits";
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return undefined;
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    const firstNameError = validateFirstName(formData.firstName);
    if (firstNameError) errors.firstName = firstNameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;

    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Clear validation error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Special handling for phone field - only allow digits
    let processedValue = value;
    if (name === "phone") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : processedValue,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let error: string | undefined;

    switch (name) {
      case "firstName":
        error = validateFirstName(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
    }

    if (error) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Empress-Hill-Brochure.pdf";
    link.download = "Empress-Hill-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setSubmissionState({
      isLoading: true,
      error: null,
      success: false,
    });

    try {
      const response = await fetch(
        "https://empress-hill-tool-backend.vercel.app/api/main-website/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.firstName,
            email: formData.email,
            phone: formData.phone,
            type: "brochure",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setSubmissionState({
        isLoading: false,
        error: null,
        success: true,
      });

      // Download the brochure after successful submission
      setTimeout(() => {
        downloadBrochure();

        // Close modal after a short delay to show success message
        setTimeout(() => {
          onClose();
          // Reset form and states
          setFormData({
            firstName: "",
            phone: "",
            email: "",
            consent: false,
          });
          setValidationErrors({});
          setSubmissionState({
            isLoading: false,
            error: null,
            success: false,
          });
        }, 1500);
      }, 500);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState({
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        success: false,
      });
    }
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
            Download Brochure
          </h2>
          <p className="text-[#E9DEDC] text-sm md:text-base">
            Please enter the details below to download the brochure!
          </p>
        </div>

        {/* Error Message */}
        {submissionState.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="text-sm">{submissionState.error}</p>
          </div>
        )}

        {/* Success Message */}
        {submissionState.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p className="text-sm">
              Form submitted successfully! Your brochure download will start
              shortly.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name Field */}
          <div className="space-y-1">
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
                onBlur={handleBlur}
                placeholder="FIRST NAME"
                className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed"
                required
                disabled={submissionState.isLoading}
              />
            </div>
            {validationErrors.firstName && (
              <p className="text-red-500 text-xs ml-12">
                {validationErrors.firstName}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
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
                onBlur={handleBlur}
                placeholder="PHONE"
                maxLength={10}
                pattern="[0-9]*"
                inputMode="numeric"
                className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed"
                required
                disabled={submissionState.isLoading}
              />
            </div>
            {validationErrors.phone && (
              <p className="text-red-500 text-xs ml-12">
                {validationErrors.phone}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1">
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
                onBlur={handleBlur}
                placeholder="EMAIL"
                className="flex-1 bg-[#E9DEDC] rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-600 font-medium focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed"
                required
                disabled={submissionState.isLoading}
              />
            </div>
            {validationErrors.email && (
              <p className="text-red-500 text-xs ml-12">
                {validationErrors.email}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-[#BD314C] bg-[#E9DEDC] border-gray-300 rounded  disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={submissionState.isLoading}
            />
            <label className="text-[#E9DEDC] text-[10px]  leading-relaxed">
              By submitting this form you are agreeing to be contacted regarding
              any special offer or promotion we feel you might be interested in.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionState.isLoading}
            className="w-full bg-[#8E6C70] hover:bg-[#4A354A] text-[#E9DEDC] font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#8E6C70]"
          >
            {submissionState.isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>SUBMITTING...</span>
              </>
            ) : submissionState.success ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SUCCESS!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SUBMIT & DOWNLOAD</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal;
