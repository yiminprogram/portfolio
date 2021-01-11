export type TTodo = {
  title: string;
  content: string;
  time: string;
  done: boolean;
};

type TTodos = {
  todos: TTodo[];
};

export type TShow = {
  open: boolean;
  info: string;
};

type TTodoDone = {
  todoDone: (time: string) => void;
};

export type TListPorps = TTodos & TTodoDone;

export type TCardProps = TTodo & TTodoDone;
