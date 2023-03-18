import MyArticlesAndWritings from "components/Home/MyArticlesAndWritings";
import { myArticlesData } from "data/Data";
import useCustomEffect from "hooks/useCustomEffect";
import { useState } from "react";
import { articlesDataInterface } from "types/Types";

const AllArticles = () => {
  const [showMore, setShowMore] = useState(true);
  const [articles, setArticles] = useState<articlesDataInterface[]>(
    myArticlesData.slice(0, 6)
  );

  const loadMore = () => {
    const currentLength = articles.length;
    const moreArticles = myArticlesData.slice(currentLength, currentLength + 6);
    const newArticles = [...articles, ...moreArticles];
    setArticles(newArticles);

    if (newArticles.length === myArticlesData.length) {
      setShowMore(false);
    }
  };
  useCustomEffect();
  return (
    <section className="mt-8">
      <div className="flex flex-col flex-wrap items-center justify-center">
        <MyArticlesAndWritings articlesData={articles} />
        {showMore ? (
          <div
            className="mt-4 flex w-1/2 items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-lg font-bold text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-600
        "
          >
            <button onClick={loadMore}>Load More</button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AllArticles;
