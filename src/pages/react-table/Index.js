import React from 'react';
import styled from 'styled-components';
//components
import Table from '../../components/Table/Index';
//data
import data from '../../assets/data/food.json';
//functions
import { ScrollTop } from '../../functions/Index';

const TablePage = styled.div`
  ${(p) => p.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex: 0 1 800px;
  max-height: 600px;
  overflow-x: auto;
`;

const Index = () => {
  ScrollTop();
  return (
    <TablePage>
      <Container>
        <Table data={data} />
      </Container>
    </TablePage>
  );
};

export default Index;
