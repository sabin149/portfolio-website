import { myArticlesData } from "data/Data";
import { Link } from "react-router-dom";

const MyArticlesAndWritings = () => {
  return (
    <section className="body-font text-gray-600 xl:px-[4.8rem]">
      <div className="container mx-auto px-5 pt-2 xl:px-[4.8rem]">
        <div className="flex w-full flex-col flex-wrap items-center justify-center">
          <h1 className="title-font text-xl font-semibold capitalize text-gray-900 sm:text-2xl md:text-3xl">
            My Articles And Writings
          </h1>
          <hr className="mt-1 block h-1 w-[90%] rounded bg-indigo-500 sm:w-[26.5rem]" />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {myArticlesData.slice(0, 6).map((article) => {
            return (
              <div className="p-5 sm:w-1/2 lg:w-1/3" key={article.id}>
                <div>
                  <a href={article.articleUrl} target="_blank">
                    <img
                      alt="gallery"
                      className="w-full object-cover object-center transition duration-500 ease-in-out hover:scale-[1.02] sm:h-40 md:h-52 lg:h-60"
                      src={article.imageUrl}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="mt-4 w-4/5 rounded-full border-0 bg-[#f18d62] py-2 px-8 text-center text-lg text-white  transition duration-300 ease-in-out hover:bg-[#EC733F] focus:outline-none"
            to="/all-articles"
          >
            See All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyArticlesAndWritings;
