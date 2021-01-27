import React, { FC, useEffect } from 'react';
//style
import { PortfolioDiv, Banner, Image, Info, List } from '../style';
//components
import CardPortfolio from '../components/CardPortfolio';
import CardProject from '../components/CardProject';
//image
import Logo from 'src/assets/image/logo/react.png';
//data
import portfolioData from 'src/assets/data/react-portfolio.json';
import projectData from 'src/assets/data/react-project.json';

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
        {portfolioData.map((ele) => (
          <CardPortfolio {...ele} />
        ))}
      </List>
      <List>
        {projectData.map((ele) => (
          <CardProject {...ele} />
        ))}
      </List>
    </PortfolioDiv>
  );
};

export default ReactPortfolio;
