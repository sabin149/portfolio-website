import { myArticlesData } from "data/Data";
import { Link } from "react-router-dom";

const MyArticlesAndWritings = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-2 mx-auto">
        <div className="flex flex-col w-full justify-center items-center flex-wrap">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold title-font text-gray-900 capitalize">
            My Articles And Writings
          </h1>
          <span className=" block h-1 w-3/4 sm:w-[25rem] mt-1 rounded bg-indigo-500"></span>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {myArticlesData.slice(0, 6).map((article) => {
            return (
              <div className="lg:w-1/3 sm:w-1/2 p-5" key={article.id}>
                <div>
                  <a href={article.articleUrl}>
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center"
                      src={article.imageUrl}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-center mt-4 w-4/5 text-white hover:bg-[#EC733F] bg-[#f18d62] border-0 py-2 px-8 focus:outline-none  text-lg rounded-full transition duration-300 ease-in-out"
            to="/"
          >
            See All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyArticlesAndWritings;
