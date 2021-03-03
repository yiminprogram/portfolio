import styled, { css } from 'styled-components';
type TDirection = {
  vertical: boolean;
};

export const GalleryPage = styled.div`
  ${(p) => p.theme.mixin.page};
  background-color: #000;
  /* background-color: #ffecde; */
`;

export const ImageList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense;
  gap: 2rem;
`;

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
      &:nth-child(2n) {
        grid-column: span 1;
      }
      &:nth-child(4n) {
        grid-column: span 2;
      }
      &:nth-child(6n) {
        grid-column: span 3;
      }
    `}

    &:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  transition: 0.3s;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: translate(5px, -5px);
    box-shadow: -10px 10px 0 #f00;
    filter: brightness(1);
  }
`;
