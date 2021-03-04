import styled from 'styled-components';

type THeight = {
  height: number;
};

type TColor = {
  color: string;
};

export const ImageListItem = styled.li<THeight>`
  min-height: ${(p) => `${p.height}px`};
  &:first-child {
    grid-row-start: span 1;
    grid-column-start: span 2;
  }
  &:nth-child(2n) {
    grid-row-start: span 1;
    grid-column-start: span 1;
  }
  &:nth-child(4n) {
    grid-row-start: span 2;
    grid-column-start: span 2;
  }
`;

export const ImageWrapper = styled.div<TColor>`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background-color: ${(p) => `rgba(${p.color})`};
  filter: brightness(0.65) contrast(110%);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: translate(5px, -5px);
    box-shadow: ${(p) => `-10px 10px 0 rgb(${p.color})`};
    filter: brightness(1);
  }
`;
