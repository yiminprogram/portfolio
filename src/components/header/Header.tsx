import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//style
import {
  HeaderDiv,
  Home,
  MenuLink,
  Hamburger,
  Close,
  MenuList,
  Nav,
} from './style';
//material icon
import { Home as Logo, Menu, HighlightOff } from '@material-ui/icons';

const Header: FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const { pathname } = useLocation();
  const showMenu = (): void => {
    setMenuState(true);
  };
  const closeMenu = (): void => {
    setMenuState(false);
  };
  return (
    <HeaderDiv>
      <Home isAbout={pathname === '/about'}>
        <Link to="/">
          <Logo style={{ fontSize: '2rem' }} />
        </Link>
      </Home>
      <Nav isAbout={pathname === '/about'}>
        <Link to="/portfolio/react">React作品集</Link>
        <Link to="/portfolio/vue">Vue作品集</Link>
        <Link to="/portfolio/iii">資策會結訓</Link>
        <Link to="/about">關於我</Link>
        <Hamburger isAbout={pathname === '/about'}>
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
