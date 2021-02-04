export type TContext = {
  context: TCalendarContext;
  dispatch: React.Dispatch<TAction>;
};

export type TCalendarContext = {
  firstDate: Date;
  currentDate: Date;
  month: TMonth;
  dataBase: TCalendar[];
  boardList: TCalendar[];
  isAdd: boolean;
};

export type TMonth = {
  currentList: TDate[];
  prevList: TDate[];
  nextList: TDate[];
};

export type TDate = {
  id: Date;
  list: TCalendar[];
};

export type TCalendar = {
  id: Date;
  title: string;
  content: string;
};

//action type
type TInitialDate = {
  type: EAction.INITIAL_DATE;
};

type TPrevMonth = {
  type: EAction.PREV_MONTH;
};

type TNextMonth = {
  type: EAction.NEXT_MONTH;
};

type TBackToday = {
  type: EAction.BACK_TODAY;
};

type TShowForm = {
  type: EAction.SHOW_FORM;
};

type TAddNewCalendar = {
  type: EAction.ADD_NEW_CALENDAR;
  payload: TCalendar;
};

type TClickCurrentList = {
  type: EAction.CLICK_CURRENT_LIST;
  payload: Date;
};

export type TAction =
  | TInitialDate
  | TPrevMonth
  | TNextMonth
  | TBackToday
  | TShowForm
  | TAddNewCalendar
  | TClickCurrentList;

export enum EAction {
  INITIAL_DATE = 'INITIAL_DATE',
  PREV_MONTH = 'PREV_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
  BACK_TODAY = 'BACK_TODAY',
  SHOW_FORM = 'SHOW_FORM',
  ADD_NEW_CALENDAR = 'ADD_NEW_CALENDAR',
  CLICK_CURRENT_LIST = 'CLICK_CURRENT_LIST',
}
