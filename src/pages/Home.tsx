import Carousel from "components/Home/Carousel";
import Expertise from "components/Home/Expertise";
import MyAriticlesAndWritings from "components/Home/MyArticlesAndWritings";
import WhatPeopleSayAboutMe from "components/Home/WhatPeopleSayAboutMe";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Expertise />
      <MyAriticlesAndWritings />
      <WhatPeopleSayAboutMe />
    </div>
  );
};

export default Home;
