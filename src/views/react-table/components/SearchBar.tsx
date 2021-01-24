import React, { FC, FormEvent, useState } from 'react';
//style
import { SearchBarDiv, InputGroup } from '../style';
//icons
import { Search } from '@material-ui/icons';
//type
import { TSetQuery } from '../type';

const SearchBar: FC<TSetQuery> = ({ setQuery }) => {
  const [userQuery, setUserQuery] = useState('');
  const submitQuery = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setQuery!(userQuery);
  };
  return (
    <SearchBarDiv>
      <InputGroup onSubmit={submitQuery}>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder="輸入食物名稱"
        />
        <button type="submit">
          <Search />
        </button>
      </InputGroup>
    </SearchBarDiv>
  );
};

export default SearchBar;
