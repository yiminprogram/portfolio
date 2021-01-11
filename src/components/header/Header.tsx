import React, { useState } from 'react';
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
import { Menu, HighlightOff } from '@material-ui/icons';

const Header = () => {
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
    </HeaderDiv>
  );
};

export default Header;
