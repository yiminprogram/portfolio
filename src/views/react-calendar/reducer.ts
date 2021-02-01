import { TCalendarContext, TAction, EAction, TDate } from './type';

const today = new Date();

export const initialState: TCalendarContext = {
  today: today,
  currentDay: new Date(today.getFullYear(), today.getMonth(), 1),
  currentList: [],
  nextList: [],
  prevList: [],
};

const createCurrentMonthList = (currentDay: Date): TDate[] => {
  const temp = new Date(currentDay);
  const arr: TDate[] = [];
  while (temp.getMonth() === currentDay.getMonth()) {
    arr.push({ id: new Date(temp), list: [] });
    temp.setDate(temp.getDate() + 1);
  }
  return arr;
};

const createPrevMonthList = (currentDay: Date): TDate[] => {
  const temp = new Date(currentDay);
  temp.setDate(temp.getDate() - temp.getDay());
  const arr: TDate[] = [];
  while (temp < currentDay) {
    arr.push({ id: new Date(temp), list: [] });
    temp.setDate(temp.getDate() + 1);
  }
  return arr;
};

const createNextMonthList = (currentDay: Date): TDate[] => {
  const temp = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1);
  const arr: TDate[] = [];
  while (temp.getDay() > 0) {
    arr.push({ id: new Date(temp), list: [] });
    temp.setDate(temp.getDate() + 1);
  }
  return arr;
};

export const initialDate = (state: TCalendarContext): TCalendarContext => {
  const prevList = createPrevMonthList(state.currentDay);
  const currentList = createCurrentMonthList(state.currentDay);
  const nextList = createNextMonthList(state.currentDay);
  return {
    ...state,
    prevList: prevList,
    currentList: currentList,
    nextList: nextList,
  };
};

export const prevMonth = (state: TCalendarContext): TCalendarContext => {
  const temp = new Date(state.currentDay);
  temp.setMonth(temp.getMonth() - 1);
  const prevList = createPrevMonthList(temp);
  const currentList = createCurrentMonthList(temp);
  const nextList = createNextMonthList(temp);
  return {
    ...state,
    currentDay: temp,
    prevList: prevList,
    currentList: currentList,
    nextList: nextList,
  };
};

export const nextMonth = (state: TCalendarContext): TCalendarContext => {
  const temp = new Date(state.currentDay);
  temp.setMonth(temp.getMonth() + 1);
  const prevList = createPrevMonthList(temp);
  const currentList = createCurrentMonthList(temp);
  const nextList = createNextMonthList(temp);
  return {
    ...state,
    currentDay: temp,
    prevList: prevList,
    currentList: currentList,
    nextList: nextList,
  };
};

export const reducer = (state: TCalendarContext, action: TAction) => {
  switch (action.type) {
    case EAction.INITIAL_DATE:
      return initialDate(state);
    case EAction.PREV_MONTH:
      return prevMonth(state);
    case EAction.NEXT_MONTH:
      return nextMonth(state);
    default:
      return state;
  }
};
