import React, { FC } from 'react';
//style
import { WeatherInfoDiv, Info, WeatherImg, BackBtn } from '../../style';
//type
import { TProps } from '../../type';
//weather image
import { Cloud, CloudRain, Rain, Sun, Error } from '../WeatherImage/index';
//icons
import { ArrowBack } from '@material-ui/icons';

//method
const getWeatherImg = (weather: string) => {
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
      return <Sun />;
    case 'rain':
      return <Rain />;
    case 'cloud':
      return <Cloud />;
    case 'cloudRain':
      return <CloudRain />;
    default:
      return <Error />;
  }
};

const WeatherInfo: FC<TProps> = ({
  location,
  temp,
  time,
  weather,
  setQuery,
}) => {
  return (
    <>
      <BackBtn>
        <button
          onClick={() =>
            setQuery({
              location: '',
              temp: '',
              time: '',
              weather: '',
              isInput: false,
            })
          }
        >
          <ArrowBack />
          <span>搜尋其它縣市氣象資訊</span>
        </button>
      </BackBtn>
      <WeatherInfoDiv>
        <Info>
          <h1>{location}</h1>
          <h2>{weather}</h2>
          <h2>{`${temp}\u2103`}</h2>
          <h3>{time}</h3>
        </Info>
        <WeatherImg>{getWeatherImg(weather)}</WeatherImg>
      </WeatherInfoDiv>
    </>
  );
};

export default WeatherInfo;
