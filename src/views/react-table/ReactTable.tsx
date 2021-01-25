import React, { FC, useEffect, useState } from 'react';
//style
import { ReactTableDiv } from './style';
//components
import SearchBar from './components/SearchBar';
import Table from './components/Table';
//type
import { TFoods, THeader, ESortStatus } from './type';
//data
import data from 'src/assets/data/food.json';

const ReactTable: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [header, setHeader] = useState<Array<THeader>>([]);
  const [foods, setFoods] = useState<Array<TFoods>>([]);

  useEffect(() => {
    if (query === '') {
      setFoods(data);
    } else {
      const newFoods = data.filter((ele) => ele.name.includes(query));
      setFoods(newFoods);
    }
  }, [query]);

  const getSort = (headName: string): void => {
    if (headName === 'name' || headName === 'image') return;
    const idx = header.findIndex((ele) => ele.title === headName);
    const newHeader = [...header];
    const resetHeader = (): void => {
      for (let i in newHeader) {
        newHeader[i].sort = ESortStatus.NONE;
      }
    };
    if (header[idx].sort === ESortStatus.DESCENDING) {
      resetHeader();
      newHeader[idx] = { ...newHeader[idx], sort: ESortStatus.ASCENDING };
      const newFoods = foods.sort(
        (a, b) => (a[headName] as number) - (b[headName] as number),
      );
      setFoods(newFoods);
      setHeader(newHeader);
    } else if (header[idx].sort === ESortStatus.ASCENDING) {
      resetHeader();
      newHeader[idx] = { ...newHeader[idx], sort: ESortStatus.DESCENDING };
      const newFoods = foods.sort(
        (a, b) => (b[headName] as number) - (a[headName] as number),
      );
      setFoods(newFoods);
      setHeader(newHeader);
    } else {
      resetHeader();
      newHeader[idx] = { ...newHeader[idx], sort: ESortStatus.ASCENDING };
      const newFoods = foods.sort(
        (a, b) => (a[headName] as number) - (b[headName] as number),
      );
      setFoods(newFoods);
      setHeader(newHeader);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const headerArr = Object.keys(data[0]);
    let sortArr: THeader[] = [];
    headerArr.forEach((ele) => {
      sortArr.push({ title: ele, sort: ESortStatus.NONE });
    });
    setHeader(sortArr);
  }, []);
  return (
    <ReactTableDiv>
      <SearchBar setQuery={setQuery} />
      <Table header={header} foods={foods} getSort={getSort} />
    </ReactTableDiv>
  );
};

export default ReactTable;
