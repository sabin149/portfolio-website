import React from "react";

const Expertise = () => {
  return (
    <section>
      <div className="flex flex-col text-center w-full mt-5">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 uppercase">
          Expertise
        </h1>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap ">
            <div className="p-4 md:w-1/3">
              <div className="max-h-full border-opacity-60 rounded-lg overflow-hidden bg-[#EC733F] px-5 pt-5">
                <img
                  className="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="https://picsum.photos/seed/picsum/700/400"
                  alt="blog"
                />
                <div className="p-5 text-center">
                  <h1 className="text-2xl uppercase font-bold text-gray-900">
                    Content Creation
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="max-h-full border-opacity-60 rounded-lg overflow-hidden bg-[#EC733F] px-5 pt-5">
                <img
                  className="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="https://picsum.photos/seed/picsum/700/400"
                  alt="blog"
                />
                <div className="p-5 text-center">
                  <h1 className="text-2xl uppercase font-bold text-gray-900">
                    Voice Over Artist
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="max-h-full border-opacity-60 rounded-lg overflow-hidden bg-[#EC733F] px-5 pt-5">
                <img
                  className="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="https://picsum.photos/seed/picsum/700/400"
                  alt="blog"
                />
                <div className="p-5 text-center">
                  <h1 className="text-2xl uppercase font-bold text-gray-900">
                    Information Technology
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
