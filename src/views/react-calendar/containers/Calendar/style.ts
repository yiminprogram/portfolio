import styled from 'styled-components';

export const CalendarDiv = styled.div`
  flex: 0 1 700px;
  min-height: 650px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 0 30px #ddd;

  @media screen and (max-width: 960px) {
    flex: unset;
  }
`;

export const CalendarDateList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;
