import { expertiseData } from "data/Data";

const Expertise = () => {
  return (
    <section>
      <div className="mt-6 flex w-full flex-col flex-wrap items-center justify-center">
        <div className="flex w-full flex-col flex-wrap items-center justify-center">
          <h1 className="title-font text-xl font-semibold uppercase text-gray-900 sm:text-2xl md:text-3xl">
            Expertise
          </h1>
          <span className="mt-1 block h-1 w-1/3 rounded bg-indigo-500 sm:w-48"></span>
        </div>
      </div>
      <div className="body-font text-gray-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap ">
            {expertiseData.map((expertise) => {
              return (
                <div className="p-4 sm:w-1/2 lg:w-1/3" key={expertise.id}>
                  <div className="max-h-full overflow-hidden rounded-lg border-opacity-60 bg-[#EC733F] px-5 pt-5">
                    <img
                      className="w-full object-cover object-center transition duration-500 ease-in-out hover:scale-105 md:h-36 lg:h-60"
                      src={expertise.imageUrl}
                      alt={expertise.title}
                    />
                    <div className="p-5 text-center">
                      <h1 className="text-lg font-bold uppercase text-gray-900 sm:text-2xl">
                        {expertise.title}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
