import styled, { keyframes } from 'styled-components';

const flash1 = keyframes`
100%{
  left:100%;
}
`;
const flash2 = keyframes`
100%{
  top:100%;
}
`;
const flash3 = keyframes`
100%{
  right:100%;
}
`;
const flash4 = keyframes`
100%{
  bottom:100%;
}
`;

export const ContactDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
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
    filter: blur(1px);
  }

  .border:nth-child(1) {
    width: 200%;
    height: 10px;
    top: -10px;
    left: -200%;
    background: linear-gradient(to right, transparent, #5effef, #ff3bf8);
    animation: ${flash1} 3s linear infinite;
  }

  .border:nth-child(2) {
    width: 10px;
    height: 200%;
    top: -200%;
    right: -10px;
    background: linear-gradient(to bottom, transparent, #5effef, #ff3bf8);
    animation: ${flash2} 3s linear infinite;
  }

  .border:nth-child(3) {
    width: 200%;
    height: 10px;
    bottom: -10px;
    right: -200%;
    background: linear-gradient(to left, transparent, #5effef, #ff3bf8);
    animation: ${flash3} 3s linear infinite;
  }

  .border:nth-child(4) {
    width: 10px;
    height: 200%;
    bottom: -200%;
    left: -10px;
    background: linear-gradient(to top, transparent, #5effef, #ff3bf8);
    animation: ${flash4} 3s linear infinite;
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
