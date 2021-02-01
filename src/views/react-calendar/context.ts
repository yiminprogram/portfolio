import { createContext } from 'react';
//type
import { TContext } from './type';
//initial state
import { initialState } from './reducer';

const context = createContext<TContext>({
  context: initialState,
  dispatch: () => null,
});

export default context;
