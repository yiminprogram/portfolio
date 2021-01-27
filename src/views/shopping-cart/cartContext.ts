import { createContext } from 'react';
//type
import { TContext } from './type';
//initial state
import { initialState } from './reducer';

const cartContext = createContext<TContext>({
  cartState: initialState,
  dispatch: () => null,
});

export default cartContext;
