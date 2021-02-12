import styled, { keyframes } from 'styled-components';

const moveHorizontal1 = keyframes`
100%{
  transform:translateX(100%);
}
`;
const moveHorizontal2 = keyframes`
100%{
  transform:translateX(-100%);
}
`;
const moveVertical1 = keyframes`
100%{
  transform:translateY(100%);
}
`;
const moveVertical2 = keyframes`
100%{
  transform:translateY(-100%);
}
`;

export const ContactDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  position: relative;
  padding: 3rem 0;

  .border {
    position: absolute;
    border-radius: 5px;
  }

  .border:nth-child(1) {
    width: 100%;
    height: 10px;
    top: -10px;
    left: 0%;
    background: linear-gradient(to right, transparent, #5effef, #ff3bf8);
    transform: translateX(-100%);
    animation: ${moveHorizontal1} 2s linear infinite;
  }

  .border:nth-child(2) {
    width: 10px;
    height: 100%;
    top: 0;
    right: -10px;
    background: linear-gradient(to bottom, transparent, #5effef, #ff3bf8);
    transform: translateY(-100%);
    animation: ${moveVertical1} 2s linear infinite;
    animation-delay: 1s;
  }

  .border:nth-child(3) {
    width: 100%;
    height: 10px;
    bottom: -10px;
    right: 0;
    transform: translateX(100%);
    background: linear-gradient(to left, transparent, #5effef, #ff3bf8);
    animation: ${moveHorizontal2} 2s linear infinite;
  }

  .border:nth-child(4) {
    width: 10px;
    height: 100%;
    bottom: 0%;
    left: -10px;
    transform: translateY(100%);
    background: linear-gradient(to top, transparent, #5effef, #ff3bf8);
    animation: ${moveVertical2} 2s linear infinite;
    animation-delay: 1s;
  }
`;

export const Info = styled.div`
  flex: 0 1 100%;
  font-size: 1.3rem;
  color: #f0f0f0;
  display: inline-flex;
  justify-content: center;

  > span {
    margin: 0 0.5rem;
    filter: drop-shadow(0 0 10px #5effef);
  }
`;
