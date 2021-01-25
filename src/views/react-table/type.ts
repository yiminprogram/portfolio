export type TFoods = {
  [key: string]: number | string;
  id: number;
  name: string;
  image: string;
  price: number;
  calorie: number;
};

export type TTableFoods = {
  header: THeader[];
  foods: TFoods[];
  getSort: (headName: string) => void;
};

export type TSetQuery = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export enum ESortStatus {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
  NONE = 'NONE',
}

export type THeader = {
  title: string;
  sort: ESortStatus;
};
