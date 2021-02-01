import React, { FC } from 'react';
//style
import { PortfolioDiv, Banner, Image, Info, List } from '../style';
//components
import CardPortfolio from '../components/Card/CardPortfolio';
//image
import Logo from 'src/assets/image/logo/react.png';
//data
import portfolioData from 'src/assets/data/react-portfolio.json';

const ReactPortfolio: FC = () => {
  return (
    <PortfolioDiv>
      <Banner>
        <Image>
          <img src={Logo} alt="react" />
        </Image>
        <Info>
          利用react, react hook, styled-components, react-router-dom, typescript
          製作之作品集
        </Info>
      </Banner>
      <List>
        {portfolioData.map((ele) => (
          <CardPortfolio {...ele} />
        ))}
      </List>
    </PortfolioDiv>
  );
};

export default ReactPortfolio;
