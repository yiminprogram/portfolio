import React, { FC, useEffect } from 'react';
//style
import { PortfolioDiv, Banner, Image, Info, List } from '../style';
//components
import CardProject from '../components/CardProject';
//image
import Logo from 'src/assets/image/logo/vue.png';
//data
import projectData from 'src/assets/data/vue-project.json';

const VuePortfolio: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PortfolioDiv>
      <Banner>
        <Image>
          <img src={Logo} alt="vue" />
        </Image>
        <Info>利用vue, vuex, vue-router製作之作品集</Info>
      </Banner>
      <List>
        {projectData.map((ele) => (
          <CardProject {...ele} />
        ))}
      </List>
    </PortfolioDiv>
  );
};

export default VuePortfolio;
