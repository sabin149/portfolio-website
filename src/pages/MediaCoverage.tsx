import MyArticlesAndWritings from "components/Home/MyArticlesAndWritings";
import useCustomEffect from "hooks/useCustomEffect";
import { useState } from "react";
import { mediaCoverageData } from "data/Data";
import { mediaCoverageDataInterface } from "types/Types";

const MediaCoverage = () => {
  const [showMore, setShowMore] = useState(true);
  const [data, setData] = useState<mediaCoverageDataInterface[]>(
    mediaCoverageData.slice(0, 6)
  );

  const loadMore = () => {
    const currentLength = data.length;
    const moreData = mediaCoverageData.slice(currentLength, currentLength + 6);
    const newData = [...data, ...moreData];
    setData(newData);

    if (newData.length === mediaCoverageData.length) {
      setShowMore(false);
    }
  };
  useCustomEffect();

  return (
    <section className="mt-5">
      <div className="flex flex-col flex-wrap items-center justify-center">
        <MyArticlesAndWritings articlesData={data} />
        {showMore ? (
          <div
            className=" mt-4 flex w-full  items-center justify-center  
        "
          >
            <button
              onClick={loadMore}
              className="w-1/2 rounded-full bg-indigo-500 px-4 py-2 text-lg font-bold text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-600"
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default MediaCoverage;
