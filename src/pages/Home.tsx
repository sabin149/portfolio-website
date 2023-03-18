import Carousel from "components/Home/Carousel";
import Expertise from "components/Home/Expertise";
import MyAriticlesAndWritings from "components/Home/MyArticlesAndWritings";
import WhatPeopleSayAboutMe from "components/Home/WhatPeopleSayAboutMe";
import useCustomEffect from "hooks/useCustomEffect";

const Home = () => {
  useCustomEffect();
  return (
    <section>
      <Carousel />
      <Expertise />
      <MyAriticlesAndWritings />
      <WhatPeopleSayAboutMe />
    </section>
  );
};

export default Home;
