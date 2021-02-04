import styled from 'styled-components';

export const CalendarInfoDiv = styled.div`
  flex: 0 1 600px;
  height: 700px;
  margin: 1rem;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 0 30px #ddd;
  overflow-y: scroll;

  @media screen and (max-width: 960px) {
    width: 90%;
    flex: unset;
    padding: 2rem;
  }
`;

export const DateTitle = styled.h1`
  color: #666;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
