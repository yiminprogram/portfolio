import React from 'react';
import styled from 'styled-components';
import { ScrollTop } from '../../functions/Index';

const VueShoppingCart = styled.div`
  ${(p) => p.theme.mixin.page};
`;
const Index = () => {
  ScrollTop();
  return (
    <VueShoppingCart>
      <h1>vue proejct</h1>
    </VueShoppingCart>
  );
};

export default Index;
