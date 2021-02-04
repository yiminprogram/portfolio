import {
  TCalendarContext,
  TAction,
  EAction,
  TDate,
  TMonth,
  TCalendar,
} from './type';

const today = new Date();

const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);

const example: TCalendar = {
  id: new Date(),
  title: '活動標題',
  content: '活動內容',
};

export const initialState: TCalendarContext = {
  month: {
    prevList: [],
    currentList: [],
    nextList: [],
  },
  firstDate: firstDate,
  currentDate: today,
  boardList: [],
  dataBase: [],
  isAdd: false,
};

const createCurrentMonthList = (firstDate: Date): TDate[] => {
  const temp = new Date(firstDate);
  const arr: TDate[] = [];
  while (temp.getMonth() === firstDate.getMonth()) {
    arr.push({
      id: new Date(temp),
      list: [],
    });
    temp.setDate(temp.getDate() + 1);
  }
  return arr;
};

const createPrevMonthList = (firstDate: Date): TDate[] => {
  const temp = new Date(firstDate);
  temp.setDate(temp.getDate() - temp.getDay());
  const arr: TDate[] = [];
  while (temp < firstDate) {
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

const createMonth = (currentDate: Date): TMonth => {
  const prevList = createPrevMonthList(currentDate);
  const currentList = createCurrentMonthList(currentDate);
  const nextList = createNextMonthList(currentDate);

  return { prevList, currentList, nextList };
};

export const initialDate = (state: TCalendarContext): TCalendarContext => {
  const month = createMonth(state.firstDate);
  const dataBase = [...state.dataBase, example];
  const boardList = [example];
  return {
    ...state,
    month,
    dataBase,
    boardList,
  };
};

export const prevMonth = (state: TCalendarContext): TCalendarContext => {
  const temp = new Date(state.firstDate);
  temp.setMonth(temp.getMonth() - 1);
  const month = createMonth(temp);
  return {
    ...state,
    firstDate: temp,
    month,
  };
};

export const nextMonth = (state: TCalendarContext): TCalendarContext => {
  const temp = new Date(state.firstDate);
  temp.setMonth(temp.getMonth() + 1);
  const month = createMonth(temp);
  return {
    ...state,
    firstDate: temp,
    month,
  };
};

export const backToday = (state: TCalendarContext): TCalendarContext => {
  const month = createMonth(firstDate);
  const boardList = state.dataBase.filter(
    (ele) => ele.id.toLocaleDateString() === today.toLocaleDateString(),
  );
  return { ...state, firstDate, month, currentDate: today, boardList };
};

export const showForm = (state: TCalendarContext): TCalendarContext => {
  return { ...state, isAdd: !state.isAdd };
};

export const addNewCalendar = (
  state: TCalendarContext,
  payload: TCalendar,
): TCalendarContext => {
  const dataBase = [...state.dataBase, { ...payload }];
  return {
    ...state,
    dataBase,
    isAdd: false,
  };
};

export const clickCurrentList = (
  state: TCalendarContext,
  payload: Date,
): TCalendarContext => {
  const boardList = state.dataBase.filter(
    (ele) => ele.id.toLocaleDateString() === payload.toLocaleDateString(),
  );
  return { ...state, boardList, currentDate: payload };
};

export const reducer = (state: TCalendarContext, action: TAction) => {
  switch (action.type) {
    case EAction.INITIAL_DATE:
      return initialDate(state);
    case EAction.PREV_MONTH:
      return prevMonth(state);
    case EAction.NEXT_MONTH:
      return nextMonth(state);
    case EAction.BACK_TODAY:
      return backToday(state);
    case EAction.SHOW_FORM:
      return showForm(state);
    case EAction.ADD_NEW_CALENDAR:
      return addNewCalendar(state, action.payload);
    case EAction.CLICK_CURRENT_LIST:
      return clickCurrentList(state, action.payload);
    default:
      return state;
  }
};
