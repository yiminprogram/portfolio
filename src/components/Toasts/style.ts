import styled from 'styled-components';
//interface
import { IStyleColor } from './interface';

export const Toasts = styled.div<IStyleColor>`
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 350px;
  padding: 1rem;
  color: ${({ text }) => text};
  background-color: ${({ bgc }) => bgc};
  border-radius: 5px;
`;

export const Title = styled.h1`
  padding-left: 1rem;
`;
