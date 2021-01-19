import React, { FC, useState } from 'react';
//style
import { WeatherPage } from './style';
//components
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
//functions
import { ScrollTop } from '../../functions/function';
//type
import { TQuery } from './type';

const Weather: FC = () => {
  const defaultValue: TQuery = {
    location: '',
    temp: '',
    weather: '',
    time: '',
    isInput: false,
  };
  const [query, setQuery] = useState<TQuery>(defaultValue);
  ScrollTop();
  return (
    <WeatherPage>
      {query.isInput ? (
        <WeatherInfo {...query} setQuery={setQuery} />
      ) : (
        <Search setQuery={setQuery} />
      )}
    </WeatherPage>
  );
};

export default Weather;
