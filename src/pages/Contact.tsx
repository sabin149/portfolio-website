import {
  emailRegex,
  formDataInterface,
  initialState,
  phoneNumberRegex,
} from "types/Types";
import React, { useState } from "react";
import useCustomEffect from "hooks/useCustomEffect";

const Contact = () => {
  const [formData, setFormData] = useState<formDataInterface>(initialState);
  const [errorMsg, setErrorMsg] = useState<formDataInterface>(initialState);

  useCustomEffect();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value.trim() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, phoneNumber, address, subject, message } =
      formData;

    if (
      fullName === "" ||
      email === "" ||
      phoneNumber === "" ||
      address === "" ||
      subject === "" ||
      message === ""
    ) {
      setErrorMsg({
        fullName: fullName === "" ? "Full Name is required." : "",
        email: !emailRegex.test(email) ? "Email is invalid." : "",
        phoneNumber: phoneNumber === "" ? "Phone Number is invalid." : "",
        address: address === "" ? "Address is required." : "",
        subject: subject === "" ? "Subject is required." : "",
        message: message === "" ? "Message is required." : "",
      });
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMsg({
        ...errorMsg,
        phoneNumber: "Phone Number is invalid.",
      });
    } else {
      setErrorMsg(initialState);
      console.log(formData);
    }
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
                  errorMsg.fullName ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p
                className={
                  errorMsg.fullName ? "text-sm text-red-500" : "hidden"
                }
              >
                {errorMsg.fullName}
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
                  errorMsg.email ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p className={errorMsg.email ? "text-sm text-red-500" : "hidden"}>
                {errorMsg.email}
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
                type="number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`border-gray-400bg-gray-100 mb-3 w-full rounded border py-3 px-4 leading-tight text-gray-800 focus:border-[#DD7930] focus:outline-none ${
                  errorMsg.phoneNumber ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p
                className={
                  errorMsg.phoneNumber ? "text-sm text-red-500" : "hidden"
                }
              >
                {errorMsg.phoneNumber}
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
                  errorMsg.address ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p
                className={errorMsg.address ? "text-sm text-red-500" : "hidden"}
              >
                {errorMsg.address}
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
                  errorMsg.subject ? "border-red-500" : "border-gray-400"
                }`}
              />
              <p
                className={errorMsg.subject ? "text-sm text-red-500" : "hidden"}
              >
                {errorMsg.subject}
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
                  errorMsg.message ? "border-red-500" : "border-gray-400"
                }`}
                rows={5}
              />
              <p
                className={errorMsg.message ? "text-sm text-red-500" : "hidden"}
              >
                {errorMsg.message}
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