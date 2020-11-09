import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
  font-weight: 700;
  box-shadow: 0 0 10px #ccc;
`;

const Home = styled(Link)`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

const Index = () => {
  return (
    <Header>
      <Home to="/portfolio">Portfolio</Home>
    </Header>
  );
};

export default Index;
