import styled from 'styled-components';
import { Link } from 'react-router-dom';

//type
type TStyled = {
  menuState: boolean;
};

type TIsAbout = {
  isAbout: boolean;
};

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  z-index: 2;
`;

export const Home = styled.div<TIsAbout>`
  flex: 1;
  font-size: 1.3rem;

  > a {
    color: ${(p) => (p.isAbout ? '#f0f0f0' : p.theme.colors.primary)};
    font-size: 1.5rem;
    text-decoration: none;
    margin-left: 2rem;
  }
`;

export const Nav = styled.div<TIsAbout>`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > a {
    color: ${(p) => (p.isAbout ? '#f0f0f0' : '#666')};
    position: relative;
    font-size: 1.1rem;
    text-decoration: none;
    margin: 0 1.5rem;

    &::before {
      content: '';
      position: absolute;
      bottom: -40%;
      left: 50%;
      width: 0;
      height: 5px;
      background-color: ${(p) => p.theme.colors.primary};
      transition: 0.5s;
    }
    &:hover {
      &::before {
        left: 0;
        width: 100%;
      }
    }

    @media screen and (max-width: 1060px) {
      display: none;
    }
  }
`;

export const Hamburger = styled.button<TIsAbout>`
  cursor: pointer;
  margin: 0 1rem;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  color: ${(p) => (p.isAbout ? '#f0f0f0' : '#333')};
  background-color: transparent;
  display: none;

  &:hover {
    color: #333;
    background-color: #ddd;
  }

  @media screen and (max-width: 1060px) {
    display: initial;
  }
`;
export const MenuList = styled.div<TStyled>`
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
export const MenuLink = styled(Link)`
  color: #333;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 0;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
  }
`;

export const Close = styled.div`
  color: #333;
  padding-top: 1rem;
  padding-right: 1rem;
  text-align: right;

  > svg {
    cursor: pointer;
  }
`;
