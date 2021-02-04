import styled, { css } from 'styled-components';

type TCurrentDate = {
  currentDate: boolean;
};

const calendarDate = css`
  cursor: pointer;
  flex: 1 0 14%;
  height: 80px;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CalendarCurrentDate = styled.div<TCurrentDate>`
  ${calendarDate};
  color: ${(p) => (p.currentDate ? '#fff' : '#333')};
  background-color: ${(p) => (p.currentDate ? '#ff5500' : '#fff')};

  &:hover {
    background-color: ${(p) => (p.currentDate ? '#cc5500' : '#e0e0e0')};
  }
`;

export const CalendarPrevNextDate = styled.div`
  ${calendarDate};
  color: #bbb;
  cursor: unset;

  &:hover {
    background-color: #e0e0e0;
  }
`;
