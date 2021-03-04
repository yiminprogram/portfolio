import styled, { css } from 'styled-components';

type TDirection = {
  vertical: boolean;
};

type TBorder = {
  borderColor: string;
};

export const ImageListItem = styled.li<TDirection>`
  ${({ vertical }) =>
    vertical &&
    css`
      &:nth-child(2n) {
        grid-row: span 1;
      }
      &:nth-child(4n) {
        grid-row: span 2;
      }
    `}

  ${({ vertical }) =>
    !vertical &&
    css`
      &:first-child {
        grid-column-start: span 2;
        grid-row-start: span 2;
      }
      &:nth-child(2n + 3) {
        grid-row-start: span 2;
      }
      &:nth-child(4n + 5) {
        grid-column-start: span 2;
        grid-row-start: span 2;
      }
      &:nth-child(6n + 7) {
        grid-row-start: span 1;
      }
      &:nth-child(8n + 9) {
        grid-column-start: span 1;
        grid-row-start: span 1;
      }
    `}
`;

export const ImageWrapper = styled.div<TBorder>`
  width: 100%;
  height: 100%;
  filter: brightness(0.65);
  transition: 0.3s;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: translate(5px, -5px);
    box-shadow: ${(p) => `-10px 10px 0 ${p.borderColor}`};
    filter: brightness(1);
  }
`;
