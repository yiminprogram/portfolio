import React, { useEffect } from 'react';
//components
import Wellcome from './containers/Wellcome';
import Portfolio from './containers/Portfolio';
import About from './containers/About';
//style
import { HomeDiv } from './style';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeDiv>
      <Wellcome />
      <Portfolio />
      <About />
    </HomeDiv>
  );
};

export default Home;
