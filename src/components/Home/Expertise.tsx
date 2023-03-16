import { expertiseData } from "data/Data";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center flex-wrap w-full mt-6">
        <div className="flex flex-col w-full justify-center items-center flex-wrap">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold title-font text-gray-900 uppercase">
            Expertise
          </h1>
          <span className="block h-1 w-1/3 sm:w-48 mt-1 rounded bg-indigo-500"></span>
        </div>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap ">
            {expertiseData.map((expertise) => {
              return (
                <div className="p-4 lg:w-1/3 sm:w-1/2" key={expertise.id}>
                  <div className="max-h-full border-opacity-60 rounded-lg overflow-hidden bg-[#EC733F] px-5 pt-5">
                    <img
                      className="lg:h-60 md:h-36 w-full object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
                      src={expertise.imageUrl}
                      alt={expertise.title}
                    />
                    <div className="p-5 text-center">
                      <h1 className="sm:text-2xl text-lg uppercase font-bold text-gray-900">
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
