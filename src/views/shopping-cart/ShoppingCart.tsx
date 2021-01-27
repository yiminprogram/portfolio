import React, { FC, useEffect, useReducer } from 'react';
//style
import { ShoppinCartPage, List, ProductsList, CartBtn, Title } from './style';
//components
import FoodCard from './components/FoodCard';
import Cart from './components/Cart';
//type
import { TFoods, ECartAction } from './type';
//data
import data from 'src/assets/data/food.json';
//material-ui
import { ShoppingCart as ShoppingCartImg } from '@material-ui/icons';
//context
import CartContext from './cartContext';
//reducer
import { initialState, reducer } from './reducer';

const ShoppingCart: FC = () => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const foods: TFoods[] = data.map((ele) => ({
      ...ele,
      favorite: false,
      isInCart: false,
    }));
    dispatch({ type: ECartAction.FETCH_FOODS_DATA, payload: foods });
  }, []);

  return (
    <ShoppinCartPage>
      {console.log('defends line')}
      <CartContext.Provider value={{ cartState, dispatch }}>
        <ProductsList>
          <Title>商品列表</Title>
          <List>
            {cartState.foods.map((ele) => (
              <FoodCard {...ele} />
            ))}
          </List>
          <Cart />
        </ProductsList>
        <CartBtn>
          <button onClick={() => dispatch({ type: ECartAction.TOGGLE_CART })}>
            <span>
              <ShoppingCartImg />
            </span>
          </button>
        </CartBtn>
      </CartContext.Provider>
    </ShoppinCartPage>
  );
};

export default ShoppingCart;
