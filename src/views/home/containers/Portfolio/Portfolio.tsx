import React from 'react';
//style
import { PortfolioDiv } from '../../style';
//components
import { ReactPortfolio, OtherPortfolio } from '../../components/Portfolio';

const Portfolio = () => {
  return (
    <PortfolioDiv>
      <ReactPortfolio />
      <OtherPortfolio />
    </PortfolioDiv>
  );
};

export default Portfolio;
