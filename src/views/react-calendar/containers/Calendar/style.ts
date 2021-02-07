import styled from 'styled-components';

export const CalendarDiv = styled.div`
  flex: 0 1 65%;
  padding: 3rem;

  @media screen and (max-width: 960px) {
    flex: unset;
  }
`;

export const CalendarDateList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;
