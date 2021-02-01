import styled, { css } from 'styled-components';

type TTodayStyle = {
  today: boolean;
};

const calendarDate = css`
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin: 10px;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarCurrentDate = styled.div<TTodayStyle>`
  ${calendarDate};
  background-color: ${(p) => (p.today ? '#ff9e9d' : 'fff')};

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CalendarPrevNextDate = styled.div`
  ${calendarDate};

  &:hover {
    background-color: #e0e0e0;
  }
`;
