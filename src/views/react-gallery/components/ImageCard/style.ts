import styled, { css } from 'styled-components';

type THeight = {
  vertical: boolean;
  height: number;
};

export const ImageListItem = styled.li<THeight>`
  min-height: ${(p) => `${p.height}px`};
  ${(p) =>
    p.vertical &&
    css`
      grid-row-start: span 2;
      grid-column-start: span 1;
    `}
  ${(p) =>
    !p.vertical &&
    css`
      &:nth-child(2n) {
        grid-row-start: span 1;
        grid-column-start: span 2;
      }
      &:nth-child(3n + 5) {
        grid-row-start: span 1;
        grid-column-start: span 1;
      }
    `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: translate(5px, -5px);
    box-shadow: ${(p) => `-10px 10px 0 ${p.color}`};
    filter: brightness(1);
  }
`;
