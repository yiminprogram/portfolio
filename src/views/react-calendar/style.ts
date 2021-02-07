import styled from 'styled-components';

export const CalendarPage = styled.div`
  ${(p) => p.theme.mixin.page};
`;

export const Container = styled.div`
  padding-top: 5rem;
  min-height: inherit;
  display: flex;
  flex-flow: row nowrap;

  @media screen and (max-width: 960px) {
    flex-flow: column nowrap;
  }
`;

export const AddBtn = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  width: 50px;
  height: 50px;

  > button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #fff;
    background-color: ${(p) => p.theme.colors.primary};
    border: none;
    border-radius: 50%;

    &:hover {
      background-color: ${(p) => p.theme.colors.hover};
    }
  }
`;
