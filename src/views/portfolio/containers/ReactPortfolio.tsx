import React, { FC, useEffect } from 'react';
//style
import { PortfolioDiv, Banner, Image, Info, List } from '../style';
//components
import CardPortfolio from '../components/Card/CardPortfolio';
//image
import Logo from 'src/assets/image/logo/react.png';
//data
import portfolioData from 'src/assets/data/react-portfolio.json';

const ReactPortfolio: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        {portfolioData
          .filter((ele) => ele.top === true)
          .map((ele) => (
            <CardPortfolio key={ele.id} {...ele} />
          ))}
        {portfolioData
          .filter((ele) => ele.top === false)
          .map((ele) => (
            <CardPortfolio key={ele.id} {...ele} />
          ))}
      </List>
    </PortfolioDiv>
  );
};

export default ReactPortfolio;
