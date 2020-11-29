import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//material icon
import { Menu, HighlightOff } from '@material-ui/icons';

const Header = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HomeLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;

  text-decoration: none;
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  position: relative;
  color: #666;
  font-size: 1.1rem;
  text-decoration: none;
  margin: 0 1.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: -30%;
    left: 50%;
    width: 0;
    height: 20%;
    background-color: ${(p) => p.theme.colors.primary};
    transition: 0.5s;
  }
  &:hover {
    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  cursor: pointer;
  margin: 0 1rem;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  color: #333;
  background-color: transparent;
  display: none;
  &:hover {
    background-color: #ddd;
  }
  @media screen and (max-width: 768px) {
    display: initial;
  }
`;
const MenuList = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  box-shadow: 0 0 10px #aaa;
  transition: 0.3s;
  transform: ${(p) => (p.menuState ? 'translateY(0)' : 'translateY(-500px)')};
`;
const MenuLink = styled(Link)`
  color: #333;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 0;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
  }
`;

const Close = styled.div`
  color: #333;
  padding-top: 1rem;
  padding-right: 1rem;
  text-align: right;

  > svg {
    cursor: pointer;
  }
`;

const Index = () => {
  const [menuState, setMenuState] = useState(false);
  const showMenu = () => {
    setMenuState(true);
  };
  const closeMenu = () => {
    setMenuState(false);
  };
  return (
    <Header>
      <Home>
        <HomeLink to="/">Portfolio</HomeLink>
      </Home>
      <Nav>
        <NavLink to="/portfolio/react">React Portfolio</NavLink>
        <NavLink to="/portfolio/vue">Vue Portfolio</NavLink>
        <NavLink to="/portfolio/iii">III Portfolio</NavLink>
        <Hamburger>
          <Menu onClick={showMenu} />
          <MenuList menuState={menuState} onClick={closeMenu}>
            <Close>
              <HighlightOff style={{ fontSize: 30 }} />
            </Close>
            <MenuLink to="/portfolio/react">React Portfolio</MenuLink>
            <MenuLink to="/portfolio/vue">Vue Portfolio</MenuLink>
            <MenuLink to="/portfolio/iii">III Portfolio</MenuLink>
          </MenuList>
        </Hamburger>
      </Nav>
    </Header>
  );
};

export default Index;
