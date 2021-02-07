import styled from 'styled-components';

export const CalendarInfoDiv = styled.div`
  flex: 0 1 35%;
  height: 800px;
  padding: 3rem;

  @media screen and (max-width: 960px) {
    flex: unset;
    padding: 2rem;
  }
`;

export const DateTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

export const List = styled.div`
  height: 600px;
  overflow-y: scroll;
  transition: 0.5s;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: #527afeaa transparent;
  }
`;
