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
    <section className="body-font mt-4 text-gray-600">
      <div className="mx-auto w-full px-0 pt-1 2xl:px-[4.5rem]">
        <div className="flex w-full flex-col flex-wrap items-center justify-center">
          <h1 className="title-font text-xl font-semibold capitalize text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
            {pathname === "/" || pathname === "/all-articles"
              ? "My Articles and Writings"
              : "Media Coverage"}
          </h1>
          <hr className="mt-1 mb-1 block h-1.5 w-[90%] rounded bg-indigo-500 sm:w-[26.5rem] " />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {articlesData.map((article) => {
            return (
              <div className="p-5 sm:w-1/2 lg:w-1/3" key={article.id}>
                <div>
                  <a href={article.articleUrl} target="_blank">
                    <img
                      alt="gallery"
                      className="h-60 w-full object-cover object-center transition duration-500 ease-in-out hover:scale-[1.02]"
                      src={article.imageUrl}
                    />
                  </a>
                </div>
              </div>
            );
          })}
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
      </div>
    </section>
  );
};

export default MyArticlesAndWritings;
