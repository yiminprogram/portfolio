import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
//components
import reactLogo from '../../assets/image/logo/react.png';
import vueLogo from '../../assets/image/logo/vue.png';
import iiiLogo from '../../assets/image/logo/school-logo.png';
import { ComponentCard, ProjectCard } from '../../components/home-list-card/Index';
//data
import reactList from '../../assets/data/react-portfolio.json';
import reactProject from '../../assets/data/react-project.json';
import vueProject from '../../assets/data/vue-project.json';
import iiiProject from '../../assets/data/iii-project.json';
//function
import { ScrollTop } from '../../functions/Index';

//check page type
const portfolioType = (id) => {
  switch (id) {
    case 'react':
      return { logo: reactLogo, portfolios: reactList, projects: reactProject };
    case 'vue':
      return { logo: vueLogo, portfolios: null, projects: vueProject };
    case 'iii':
      return { logo: iiiLogo, portfolios: null, projects: iiiProject };
    default:
      break;
  }
};

const Portfolio = styled.div`
  ${(p) => p.theme.mixin.page};
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  .logoContainer {
    flex: 0 1 200px;
    > img {
      width: 100%;
    }
  }
`;
const ListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Index = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const { logo, portfolios, projects } = portfolioType(id);
  ScrollTop();
  return (
    <Portfolio>
      <Logo>
        <div className="logoContainer">
          <img src={logo} alt="error" />
        </div>
      </Logo>
      <ListContainer>
        {portfolios && portfolios.map((ele) => <ComponentCard key={ele.id} {...ele} />)}
      </ListContainer>
      <ListContainer>
        {projects && projects.map((ele) => <ProjectCard key={ele.id} {...ele} />)}
      </ListContainer>
    </Portfolio>
  );
};

export default Index;
