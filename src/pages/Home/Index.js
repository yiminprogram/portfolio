import React from 'react';
import styled from 'styled-components/macro';
import Wellcome from '../../containers/Home-Wellcome/Index';
import List from '../../containers/Home-List/Index';

const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Index = () => {
  return (
    <Home>
      <Wellcome />
      <List />
    </Home>
  );
};

export default Index;
