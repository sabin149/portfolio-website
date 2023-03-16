import React from "react";

const MyAriticlesAndWritings = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-5 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-5 text-gray-900 uppercase">
            My Articles And Writings
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
        <div className="flex justify-center items-center">
          <button className="text-center my-4 w-4/5 text-white bg-[#EC733F] border-0 py-2 px-8 focus:outline-none hover:bg-[#d77a52] text-lg rounded-full">
            See All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyAriticlesAndWritings;
