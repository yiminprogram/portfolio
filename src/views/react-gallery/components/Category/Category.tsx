import React, { ChangeEvent } from 'react';
//style
import styled from 'styled-components';
//icons
import { PhotoLibrary, Photo } from '@material-ui/icons';
//type
import { EAction, ECategory, TDispatch } from '../../type';

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  > input {
    display: none;

    &:checked + label {
      color: ${(p) => p.theme.colors.primary};
    }

    &:checked + label:hover {
      color: #fff;
    }
  }

  > label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: #aaa;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 1rem;
    margin: 1rem;

    > span {
      margin-left: 0.5rem;
    }

    &:hover {
      color: #fff;
      background-color: ${(p) => p.theme.colors.primary};
    }
  }
`;

const Category = ({ dispatch, category }: TDispatch & { category: string }) => {
  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EAction.CHANGE_CATEGORY, payload: e.currentTarget.value });
  };
  return (
    <CategoryContainer>
      <input
        type="radio"
        name="category"
        id="photos"
        value={ECategory.PHOTOS}
        checked={category === ECategory.PHOTOS}
        onChange={handleCategory}
      />
      <label htmlFor="photos">
        <Photo />
        <span>Photos</span>
      </label>
      <input
        type="radio"
        name="category"
        id="collections"
        value={ECategory.COLLECTIONS}
        checked={category === ECategory.COLLECTIONS}
        onChange={handleCategory}
      />
      <label htmlFor="collections">
        <PhotoLibrary />
        <span>Collections</span>
      </label>
    </CategoryContainer>
  );
};

export default Category;
