import React from 'react';
import styled from 'styled-components';
//components
import Table from '../../components/Table/Index';
//data
import data from '../../assets/data/food.json';

const Container = styled.div`
  ${(p) => p.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  return (
    <Container>
      <Table data={data} />
    </Container>
  );
};

export default Index;
