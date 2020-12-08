export interface IProps {
  title: string;
  content: string;
  time: Date;
  done: boolean;
  todoDone: (time: Date) => void;
}
