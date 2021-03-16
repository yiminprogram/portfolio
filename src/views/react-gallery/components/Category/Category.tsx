import React, { ChangeEvent } from 'react';
//style
import styled from 'styled-components';
//icons
import { PhotoLibrary, Photo, Stars } from '@material-ui/icons';
//type
import { EAction, ECategory, TDispatch } from '../../type';

type TStyle = {
  color: string;
};

const Input = styled.input<TStyle>`
  display: none;

  + label {
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
      background-color: ${(p) => p.color};
    }
  }

  &:checked + label {
    color: ${(p) => p.color};
  }

  &:checked + label:hover {
    color: #fff;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Category = ({ dispatch, category }: TDispatch & { category: string }) => {
  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EAction.CHANGE_CATEGORY, payload: e.currentTarget.value });
  };
  return (
    <CategoryContainer>
      <Input
        type="radio"
        name="category"
        id="topics"
        value={ECategory.TOPICS}
        checked={category === ECategory.TOPICS}
        onChange={handleCategory}
        color="#ebb34b"
      />
      <label htmlFor="topics">
        <Stars />
        <span>Topics</span>
      </label>
      <Input
        type="radio"
        name="category"
        id="photos"
        value={ECategory.PHOTOS}
        checked={category === ECategory.PHOTOS}
        onChange={handleCategory}
        color="#51c95d"
      />
      <label htmlFor="photos">
        <Photo />
        <span>Photos</span>
      </label>
      <Input
        type="radio"
        name="category"
        id="collections"
        value={ECategory.COLLECTIONS}
        checked={category === ECategory.COLLECTIONS}
        onChange={handleCategory}
        color="#a730ab"
      />
      <label htmlFor="collections">
        <PhotoLibrary />
        <span>Collections</span>
      </label>
    </CategoryContainer>
  );
};

export default Category;
