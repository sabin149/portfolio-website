import {
  emailRegex,
  formDataInterface,
  initialState,
  phoneNumberRegex,
} from "types/Types";
import React, { useEffect, useState } from "react";
import useCustomEffect from "hooks/useCustomEffect";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState<formDataInterface>(initialState);
  const [errorMsg, setErrorMsg] = useState<formDataInterface>(initialState);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
        phoneNumber: !phoneNumberRegex.test(phoneNumber)
          ? "Phone Number is invalid."
          : "",
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
      await emailjs.sendForm(
        "service_vteje9v",
        "template_zlc4irh",
        e.target as HTMLFormElement,
        "sBP68nEYVOA115g_8"
      );
      setFormData(initialState);
      setIsSuccess(true);
    }
  };

  useCustomEffect();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  return (
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
          <p className={errorMsg.fullName ? "text-sm text-red-500" : "hidden"}>
            {errorMsg.fullName}
          </p>
        </div>
        <div className="mb-3 w-full px-2 md:w-1/2">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
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
            className={errorMsg.phoneNumber ? "text-sm text-red-500" : "hidden"}
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
          <p className={errorMsg.address ? "text-sm text-red-500" : "hidden"}>
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
          <p className={errorMsg.subject ? "text-sm text-red-500" : "hidden"}>
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
          <p className={errorMsg.message ? "text-sm text-red-500" : "hidden"}>
            {errorMsg.message}
          </p>
        </div>
        <div className="mb-2 w-full px-2">
          <button
            type="submit"
            className="mb-3.5 w-full rounded-md bg-indigo-500 py-2.5 text-lg font-bold text-gray-50 shadow-lg hover:bg-indigo-600 hover:shadow-lg"
          >
            Submit
          </button>
        </div>
        {isSuccess ? (
          <div
            className="mb-2 flex rounded-lg bg-green-50 p-4 text-sm text-green-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="mr-3 inline h-5 w-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <span className="font-medium">
                Thank you for contacting us! We will get back to you as soon as
                possible.
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
