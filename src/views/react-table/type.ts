export type TFoods = {
  id: number;
  name: string;
  image: string;
  price: number;
  calorie: number;
};
export type TTableFoods = {
  th: string[];
  foods: TFoods[];
};

export type TSetQuery = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
