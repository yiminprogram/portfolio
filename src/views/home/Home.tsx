import React from 'react';
//components
import Wellcome from './containers/Wellcome';
import Portfolio from './containers/Portfolio';
import About from './containers/About';
//style
import { HomeDiv } from './style';
const Home = () => {
  return (
    <HomeDiv>
      <Wellcome />
      <Portfolio />
      <About />
    </HomeDiv>
  );
};

export default Home;
