export type TContext = {
  context: TCalendarContext;
  dispatch: React.Dispatch<TAction>;
};

export type TCalendarContext = {
  today: Date;
  currentDay: Date;
  currentList: TDate[];
  prevList: TDate[];
  nextList: TDate[];
};

export type TDate = {
  id: Date;
  list: TCalendar[];
};

export type TCalendar = {
  id: number;
  title: string;
  date: Date;
};

type TInitialDate = {
  type: EAction.INITIAL_DATE;
};

type TPrevMonth = {
  type: EAction.PREV_MONTH;
};

type TNextMonth = {
  type: EAction.NEXT_MONTH;
};

export type TAction = TInitialDate | TPrevMonth | TNextMonth;

export enum EAction {
  INITIAL_DATE = 'INITIAL_DATE',
  PREV_MONTH = 'PREV_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
}

export type TToday = {
  today: boolean;
};
