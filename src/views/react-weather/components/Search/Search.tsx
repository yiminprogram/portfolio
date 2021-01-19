import React, { FC, useState, FormEvent } from 'react';
//style
import { SearchForm, SearchBtn } from '../../style';
//type
import { TSetQuery, TWeatherAPI } from '../../type';
//api key
import { apiKey } from 'src/authentication/weather-api';
//function
import { cityNameFilter } from '../../functions/cityNameFilter';

const Search: FC<TSetQuery> = ({ setQuery }) => {
  const [city, setCity] = useState<string>('');
  const search = (e: FormEvent) => {
    e.preventDefault();
    try {
      if (city.includes('縣') || city.includes('市')) {
        const queryArr = city.split('');
        queryArr.pop();
        const api = apiKey(cityNameFilter(queryArr.join('')));
        getWeather(api);
      } else if (city) {
        const api = apiKey(cityNameFilter(city));
        getWeather(api);
      } else {
        alert(
          '請輸入有效縣市名稱，或請稍待再次輸入查詢，如無法查詢可能為系統未增加該縣市之天氣資料',
        );
      }
    } catch (e) {
      alert(e);
    }
  };
  const getWeather = (api: string) => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const {
          parameter,
          time: dataTime,
          weatherElement,
        }: TWeatherAPI = data.records.location[0];
        const { parameterValue: location } = parameter[0];
        const time = dataTime.obsTime;
        const { elementValue: temp } = weatherElement.filter(
          (ele) => ele.elementName === 'TEMP',
        )[0];
        const { elementValue: weather } = weatherElement.filter(
          (ele) => ele.elementName === 'Weather',
        )[0];
        setQuery({ location, time, temp, weather, isInput: true });
        setCity('');
      })
      .catch(() => {
        alert(
          '請輸入有效縣市名稱，或請稍待再次輸入查詢，如無法查詢可能為系統未增加該縣市之天氣資料',
        );
      });
  };
  return (
    <SearchForm onSubmit={search}>
      <h1>搜尋城市</h1>
      <input
        type="text"
        placeholder="輸入城市名稱"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <SearchBtn type="submit">搜尋</SearchBtn>
    </SearchForm>
  );
};

export default Search;
