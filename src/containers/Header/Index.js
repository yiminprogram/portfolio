import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  box-shadow: 0 0 10px #ccc;
`;

const Index = () => {
  return (
    <Header>
      <h1>React Portfolio</h1>
    </Header>
  );
};

export default Index;
