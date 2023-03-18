import Carousel from "components/Home/Carousel";
import Expertise from "components/Home/Expertise";
import MyAriticlesAndWritings from "components/Home/MyArticlesAndWritings";
import WhatPeopleSayAboutMe from "components/Home/WhatPeopleSayAboutMe";
import { myArticlesData } from "data/Data";
import useCustomEffect from "hooks/useCustomEffect";
import { articlesDataInterface } from "types/Types";

const getSixItems = (arr: articlesDataInterface[]) => {
  return arr.slice(0, 6);
};

const Home = () => {
  useCustomEffect();
  return (
    <section>
      <Carousel />
      <Expertise />
      <MyAriticlesAndWritings articlesData={getSixItems(myArticlesData)} />
      <WhatPeopleSayAboutMe />
    </section>
  );
};

export default Home;
