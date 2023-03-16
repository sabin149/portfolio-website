import Carousel from "components/Home/Carousel";
import Expertise from "components/Home/Expertise";
import MyAriticlesAndWritings from "components/Home/MyAriticlesAndWritings";
import WhatPeopleSayAboutMe from "components/Home/WhatPeopleSayAboutMe";
import React from "react";

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
