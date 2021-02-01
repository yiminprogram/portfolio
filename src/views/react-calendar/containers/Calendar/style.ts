import styled from 'styled-components';

export const CalendarDiv = styled.div`
  width: 600px;
  margin: 10rem auto;
  padding: 20px;
  box-shadow: 5px 5px 15px #ccc;
`;

export const CalendarDayList = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const CalendarDay = styled.div`
  width: 80px;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const CalendarDateList = styled.div`
  width: 560px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`;
