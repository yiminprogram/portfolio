import styled from 'styled-components';

export const Title = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const PrevNextBtn = styled.button`
  cursor: pointer;
  margin: 0 1rem;
  padding: 0;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${(p) => p.theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export const TodayBtn = styled.button`
  cursor: pointer;
  color: #fe80b0;
  padding: 0;
  margin: 0 1rem;
  border: none;
  background-color: transparent;
`;
