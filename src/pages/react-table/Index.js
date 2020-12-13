import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//components
import Table from '../../components/Table/Index';
import Searchbar from '../../components/searchbar/Index';
//data
import FoodData from '../../assets/data/food.json';
//functions
import { ScrollTop } from '../../functions/function';

const TablePage = styled.div`
  ${(p) => p.theme.mixin.page};
`;

const Container = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Search = styled.div`
  flex: 0 1 1000px;
  height: 100px;
`;

const TableContainer = styled.div`
  flex: 0 1 1000px;
  max-height: 700px;
  overflow-x: auto;
`;

const Index = () => {
  ScrollTop();
  const [data, setData] = useState(FoodData);
  const [head, setHead] = useState();
  const [input, setInput] = useState('');
  useEffect(() => {
    setHead(FoodData[0]);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      const newData = FoodData.filter((ele) =>
        ele.name.includes(input),
      );
      setData(newData);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <TablePage>
      <Container>
        <Search>
          <Searchbar setInput={setInput} />
        </Search>
        <TableContainer>
          <Table data={data} head={head} />
        </TableContainer>
      </Container>
    </TablePage>
  );
};

export default Index;
