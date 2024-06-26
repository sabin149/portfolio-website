import { expertiseData } from "data/Data";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto px-2 pt-2 xl:px-0 2xl:px-[4.5rem]">
        <div className="mt-6 flex w-full flex-col flex-wrap items-center justify-center">
          <div className="flex w-full flex-col flex-wrap items-center justify-center">
            <h1 className="title-font text-lg font-semibold uppercase text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
              Expertise
            </h1>
            <hr className="mb-4 block h-1.5 w-[82%] rounded bg-indigo-500 sm:w-[26.5rem]" />
          </div>
        </div>
        <div>
          <div className="mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              {expertiseData.map((expertise) => {
                return (
                  <div
                    className="w-full px-3 py-1 sm:w-1/2 sm:px-5 lg:w-1/3"
                    key={expertise.id}
                  >
                    <div className="max-h-full overflow-hidden rounded-md border-2  bg-gray-50 px-3 pt-3.5 shadow-lg">
                      <Link to={expertise.pageUrl}>
                        <img
                          className="h-60 w-full object-cover object-top transition duration-500 ease-in-out hover:scale-[1.02]"
                          src={expertise.imageUrl}
                          alt={expertise.title}
                        />
                        <div className="py-3 px-0 text-center">
                          <h1 className="text-lg font-semibold uppercase text-gray-800 sm:text-xl 2xl:text-2xl">
                            {expertise.title}
                          </h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
