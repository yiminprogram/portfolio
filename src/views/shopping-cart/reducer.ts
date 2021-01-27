//type
import { TCartContext, TCartAction, ECartAction, TFoods, TCart } from './type';

export const initialState: TCartContext = {
  foods: [],
  cart: [],
  isCart: false,
};

const fetchFoodsData = (
  state: TCartContext,
  foodsData: TFoods[],
): TCartContext => {
  return { ...state, foods: foodsData };
};

const toggleCart = (state: TCartContext): TCartContext => {
  return { ...state, isCart: !state.isCart };
};

const toggleFavorite = (state: TCartContext, id: number): TCartContext => {
  const newFoods = [...state.foods];
  const idx = newFoods.findIndex((ele) => ele.id === id);
  newFoods[idx] = { ...newFoods[idx], favorite: !newFoods[idx].favorite };
  return { ...state, foods: newFoods };
};

const addToCart = (state: TCartContext, id: number): TCartContext => {
  const food = state.foods.filter((ele) => ele.id === id);
  const newCartFood: TCart = { ...food[0], quantity: 1, isInCart: true };
  const newFoods = [...state.foods];
  const idx = newFoods.findIndex((ele) => ele.id === id);
  newFoods[idx] = { ...newFoods[idx], isInCart: true };

  return { ...state, foods: newFoods, cart: [...state.cart, newCartFood] };
};

const increaseFoodQuantity = (
  state: TCartContext,
  id: number,
): TCartContext => {
  const newCartFoods = [...state.cart];
  const idx = newCartFoods.findIndex((ele) => ele.id === id);
  newCartFoods[idx] = {
    ...newCartFoods[idx],
    quantity: newCartFoods[idx].quantity + 1,
  };
  return { ...state, cart: newCartFoods };
};

const decreaseFoodQuantity = (
  state: TCartContext,
  id: number,
): TCartContext => {
  const newCartFoods = [...state.cart];
  const idx = newCartFoods.findIndex((ele) => ele.id === id);
  newCartFoods[idx] = {
    ...newCartFoods[idx],
    quantity: newCartFoods[idx].quantity - 1,
  };
  return { ...state, cart: newCartFoods };
};

const removeFromCart = (state: TCartContext, id: number): TCartContext => {
  const newCartFoods = [...state.cart];
  const cartIdx = newCartFoods.findIndex((ele) => ele.id === id);
  newCartFoods.splice(cartIdx, 1);
  const newFoods = [...state.foods];
  const foodsIdx = newFoods.findIndex((ele) => ele.id === id);
  newFoods[foodsIdx] = { ...newFoods[foodsIdx], isInCart: false };
  return { ...state, foods: newFoods, cart: newCartFoods };
};

export const reducer = (
  state: TCartContext,
  action: TCartAction,
): TCartContext => {
  switch (action.type) {
    case ECartAction.FETCH_FOODS_DATA:
      return fetchFoodsData(state, action.payload);
    case ECartAction.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    case ECartAction.ADD_TO_CART:
      return addToCart(state, action.payload);
    case ECartAction.INCREASE_FOOD_QUANTITY:
      return increaseFoodQuantity(state, action.payload);
    case ECartAction.DECREASE_FOOD_QUANTITY:
      return decreaseFoodQuantity(state, action.payload);
    case ECartAction.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case ECartAction.TOGGLE_CART:
      return toggleCart(state);
    default:
      return state;
  }
};
