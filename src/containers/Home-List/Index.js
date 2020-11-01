import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Index';
import listData from '../../assets/data/portfolio.json';

const List = styled.div`
  width: 80%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Index = () => {
  const [list, setList] = useState();

  useEffect(() => {
    setList(listData);
  }, []);

  return (
    <List>
      {list &&
        list.map((ele) => <Card key={ele.id} {...ele} />)}
    </List>
  );
};

export default Index;
