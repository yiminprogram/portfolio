import React, { FC, useEffect, useState } from 'react';
//style
import { ReactTableDiv } from './style';
//components
import SearchBar from './components/SearchBar';
import Table from './components/Table';
//type
import { TFoods } from './type';
//data
import data from 'src/assets/data/food.json';

const ReactTable: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [foods, setFoods] = useState<TFoods[]>([
    { id: 0, name: '', image: '', price: 0, calorie: 0 },
  ]);

  useEffect(() => {
    if (query === '') {
      setFoods(data);
    } else {
      const newFoods = data.filter((ele) => ele.name.includes(query));
      setFoods(newFoods);
    }
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ReactTableDiv>
      <SearchBar setQuery={setQuery} />
      <Table th={Object.keys(data[0])} foods={foods} />
    </ReactTableDiv>
  );
};

export default ReactTable;
