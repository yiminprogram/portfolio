import React from 'react';
import styled from 'styled-components';
import Model from '../../components/wellcome-model/Index';
const Wellcome = styled.div`
  width: 85%;
  height: 50vh;
  margin: 0 auto;
`;

const Index = () => {
  return (
    <Wellcome>
      <Model />
    </Wellcome>
  );
};

export default Index;
