import React, { FormEvent, useState } from 'react';
//style
import styled from 'styled-components';
//icon
import { Search, Photo, PhotoLibrary } from '@material-ui/icons';
//type
import { EAction, ECategory, TDispatch } from '../../type';

const Bar = styled.div`
  max-width: 500px;
  margin: 0 auto 3rem auto;
  padding: 1rem;

  > form {
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 2px #ccc;

    &:focus-within {
      box-shadow: ${(p) => `0 0 0 5px ${p.theme.colors.primary}`};
    }

    &:focus-within span {
      color: ${(p) => p.theme.colors.primary};
    }

    &:focus-within button {
      color: ${(p) => p.theme.colors.primary};
    }

    > input {
      flex: 0 1 90%;
      padding: 1rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      font-weight: 700;
      color: #ccc;

      &:focus {
        color: ${(p) => p.theme.colors.primary};
        outline: none;
      }
    }

    > button {
      flex: 0 1 5%;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      border: none;
      color: #ccc;
      background-color: transparent;
      padding: 0;

      &:hover {
        color: ${(p) => p.theme.colors.primary};
      }
    }

    > span {
      flex: 0 1 5%;
      color: #ccc;
      padding-left: 0.5rem;
    }
  }
`;

const Searchbar = ({
  category,
  dispatch,
}: TDispatch & { category: string }) => {
  const [query, setQuery] = useState('');
  const getQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: EAction.GET_QUERY, payload: query });
  };

  return (
    <Bar>
      <form onSubmit={getQuery}>
        <span>
          {category === ECategory.PHOTOS ? (
            <Photo style={{ fontSize: '2rem' }} />
          ) : (
            <PhotoLibrary style={{ fontSize: '2rem' }} />
          )}
        </span>
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
