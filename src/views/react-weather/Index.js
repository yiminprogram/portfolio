import React, { useState, useRef } from 'react';
import styled from 'styled-components';
//data
import cityFilter from '../../assets/data/weather-city.json';
//weather image
import { Cloud } from '../../components/weather/index';
import { CloudRain } from '../../components/weather/index';
import { Rain } from '../../components/weather/index';
import { Sun } from '../../components/weather/index';
import { Error } from '../../components/weather/index';
//api
import { apiKey } from '../../authentication/weather-api';

//method
const getWeatherImg = (weather) => {
  let img;
  if (weather.includes('晴')) {
    img = 'sun';
  } else if (
    weather.includes('雨') &&
    weather.includes('雲')
  ) {
    img = 'cloudRain';
  } else if (
    weather.includes('雨') &&
    weather.includes('陰')
  ) {
    img = 'cloudRain';
  } else if (weather.includes('雨')) {
    img = 'cloudRain';
  } else if (
    weather.includes('雲') ||
    weather.includes('陰')
  ) {
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

//style
const Weather = styled.div`
  ${(p) => p.theme.mixin.page};
`;

const UserInput = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161616;
  transition: 0.5s ease-out;
  visibility: ${(p) => (p.close ? 'hidden' : 'visible')};
  opacity: ${(p) => (p.close ? 0 : 1)};
`;

const Form = styled.form`
  flex: 0 1 600px;
  > h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  > input {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #fff;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;
const Btn = styled.div`
  text-align: right;
  > button {
    cursor: pointer;
    padding: 0.6rem 1.2rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background-color: ${(p) => p.theme.colors.primary};
    border: none;
    border-radius: 10px;
  }
`;

const Info = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 85.2px);
  transition: 0.5s ease-out;
  visibility: ${(p) => (p.close ? 'visible' : 'hidden')};
  opacity: ${(p) => (p.close ? 1 : 0)};
`;
const Card = styled.div`
  font-weight: 700;
  position: relative;
  flex: 0 1 600px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px 0px #ddd;

  > h1,
  > h2 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.3rem;
  }
  .condition {
    color: #333;
    margin-bottom: 1rem;
  }
  .time {
    color: #666;
    text-align: right;
  }
`;

const WeatherImg = styled.div`
  position: absolute;
  top: -80%;
  right: 5%;
  width: 350px;
  height: 350px;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    top: -70%;
    right: 0%;
    width: 280px;
    height: 280px;
  }
`;

const Index = () => {
  const [close, setClose] = useState(false);
  const [
    { location, time, temp, weather },
    setWeather,
  ] = useState({
    location: 'Error',
    time: 'Error',
    temp: 'Error',
    weather: 'Error',
  });
  const inputCity = useRef();
  const getWeather = async (query) => {
    let cityQuery = query;
    if (query.includes('縣') || query.includes('市')) {
      const queryArr = query.split('');
      queryArr.pop();
      cityQuery = queryArr.join('');
    }
    const cityName = cityFilter[cityQuery];
    const key = apiKey(cityName);
    fetch(key)
      .then((res) => res.json())
      .then((data) => {
        const {
          parameter,
          time: dataTime,
          weatherElement,
        } = data.records.location[0];
        const { parameterValue: location } = parameter[0];
        const time = dataTime.obsTime;
        const {
          elementValue: temp,
        } = weatherElement.filter(
          (ele) => ele.elementName === 'TEMP',
        )[0];
        const {
          elementValue: weather,
        } = weatherElement.filter(
          (ele) => ele.elementName === 'Weather',
        )[0];
        setWeather({ location, time, temp, weather });
      })
      .catch(() => {
        alert(
          '請輸入有效縣市名稱，或請稍待再次輸入查詢，如無法查詢可能為系統未增加該縣市之天氣資料',
        );
      });
  };
  const search = (e) => {
    e.preventDefault();
    setClose(true);
    getWeather(inputCity.current.value);
  };
  return (
    <Weather>
      <UserInput close={close}>
        <Form onSubmit={search}>
          <h1>搜尋縣市</h1>
          <input
            ref={inputCity}
            type="text"
            placeholder="輸入縣市名稱"
          />
          <Btn>
            <button>搜尋</button>
          </Btn>
        </Form>
      </UserInput>

      <Info close={close}>
        <Card>
          <WeatherImg>{getWeatherImg(weather)}</WeatherImg>
          <h1>{location}</h1>
          <h2>{`${temp}\u2103`}</h2>
          <p className="condition">{weather}</p>
          <p className="time">{time}</p>
        </Card>
      </Info>
    </Weather>
  );
};

export default Index;
