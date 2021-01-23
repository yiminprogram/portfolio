import styled, { css } from 'styled-components';

type IStyleLoad = {
  load: boolean;
};

const Image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgHover = styled.img<IStyleLoad>`
  ${Image};
  display: ${(p) => (p.load ? 'none' : 'initial')};
  transition: 0.5s;

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.2);
  }
`;

export const Img = styled.img<IStyleLoad>`
  ${Image};
  display: ${(p) => (p.load ? 'none' : 'initial')};
`;
