import styled, { keyframes } from 'styled-components';
const anime = keyframes`
50%{
  opacity:0;
}
`;
export const DataLoadContainer = styled.div`
  padding: 10rem;
  text-align: center;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const LoadText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  animation: ${anime} 1s linear infinite;
`;
export const LoadImage = styled.svg`
  #dot1 {
    animation: ${anime} 1s linear infinite;
  }
  #dot2 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.1s;
  }
  #dot3 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.2s;
  }
  #dot4 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.3s;
  }
  #dot5 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.4s;
  }
  #dot6 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.5s;
  }
  #dot7 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.6s;
  }
  #dot8 {
    animation: ${anime} 1s linear infinite;
    animation-delay: 0.7s;
  }
`;
