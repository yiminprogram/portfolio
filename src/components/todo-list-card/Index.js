import React from 'react';
import styled, { keyframes } from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const fadeIn = keyframes`
0%{
  transform:translateX(-50px);
  opacity:0;
}
100%{
  transform:translateX(0px);
  opacity:1;
}
`;

const ListCard = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  transition: 0.1s;
  animation: ${fadeIn} 0.5s linear;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px #aaa;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  padding-left: 1rem;
  line-height: 1.5;

  > h3 {
    color: #616161;
    font-size: 1.2rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #ccc;
  }
  > p {
    color: #757575;
    margin-bottom: 1rem;
  }
  > time {
    color: #aaa;
    font-weight: 700;
    align-self: flex-end;
  }
`;

const Index = ({
  title,
  content,
  time,
  done,
  todoDone,
}) => {
  return (
    <ListCard done={done}>
      <Checkbox
        checked={done}
        onChange={() => todoDone(time)}
      />
      <Info>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{time}</time>
      </Info>
    </ListCard>
  );
};

export default Index;
