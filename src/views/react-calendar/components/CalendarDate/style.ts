import styled from 'styled-components';

type TStyle = {
  isToday: boolean;
};

export const CalendarCurrentDate = styled.div`
  flex: 0 1 14%;
  height: 100px;
  margin: 0.1rem 0;
`;

export const CalendarPrevNextDate = styled.div`
  cursor: pointer;
  flex: 0 1 14%;
  height: 100px;
  display: inline-flex;
  padding: 1rem;
  transition: 0.5s;
  border-radius: 5px;
  font-weight: 700;
  color: #aaa;
`;

export const Event = styled.span<TStyle>`
  color: ${(p) => (p.isToday ? '#fff' : '#fcaa67')};
  align-self: center;
  transform: rotate(-30deg);
`;

export const DateSpan = styled.span`
  margin-bottom: 0.5rem;
`;

export const DateLabel = styled.label<TStyle>`
  cursor: pointer;
  width: 100%;
  height: inherit;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 700;
  display: inline-flex;
  flex-flow: column nowrap;
  color: ${(p) => p.isToday && '#fff'};
  background-color: ${(p) => p.isToday && '#fe80b0'};

  &:hover {
    color: #fff;
    background-color: ${(p) => p.theme.colors.light};
  }

  &:hover ${Event} {
    color: #fff;
  }
`;

export const DateRadio = styled.input`
  display: none;

  &:checked + ${DateLabel} {
    color: #fff;
    background-color: ${(p) => p.theme.colors.light};
  }

  &:checked + ${DateLabel} ${Event} {
    color: #fff;
  }
`;
