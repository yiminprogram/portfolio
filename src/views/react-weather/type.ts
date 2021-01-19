export type TQuery = {
  location: string;
  time: string;
  temp: string;
  weather: string;
  isInput: boolean;
};

export type TSetQuery = {
  setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
};

export type TProps = TQuery & TSetQuery;

export type TWeatherAPI = {
  parameter: TParameter[];
  time: TTime;
  weatherElement: TWeatherElement[];
};

type TParameter = {
  parameterName: string;
  parameterValue: string;
};

type TTime = {
  obsTime: string;
};

type TWeatherElement = {
  elementName: string;
  elementValue: string;
};
