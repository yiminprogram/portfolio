import React, { FormEvent, useState } from 'react';
//style
import styled from 'styled-components';
//icon
import { Search, Photo, PhotoLibrary, Stars } from '@material-ui/icons';
//type
import { EAction, ECategory, TDispatch } from '../../type';

const color = (category: string) => {
  switch (category) {
    case ECategory.TOPICS:
      return '#ebb34b';
    case ECategory.PHOTOS:
      return '#51c95d';
    case ECategory.COLLECTIONS:
      return '#a730ab';
    default:
      return;
  }
};

type TStyle = {
  category: string;
};

const Bar = styled.div<TStyle>`
  max-width: 500px;
  margin: 0 auto 3rem auto;
  padding: 1rem;

  > form {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #333;

    &:focus-within {
      box-shadow: ${(p) => `0 0 0 5px ${color(p.category)}`};
    }

    &:focus-within span {
      color: ${(p) => color(p.category)};
    }

    &:focus-within button {
      color: ${(p) => color(p.category)};
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
        color: ${(p) => color(p.category)};
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
      padding-right: 0.5rem;

      &:hover {
        color: ${(p) => color(p.category)};
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
    if (category === ECategory.COLLECTIONS || category === ECategory.TOPICS)
      return;
    dispatch({ type: EAction.GET_QUERY, payload: query });
  };

  return (
    <Bar category={category}>
      <form onSubmit={getQuery}>
        <span>
          {category === ECategory.PHOTOS ? (
            <Photo style={{ fontSize: '2rem' }} />
          ) : category === ECategory.TOPICS ? (
            <Stars style={{ fontSize: '2rem' }} />
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
