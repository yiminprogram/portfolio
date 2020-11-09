import React from 'react';
import styled from 'styled-components';
//functions
import { ScrollTop } from '../../functions/Index';

const IIIProject = styled.div`
  ${(p) => p.theme.mixin.page};
`;
const Index = () => {
  ScrollTop();
  return (
    <IIIProject>
      <h1>iii proejct</h1>
    </IIIProject>
  );
};

export default Index;
