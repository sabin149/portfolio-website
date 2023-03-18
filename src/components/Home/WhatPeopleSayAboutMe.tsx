import GridCarousel from "components/Common/GridCarousel";

const WhatPeopleSayAboutMe = () => {
  return (
    <section className="body-font px-2 text-gray-600 sm:px-0">
      <div className="container mx-auto mt-5">
        <div className="mb-5 flex w-full flex-col flex-wrap items-center justify-center">
          <h1 className="title-font text-xl font-semibold capitalize text-gray-900 sm:text-2xl md:text-3xl">
            What People Say About Me
          </h1>
          <hr className="mx-auto mt-1 block h-1 w-[85%] rounded bg-indigo-500 text-center sm:w-[26.5rem]" />
        </div>
        <GridCarousel />
      </div>
    </section>
  );
};

export default WhatPeopleSayAboutMe;
