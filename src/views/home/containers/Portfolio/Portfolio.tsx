import React from 'react';
//style
import { PortfolioDiv } from '../../style';
//components
import ReactPortfolio from '../../components/ReactPortfolio';
import VuePortfolio from '../../components/VuePortfolio';
import IIIPortfolio from '../../components/IIIPortfolio';

const Portfolio = () => {
  return (
    <PortfolioDiv>
      <ReactPortfolio />
      <VuePortfolio />
      <IIIPortfolio />
    </PortfolioDiv>
  );
};

export default Portfolio;
