import React from 'react';
import styled from 'styled-components/macro';
//components
import Wellcome from '../../containers/home-wellcome/Index';
import { ComponentList, ProjectList } from '../../containers/home-list/Index';
//data
import reactList from '../../assets/data/react-portfolio.json';
import vueList from '../../assets/data/vue-project.json';
import iiiList from '../../assets/data/iii-project.json';
//image
import ReactLogo from '../../assets/image/logo/react.png';
import VueLogo from '../../assets/image/logo/vue.png';
import StaticLogo from '../../assets/image/logo/undraw-static-assets.svg';

const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Index = () => {
  return (
    <Home>
      <Wellcome />
      <ComponentList list={reactList} logo={ReactLogo} />
      <ProjectList list={vueList} logo={VueLogo} />
      <ProjectList list={iiiList} logo={StaticLogo} />
    </Home>
  );
};

export default Index;
