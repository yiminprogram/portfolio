import React, { FormEvent, useState } from 'react';
//style
import styled from 'styled-components';
//icon
import { Search } from '@material-ui/icons';
//type
import { EAction, TDispatch } from '../../type';

const Bar = styled.div`
  max-width: 500px;
  margin: 0 auto 3rem auto;

  > form {
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 2px #fff;
    border-radius: 3px;

    &:focus-within {
      box-shadow: ${(p) => `0 0 0 5px ${p.theme.colors.primary}`};
    }

    > input {
      flex: 0 1 95%;
      padding: 1rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;

      &:focus {
        outline: none;
      }
    }

    > button {
      flex: 0 1 5%;
      display: inline-flex;
      align-items: center;
      border: none;
      color: #fff;
      background-color: transparent;
    }
  }
`;

const Searchbar = ({ dispatch }: TDispatch) => {
  const [query, setQuery] = useState('');
  const getQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: EAction.GET_QUERY, payload: query });
  };
  return (
    <Bar>
      <form onSubmit={getQuery}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">
          <Search style={{ fontSize: '2rem' }} />
        </button>
      </form>
    </Bar>
  );
};

export default Searchbar;
