import React from 'react';
import styled from 'styled-components/macro';
import Wellcome from '../../containers/Home-Wellcome/Index';
import List from '../../containers/Home-List/Index';
import { useEffect } from 'react';

const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Home>
      <Wellcome />
      <List />
    </Home>
  );
};

export default Index;
