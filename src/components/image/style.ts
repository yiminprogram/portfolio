import styled from 'styled-components';
//interface
import { IStyleLoad } from './interface';

export const ImageHover = styled.img<IStyleLoad>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  display: ${({ load }) => (load ? 'none' : 'initial')};

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.2);
  }
`;

export const Image = styled.img<IStyleLoad>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(p) => (p.load ? 'none' : 'initial')};
`;
