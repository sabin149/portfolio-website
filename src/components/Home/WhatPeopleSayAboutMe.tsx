import GridCarousel from "components/Common/GridCarousel";

const WhatPeopleSayAboutMe = () => {
  return (
    <section className="body-font mx-auto mt-7 text-gray-600">
      <div className="mt-5 px-3 2xl:px-20">
        <div className="mb-5 flex w-full flex-col flex-wrap items-center justify-center">
          <h1 className="title-font m:text-xl text-xl font-semibold capitalize text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
            What People Say About Me
          </h1>
          <hr className="mx-auto mt-1 mb-1 block h-1.5 w-[85%] rounded bg-indigo-500 text-center sm:w-[26.5rem]" />
        </div>
        <GridCarousel />
      </div>
    </section>
  );
};

export default WhatPeopleSayAboutMe;
