"use client";
import React, { useCallback, useMemo, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuCircleChevronRight } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

interface FormData {
  firstName: string;
  phone: string;
  email: string;
  consent: boolean;
}

interface SubmissionState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

interface Field {
  name: keyof FormData;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
}

const ContactForm = React.memo(() => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    phone: "",
    email: "",
    consent: false,
  });

  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isLoading: false,
    error: null,
    success: false,
  });

  const fields: Field[] = useMemo(
    () => [
      {
        name: "firstName",
        type: "text",
        placeholder: "FIRST NAME",
        icon: <FiUser className="w-6 h-6 text-[#6e5656]" />,
      },
      {
        name: "phone",
        type: "number",
        placeholder: "PHONE",
        icon: <MdOutlineLocalPhone className="w-6 h-6 text-[#6e5656]" />,
      },
      {
        name: "email",
        type: "email",
        placeholder: "EMAIL",
        icon: <MdOutlineEmail className="w-6 h-6 text-[#6e5656]" />,
      },
    ],
    []
  );

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string | boolean) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
            type: "contact",
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

      // Reset form after successful submission and show success message for a while
      setTimeout(() => {
        setFormData({
          firstName: "",
          phone: "",
          email: "",
          consent: false,
        });
        setSubmissionState({
          isLoading: false,
          error: null,
          success: false,
        });
      }, 3000);
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

  return (
    <div className="flex items-center justify-center p-2 md:p-4 text-[rgba(0,0,0,1)] mt-[-5vh] md:mt-0">
      <div className="w-full max-w-sm md:max-w-md">
        {/* Header */}
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-white mb-4 tracking-wider">
            CONTACT US
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed font-lato tracking-wide">
            Please enter the details below to get
            <br />
            in touch with us!
          </p>
        </div> */}

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
              Thank you for your inquiry! Someone from our team will contact you
              shortly.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div className="relative group" key={field.name}>
              <div
                className={`flex shadow-xl transition-all duration-300 rounded-lg overflow-hidden ${
                  focusedField === field.name
                    ? "shadow-xl scale-[1.02]"
                    : "hover:shadow-xl hover:scale-[1.01]"
                }`}
              >
                {/* Icon Section */}
                <div className="flex items-center justify-center w-16 bg-white px-4">
                  <span>{field.icon}</span>
                </div>

                {/* Input Section */}
                <div className="flex-1 bg-[#eee4e3]">
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] as string}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    disabled={submissionState.isLoading}
                    className="w-full h-14 bg-transparent text-[#6c5458] placeholder-[#6c5458] placeholder:tracking-widest font-semibold text-sm tracking-wider outline-none disabled:opacity-50 disabled:cursor-not-allowed px-4"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-1 my-8">
            <div className="relative mt-1">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => handleInputChange("consent", e.target.checked)}
                disabled={submissionState.isLoading}
                className={`
                w-4 h-4 rounded-md 
                border-2 border-gray-300
                bg-transparent
                checked:bg-[#d9acb1]
                checked:border-[#f1dbde]
                transition-all duration-200
                appearance-none cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
              />
            </div>
            <label
              htmlFor="consent"
              className="text-gray-300 leading-relaxed font-sans text-center text-xs"
            >
              By submitting this form you are agreeing to be contacted regarding
              any special offer or promotion we feel you might be interested in.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={submissionState.isLoading}
              className="group bg-[#8d6d70] text-white font-bold py-4 px-24 hover:bg-[#866568] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#8d6d70] disabled:transform-none cursor-pointer"
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
                  <span className="font-semibold text-md tracking-wider">
                    SUBMITTING...
                  </span>
                </>
              ) : submissionState.success ? (
                <>
                  <span className="bg-opacity-20 rounded-full p-2 group-hover:bg-opacity-30 transition-all duration-300">
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
                  </span>
                  <span className="font-semibold text-md tracking-wider">
                    SUCCESS!
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-opacity-20 rounded-full p-2 group-hover:bg-opacity-30 transition-all duration-300">
                    <LuCircleChevronRight className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-md tracking-wider">
                    SUBMIT
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
ContactForm.displayName = "ContactForm";

export default ContactForm;
