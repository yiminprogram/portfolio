import styled, { keyframes, css } from 'styled-components';

const flash = keyframes`
50%{
  width:50px;
  height:50px;
  top:-12.5px;
  right:-12.5px;
  background-color:#ffc233;
}
`;

type TAnime = {
  isAnime: boolean;
};

export const ShoppinCartPage = styled.div`
  ${(p) => p.theme.mixin.page};
`;

export const ProductsList = styled.article`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const CartBtn = styled.div<TAnime>`
  position: fixed;
  right: 5%;
  bottom: 10%;

  > button {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34b776;
    color: #fff;

    &:hover {
      background-color: #2d9f66;
    }

    &:active {
      background-color: #22774c;
    }
  }

  > span {
    position: absolute;
    color: #fff;
    background-color: #ff1e1a;
    font-size: 0.8rem;
    font-weight: 700;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: -5px;
    right: -5px;
    animation: ${({ isAnime }) =>
      isAnime &&
      css`
        ${flash} 1s ease-out
      `};
  }
`;
