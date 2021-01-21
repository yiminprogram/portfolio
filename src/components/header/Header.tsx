import React, { FC, useState } from 'react';
//style
import {
  HeaderDiv,
  Home,
  HomeLink,
  MenuLink,
  Hamburger,
  Close,
  MenuList,
  Nav,
  NavLink,
} from './style';
//material icon
import { Home as Logo, Menu, HighlightOff } from '@material-ui/icons';

const Header: FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const showMenu = (): void => {
    setMenuState(true);
  };
  const closeMenu = (): void => {
    setMenuState(false);
  };
  return (
    <HeaderDiv>
      <Home>
        <HomeLink to="/">
          <Logo style={{ fontSize: '2rem' }} />
        </HomeLink>
      </Home>
      <Nav>
        <NavLink to="/portfolio/react">React作品集</NavLink>
        <NavLink to="/portfolio/vue">Vue作品集</NavLink>
        <NavLink to="/portfolio/iii">資策會結訓</NavLink>
        <NavLink to="/about">關於我</NavLink>
        <Hamburger>
          <Menu onClick={showMenu} />
          <MenuList menuState={menuState} onClick={closeMenu}>
            <Close>
              <HighlightOff style={{ fontSize: 30 }} />
            </Close>
            <MenuLink to="/portfolio/react">React作品集</MenuLink>
            <MenuLink to="/portfolio/vue">Vue作品集</MenuLink>
            <MenuLink to="/portfolio/iii">資策會結訓</MenuLink>
            <MenuLink to="/about">關於我</MenuLink>
          </MenuList>
        </Hamburger>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
