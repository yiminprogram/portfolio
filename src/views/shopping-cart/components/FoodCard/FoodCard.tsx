import React, { FC, useContext } from 'react';
//style
import {
  CardList,
  CardImg,
  CardInfo,
  PriceAddGroup,
  Like,
  Price,
  Add,
  Title,
} from './style';
//components
import { Image } from 'src/components/image';
//icons
import { Favorite, AddBox } from '@material-ui/icons';
//type
import { TFoods, ECartAction } from '../../type';
//context
import cartContext from '../../cartContext';

const FoodCard: FC<TFoods> = ({
  id,
  name,
  image,
  price,
  favorite,
  isInCart,
}) => {
  const { dispatch } = useContext(cartContext);
  return (
    <CardList>
      <CardInfo>
        <Like favorite={favorite}>
          <button
            onClick={() =>
              dispatch({ type: ECartAction.TOGGLE_FAVORITE, payload: id })
            }
          >
            <span>
              <Favorite style={{ fontSize: '30px' }} />
            </span>
          </button>
        </Like>
        <CardImg>
          <Image src={image} />
        </CardImg>
        <Title>{name}</Title>
        <PriceAddGroup>
          <Price>${price}</Price>
          <Add
            isInCart={isInCart}
            onClick={() => {
              dispatch({ type: ECartAction.ADD_TO_CART, payload: id });
              dispatch({ type: ECartAction.TOGGLE_ANIME });
            }}
          >
            <span>
              <AddBox />
            </span>
          </Add>
        </PriceAddGroup>
      </CardInfo>
    </CardList>
  );
};

export default FoodCard;
