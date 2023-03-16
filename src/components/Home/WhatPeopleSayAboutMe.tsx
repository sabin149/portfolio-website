import React from "react";

const WhatPeopleSayAboutMe = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-5 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 uppercase">
            What People Say About Me
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="lg:w-1/3 sm:w-1/2 p-5">
            <div className="">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://picsum.photos/600/360"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-5">
            <div className="">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://picsum.photos/600/360"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-5">
            <div className="">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://picsum.photos/600/360"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSayAboutMe;
