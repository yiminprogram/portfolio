import React from 'react';
import styled from 'styled-components';
//Icon
import { EventAvailable, EventBusy } from '@material-ui/icons';
// Components
import ListCard from '../../components/todo-list-card/Index';

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const List = styled.div`
  flex: 0 1 600px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  margin: 2rem 0;
  color: ${(props) => props.color};
  border-bottom: 2px solid #ddd;
  font-size: 1.3rem;
  font-weight: 700;

  > span {
    margin-left: 1rem;
  }
`;

const Index = ({ todos, todoDone }) => {
  return (
    <Container>
      <List>
        <Category color="#ef5350">
          <EventBusy />
          <span>未完成</span>
        </Category>
        {todos.map((ele) => !ele.done && <ListCard key={ele.time} {...ele} todoDone={todoDone} />)}
        <Category color="#2e7d32">
          <EventAvailable />
          <span>已完成</span>
        </Category>
        {todos.map((ele) => ele.done && <ListCard key={ele.time} {...ele} todoDone={todoDone} />)}
      </List>
    </Container>
  );
};

export default Index;
