import React from 'react';
import styled from 'styled-components/macro';
//components
import Wellcome from '../../containers/home-wellcome/Index';
import { ComponentList, ProjectList } from '../../containers/home-list/Index';
//data
import ReacttList from '../../assets/data/react-portfolio.json';
import ReactProject from '../../assets/data/react-project.json';
import VueList from '../../assets/data/vue-project.json';
import IIIList from '../../assets/data/iii-project.json';
//image
import ReactLogo from '../../assets/image/logo/react.png';
import VueLogo from '../../assets/image/logo/vue.png';
import StaticLogo from '../../assets/image/logo/undraw-static-assets.svg';
//function
import { ScrollTop } from '../../functions/Index';
const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Index = () => {
  ScrollTop();
  return (
    <Home>
      <Wellcome />
      <ComponentList list={ReacttList} logo={ReactLogo} />
      <ProjectList list={ReactProject} logo={ReactLogo} />
      <ProjectList list={VueList} logo={VueLogo} />
      <ProjectList list={IIIList} logo={StaticLogo} />
    </Home>
  );
};

export default Index;
