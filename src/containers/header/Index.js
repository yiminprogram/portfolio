import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

const Home = styled.div`
  flex: 1;
  font-size: 1.3rem;
`;

const Nav = styled.div`
  flex: 1;
  text-align: right;
`;

const HomeLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;

  text-decoration: none;
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: #666;
  font-size: 1.1rem;
  text-decoration: none;
  margin-right: 3rem;
`;

const Index = () => {
  return (
    <Header>
      <Home>
        <HomeLink to="/">Portfolio</HomeLink>
      </Home>
      <Nav>
        <NavLink to="/portfolio/react">React Portfolio</NavLink>
        <NavLink to="/portfolio/vue">Vue Portfolio</NavLink>
        <NavLink to="/portfolio/iii">III Portfolio</NavLink>
      </Nav>
    </Header>
  );
};

export default Index;