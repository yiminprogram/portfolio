import React from 'react';
import styled from 'styled-components/macro';
//components
import Wellcome from '../../containers/home-wellcome/Index';
import List from '../../containers/home-list/Index';
//data
import reactList from '../../assets/data/react-portfolio.json';
import vueList from '../../assets/data/vue-portfolio.json';
import iiiList from '../../assets/data/iii-portfolio.json';
//image
import ReactLogo from '../../assets/image/logo/react.png';
import VueLogo from '../../assets/image/logo/vue.png';
import StaticLogo from '../../assets/image/logo/undraw-static-assets.svg';
//functions
import { ScrollTop } from '../../functions/Index';
const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Index = () => {
  ScrollTop();
  return (
    <Home>
      <Wellcome />
      <List list={reactList} logo={ReactLogo} />
      <List list={vueList} logo={VueLogo} />
      <List list={iiiList} logo={StaticLogo} />
    </Home>
  );
};

export default Index;
