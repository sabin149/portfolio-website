import {
  emailRegex,
  formDataInterface,
  initialState,
} from "interfaces/Interfaces";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState<formDataInterface>(initialState);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<formDataInterface>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, phoneNumber, address, subject, message } =
      formData;
  };
  return (
    <section className=" px-2 lg:px-0">
      <div className="mx-auto mt-6 max-w-3xl overflow-hidden  rounded-lg border px-5 py-5 shadow-md">
        <div className="mb-5 px-4">
          <h2 className="border-b-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-4xl px-4">
          <div className="-mx-2 flex flex-wrap">
            <div className="mb-3 w-full px-2 md:w-1/2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Full Name is required.
              </p>
            </div>
            <div className="mb-3 w-full px-2 md:w-1/2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Email is required.
              </p>
            </div>
            <div className="mb-3 w-full px-2 md:w-1/2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Phone Number is required.
              </p>
            </div>
            <div className="mb-3 w-full px-2 md:w-1/2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Address is required.
              </p>
            </div>
            <div className="mb-3 w-full px-2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Subject is required.
              </p>
            </div>
            <div className="mb-3 w-full px-2">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-2 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  formValid ? "border-red-500" : "border-gray-400"
                }`}
                rows={5}
              />
              <p className={formValid ? "text-sm text-red-500" : "hidden"}>
                Message is required.
              </p>
            </div>
            <div className="mb-2 w-full px-2">
              <button
                type="submit"
                className="py:2.5 w-full rounded-md bg-indigo-500 font-bold text-gray-50 shadow-lg hover:bg-indigo-600 hover:shadow-lg sm:py-3"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
