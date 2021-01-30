import React, { FC, useEffect, useState } from 'react';
//style
import { WeatherPage } from './style';
//components
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
//type
import { TQuery } from './type';
//weather background image
import rainny from 'src/assets/image/weather/rainny.jpg';
import sunny from 'src/assets/image/weather/sunny.jpg';
import cloudy from 'src/assets/image/weather/cloudy.jpg';

const getWeatherBackground = (weather: string): string => {
  let img;
  if (weather.includes('晴')) {
    img = 'sun';
  } else if (weather.includes('雨') && weather.includes('雲')) {
    img = 'cloudRain';
  } else if (weather.includes('雨') && weather.includes('陰')) {
    img = 'cloudRain';
  } else if (weather.includes('雨')) {
    img = 'cloudRain';
  } else if (weather.includes('雲') || weather.includes('陰')) {
    img = 'cloud';
  }
  switch (img) {
    case 'sun':
      return `url(${sunny})`;
    case 'rain':
      return `url(${rainny})`;
    case 'cloud':
      return `url(${cloudy}) `;
    case 'cloudRain':
      return `url(${cloudy}) `;
    default:
      return 'linear-gradient(150deg, #3a79b0, #3ab0a8)';
  }
};

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
    <WeatherPage weatherImage={getWeatherBackground(query.weather)}>
      {query.isInput ? (
        <WeatherInfo {...query} setQuery={setQuery} />
      ) : (
        <Search setQuery={setQuery} />
      )}
    </WeatherPage>
  );
};

export default Weather;
