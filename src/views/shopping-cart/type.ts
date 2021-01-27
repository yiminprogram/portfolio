export type TFoods = {
  id: number;
  name: string;
  image: string;
  price: number;
  favorite: boolean;
  isInCart: boolean;
};

export type TCart = TFoods & { quantity: number };

export type TCartContext = {
  foods: TFoods[];
  cart: TCart[];
  isCart: boolean;
};

export type TContext = {
  cartState: TCartContext;
  dispatch: React.Dispatch<TCartAction>;
};

type TFetchFoodsdata = {
  type: ECartAction.FETCH_FOODS_DATA;
  payload: TFoods[];
};

type TAddToCart = {
  type: ECartAction.ADD_TO_CART;
  payload: number;
};

type TToggleFavorite = {
  type: ECartAction.TOGGLE_FAVORITE;
  payload: number;
};

type TIcreaseFoodQuantity = {
  type: ECartAction.INCREASE_FOOD_QUANTITY;
  payload: number;
};

type TDecreaseFoodQuantity = {
  type: ECartAction.DECREASE_FOOD_QUANTITY;
  payload: number;
};

type TRemoveFromCard = {
  type: ECartAction.REMOVE_FROM_CART;
  payload: number;
};

type TToggleCart = {
  type: ECartAction.TOGGLE_CART;
};

export type TCartAction =
  | TFetchFoodsdata
  | TAddToCart
  | TToggleFavorite
  | TIcreaseFoodQuantity
  | TDecreaseFoodQuantity
  | TRemoveFromCard
  | TToggleCart;

export enum ECartAction {
  FETCH_FOODS_DATA = 'FETCH_FOODS_DATA',
  ADD_TO_CART = 'ADD_TO_CART',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  INCREASE_FOOD_QUANTITY = 'INCREASE_FOOD_QUANTITY',
  DECREASE_FOOD_QUANTITY = 'DECREASE_FOOD_QUANTITY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  TOGGLE_CART = 'TOGGLE_CART',
}
