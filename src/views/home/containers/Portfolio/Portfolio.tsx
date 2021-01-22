import React from 'react';
//style
import { PortfolioDiv, PortfolioTitle } from '../../style';
//components
import { ReactPortfolio, OtherPortfolio } from '../../components/Portfolio';

const Portfolio = () => {
  return (
    <PortfolioDiv>
      <PortfolioTitle>作品集</PortfolioTitle>
      <ReactPortfolio />
      <OtherPortfolio />
    </PortfolioDiv>
  );
};

export default Portfolio;
