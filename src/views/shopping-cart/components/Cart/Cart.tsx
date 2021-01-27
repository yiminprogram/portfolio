import React, { FC, useContext } from 'react';
//style
import {
  CartPage,
  CloseCartBtn,
  CartList,
  TotalPrice,
  Price,
  Check,
} from './style';
//components
import CartCard from '../CartCard/CardCart';
//material-ui
import { ArrowRight } from '@material-ui/icons';
//context
import cartContext from '../../cartContext';
//type
import { TCart, ECartAction } from '../../type';

const Cart: FC = () => {
  const {
    cartState: { cart, isCart },
    dispatch,
  } = useContext(cartContext);

  const calculatePrice = (cart: TCart[]): number => {
    return cart.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0);
  };

  return (
    <CartPage isCart={isCart}>
      <CloseCartBtn onClick={() => dispatch({ type: ECartAction.TOGGLE_CART })}>
        <span>
          <ArrowRight />
        </span>
      </CloseCartBtn>
      <h1>購物車</h1>
      <CartList>
        {cart.map((ele) => (
          <CartCard {...ele} />
        ))}
      </CartList>
      <TotalPrice>
        <span>總金額</span>
        <Price>${calculatePrice(cart)}</Price>
      </TotalPrice>
      <Check>結帳</Check>
    </CartPage>
  );
};

export default Cart;
