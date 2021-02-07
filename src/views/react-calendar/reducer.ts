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

const example: TCalendar[] = [
  {
    id: today.toLocaleDateString(),
    title: '活動標題',
    content: '活動內容',
  },
];

export const initialState: TCalendarContext = {
  firstDate: firstDate,
  currentDate: today,
  month: {
    prevList: [],
    currentList: [],
    nextList: [],
  },
  dataBase: [],
  boardList: [],
  isAdd: false,
};

const createCurrentMonthList = (
  firstDate: Date,
  dataBase: TCalendar[],
): TDate[] => {
  const temp = new Date(firstDate);
  const arr: TDate[] = [];
  while (temp.getMonth() === firstDate.getMonth()) {
    const data = dataBase.filter((ele) => ele.id === temp.toLocaleDateString());
    arr.push({
      id: new Date(temp).toLocaleDateString(),
      list: [...data],
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
    arr.push({ id: new Date(temp).toLocaleDateString(), list: [] });
    temp.setDate(temp.getDate() + 1);
  }
  return arr;
};

const createNextMonthList = (currentDay: Date): TDate[] => {
  const temp = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1);
  const arr: TDate[] = [];
  while (temp.getDay() > 0) {
    arr.push({ id: new Date(temp).toLocaleDateString(), list: [] });
    temp.setDate(temp.getDate() + 1);
  }

  return arr;
};

const createMonth = (currentDate: Date, dataBase: TCalendar[]): TMonth => {
  const prevList = createPrevMonthList(currentDate);
  const currentList = createCurrentMonthList(currentDate, dataBase);
  const nextList = createNextMonthList(currentDate);

  return { prevList, currentList, nextList };
};

export const initialDate = (state: TCalendarContext): TCalendarContext => {
  const dataBase = [...example];
  const month = createMonth(state.firstDate, dataBase);
  const boardList = [...dataBase];
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
  const month = createMonth(temp, state.dataBase);
  const tempCurrent = new Date(state.currentDate);
  tempCurrent.setMonth(tempCurrent.getMonth() - 1);
  const boardList = state.dataBase.filter(
    (ele) => ele.id === tempCurrent.toLocaleDateString(),
  );

  return {
    ...state,
    firstDate: temp,
    currentDate: tempCurrent,
    month,
    boardList,
  };
};

export const nextMonth = (state: TCalendarContext): TCalendarContext => {
  const temp = new Date(state.firstDate);
  temp.setMonth(temp.getMonth() + 1);
  const month = createMonth(temp, state.dataBase);
  const tempCurrent = new Date(state.currentDate);
  tempCurrent.setMonth(tempCurrent.getMonth() + 1);
  const boardList = state.dataBase.filter(
    (ele) => ele.id === tempCurrent.toLocaleDateString(),
  );

  return {
    ...state,
    firstDate: temp,
    currentDate: tempCurrent,
    month,
    boardList,
  };
};

export const backToday = (state: TCalendarContext): TCalendarContext => {
  const month = createMonth(firstDate, state.dataBase);
  const boardList = state.dataBase.filter(
    (ele) => ele.id === new Date().toLocaleDateString(),
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
  const currentList = state.month.currentList.map((ele) =>
    ele.id === payload.id
      ? { ...ele, list: [...ele.list, { ...payload }] }
      : { ...ele },
  );
  const boardList = dataBase.filter((ele) => ele.id === payload.id);
  console.log(boardList);
  return {
    ...state,
    month: { ...state.month, currentList },
    boardList,
    dataBase,
    isAdd: false,
  };
};

export const clickCurrentList = (
  state: TCalendarContext,
  payload: string,
): TCalendarContext => {
  const boardList = state.dataBase.filter((ele) => ele.id === payload);
  return { ...state, boardList, currentDate: new Date(payload) };
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
