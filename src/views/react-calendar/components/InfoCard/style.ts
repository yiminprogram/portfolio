import styled from 'styled-components';

export const Card = styled.div`
  color: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: #527afe;
  background: linear-gradient(150deg, #8154e3, #527afe);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: #ffffff22;
    width: 100%;
    height: 100%;
    right: -30%;
    top: 50%;
    clip-path: circle();
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #ffffff22;
    width: 100%;
    height: 100%;
    right: -50%;
    top: -35%;
    clip-path: circle();
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  > time {
    font-size: 1.1rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
  }
`;
