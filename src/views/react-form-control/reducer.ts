//type
import { TQuery, TAction, EAction } from './type';

export const initialQuery: TQuery = { name: '', email: '', password: '' };

const changeName = (state: TQuery, payload: string): TQuery => {
  return { ...state, name: payload };
};

const changeEmail = (state: TQuery, payload: string): TQuery => {
  return { ...state, email: payload };
};

const changePassword = (state: TQuery, payload: string): TQuery => {
  return { ...state, password: payload };
};

const initialAll = (): TQuery => {
  return initialQuery;
};

export const reducer = (state: TQuery, action: TAction): TQuery => {
  switch (action.type) {
    case EAction.CHANGE_NAME:
      return changeName(state, action.payload);
    case EAction.CHANGE_EMAIL:
      return changeEmail(state, action.payload);
    case EAction.CHANGE_PASSWORD:
      return changePassword(state, action.payload);
    case EAction.INITIAL_ALL:
      return initialAll();
    default:
      return state;
  }
};
