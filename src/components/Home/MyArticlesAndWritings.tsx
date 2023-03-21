import { expertiseData } from "data/Data";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { articlesDataInterface } from "types/Types";

const MyArticlesAndWritings = ({
  articlesData,
}: {
  articlesData: articlesDataInterface[];
}) => {
  const { pathname } = useLocation();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [pathname]);

  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto px-2 pt-2 xl:px-0 2xl:px-[4.5rem]">
        <div className="mt-6 flex w-full flex-col flex-wrap items-center justify-center">
          <div className="flex w-full flex-col flex-wrap items-center justify-center">
            <h1 className="title-font text-lg font-semibold uppercase text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
              My Articles and Writings
            </h1>
            <hr className="mb-4 block h-1.5 w-[82%] rounded bg-indigo-500 sm:w-[30rem]" />
          </div>
        </div>
        <div>
          <div className="mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              {articlesData.map((article) => {
                return (
                  <div
                    className="w-full px-3 py-1 sm:w-1/2 sm:px-5 lg:w-1/3"
                    key={article.id}
                  >
                    <div className="max-h-full overflow-hidden rounded-md border-2  bg-gray-50 px-3 pt-3.5 shadow-lg">
                      <img
                        className="h-60 w-full cursor-pointer object-cover object-center transition duration-500 ease-in-out hover:scale-[1.02]"
                        src={article.imageUrl}
                        alt={article.title}
                      />
                      <div className="py-3 px-0">
                        <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-gray-400">
                          {article.date}
                        </h2>
                        <h1 className="title-font mb-1 text-lg font-medium text-gray-900">
                          {article.title.length > 30
                            ? article.title.slice(0, 30) + "..."
                            : article.title}
                        </h1>
                        <p className="mb-2 leading-relaxed">
                          {article.mediaName}
                        </p>
                        <div className="flex flex-wrap items-center">
                          <a
                            className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-1.5 text-gray-50 hover:bg-indigo-600 "
                            href={article.articleUrl}
                          >
                            Read More
                            <svg
                              className="ml-2 h-4 w-4"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {check ? (
        <div className="flex items-center justify-center">
          <Link
            className="mt-4 w-4/5 rounded-full border-0 bg-[#f18d62] py-2.5 px-8 text-center text-xl text-white  transition duration-300 ease-in-out hover:bg-[#EC733F] focus:outline-none "
            to="/all-articles"
          >
            See All Articles
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default MyArticlesAndWritings;
