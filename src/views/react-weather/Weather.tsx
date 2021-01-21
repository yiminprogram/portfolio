import React, { FC, useEffect, useState } from 'react';
//style
import { WeatherPage } from './style';
//components
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
