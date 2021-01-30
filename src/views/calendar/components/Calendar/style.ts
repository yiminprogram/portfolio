import styled from 'styled-components';

export const CalendarDiv = styled.div`
  width: 600px;
  margin: 10rem auto;
  padding: 20px;
  box-shadow: 5px 5px 15px #ccc;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  > span {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > button {
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
  }
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

export const CalendarDate = styled.div`
  cursor: pointer;
  width: 80px;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem 0;

  &:hover {
    background-color: #e0e0e0;
  }
`;
