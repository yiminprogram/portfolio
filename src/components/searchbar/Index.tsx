import React from 'react';
//style
import * as Searchbar from './style';
//ineterface
import { IProps } from './interface';
//icon
import { Search } from '@material-ui/icons';

const Index: React.FC<IProps> = ({ setInput }) => {
  const inputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInput(e.target.value);
  };
  return (
    <Searchbar.Form>
      <Searchbar.Input
        onChange={inputValue}
        type="text"
        placeholder="搜尋食物名稱"
      />
      <Searchbar.Icon>
        <Search />
      </Searchbar.Icon>
    </Searchbar.Form>
  );
};

export default Index;
