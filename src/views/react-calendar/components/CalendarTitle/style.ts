import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d0d0d0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

export const TodayBtn = styled.button`
  cursor: pointer;
  color: #ff5500;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0;
  border: none;
  background-color: transparent;
`;
