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

interface Field {
  name: keyof FormData;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
}

const ContactUs = React.memo(() => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    phone: "",
    email: "",
    consent: false,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#735054] via-[#735054] to-[#8e6e71] flex items-center justify-center p-4 text-[rgba(0,0,0,1)]">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-white mb-4 tracking-wider">
            CONTACT US
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed font-lato tracking-wide">
            Please enter the details below to get
            <br />
            in touch with us!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div className="relative group" key={field.name}>
              <div
                className={`flex shadow-xl transition-all duration-300 ${
                  focusedField === field.name
                    ? "shadow-xl scale-[1.02]"
                    : "hover:shadow-xl hover:scale-[1.01]"
                }`}
              >
                {/* Icon Section */}
                <div
                  className="rounded-l-[0.5rem] flex items-center justify-center w-20 bg-white translate-x-[0.5rem] transition-all duration-300"
                  style={{
                    clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <span className=" -translate-x-1.5">{field.icon}</span>
                </div>

                {/* Input Section */}
                <div
                  className="rounded-r-[0.5rem] bg-gradient-to-r from-[#eee4e3] via-[#eee4e3] to-[#eee4e3] flex-1 pl-8 -translate-x-[0.5rem] transition-all duration-300"
                  style={{
                    clipPath: "polygon(0% 0, 100% 0, 100% 100%,6.3% 100%)",
                  }}
                >
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] as string}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-14 bg-transparent text-[#6c5458] placeholder-[#6c5458] placeholder:tracking-widest font-semibold text-sm tracking-wider outline-none"
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
                className={`
                w-4 h-4 rounded-md 
                border-2 border-gray-300
                bg-transparent
                checked:bg-[#d9acb1]
                checked:border-[#f1dbde]
                transition-all duration-200
                appearance-none cursor-pointer
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
              className="group bg-[#8d6d70] text-white font-bold py-4 px-24 hover:bg-[#866568] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span className=" bg-opacity-20 rounded-full p-2 group-hover:bg-opacity-30 transition-all duration-300">
                <LuCircleChevronRight className="w-5 h-5" />
              </span>
              <span className="font-semibold text-md tracking-wider">
                SUBMIT
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
ContactUs.displayName = "ContactUs";

export default ContactUs;
