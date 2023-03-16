import GridCarousel from "components/Common/GridCarousel";
import React from "react";

const WhatPeopleSayAboutMe = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mt-5 mx-auto">
        <div className="flex flex-col w-full mb-5 justify-center items-center flex-wrap">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold title-font text-gray-900 capitalize">
            What People Say About Me
          </h1>
          <span className="text-center block h-1 w-3/4 sm:w-[27rem] mt-1 rounded bg-indigo-500 mx-auto "></span>
        </div>
        <GridCarousel />
      </div>
    </section>
  );
};

export default WhatPeopleSayAboutMe;
