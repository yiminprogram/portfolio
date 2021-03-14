import React, { FC, useContext } from 'react';
//style
import {
  Card,
  CardInfo,
  Price,
  Quantity,
  CardImg,
  CardList,
  DeleteBtn,
} from './style';
//type
import { TCart, ECartAction } from '../../type';
//context
import cartContext from '../../cartContext';
//material ui
import { Delete } from '@material-ui/icons';

const CartCard: FC<TCart> = ({ id, name, price, quantity, image }) => {
  const { dispatch } = useContext(cartContext);
  return (
    <CardList>
      <Card>
        <CardInfo>
          <h2>{name}</h2>
          <h3>單價：${price}</h3>
          <Price>
            <span>${price * quantity}</span>
            <Quantity>
              <button
                onClick={() =>
                  dispatch({
                    type: ECartAction.DECREASE_FOOD_QUANTITY,
                    payload: id,
                  })
                }
              >
                <span> - </span>
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  dispatch({
                    type: ECartAction.INCREASE_FOOD_QUANTITY,
                    payload: id,
                  })
                }
              >
                <span> + </span>
              </button>
            </Quantity>
            <DeleteBtn
              onClick={() =>
                dispatch({ type: ECartAction.REMOVE_FROM_CART, payload: id })
              }
            >
              <Delete style={{ fontSize: '25px' }} />
            </DeleteBtn>
          </Price>
        </CardInfo>
        <CardImg>
          <img src={image} alt="error" />
        </CardImg>
      </Card>
    </CardList>
  );
};

export default CartCard;
