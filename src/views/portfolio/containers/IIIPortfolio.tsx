import React, { FC, useEffect } from 'react';
//style
import { PortfolioDiv, Banner, Image, Info, List } from '../style';
//components
import CardProject from '../components/CardProject';
//image
import Logo from 'src/assets/image/logo/school-logo.png';
//data
import projectData from 'src/assets/data/iii-project.json';

const IIIPortfolio: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PortfolioDiv>
      <Banner>
        <Image>
          <img src={Logo} alt="iii" />
        </Image>
        <Info>利用HTML, CSS, jQuery製作之專案前端模板作品集</Info>
      </Banner>
      <List>
        {projectData.map((ele) => (
          <CardProject {...ele} />
        ))}
      </List>
    </PortfolioDiv>
  );
};

export default IIIPortfolio;
