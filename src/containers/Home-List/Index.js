import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Index';

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
  return (
    <List>
      <Card to="/todolist" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </List>
  );
};

export default Index;
