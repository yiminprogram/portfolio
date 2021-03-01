//type
import { TState, TAction, EAction } from './type';

export const initialState: TState = {
  query: {
    name: '',
    email: '',
    password: '',
    check: false,
  },
  valid: {
    nameValid: null,
    emailValid: null,
    passwordValid: null,
    checkValid: null,
  },
};

const changeName = (state: TState, name: string): TState => {
  let nameValid = false;
  if (/^[a-zA-Z\d]{8,12}$/.test(name)) {
    nameValid = true;
  }
  return {
    ...state,
    query: { ...state.query, name },
    valid: { ...state.valid, nameValid },
  };
};

const changeEmail = (state: TState, email: string): TState => {
  let emailValid = false;
  if (/^[a-zA-Z\d]+@{1}[a-zA-Z\d]+\.+[a-zA-Z]{2,3}$/.test(email)) {
    emailValid = true;
  }
  return {
    ...state,
    query: { ...state.query, email },
    valid: { ...state.valid, emailValid },
  };
};

const changePassword = (state: TState, password: string): TState => {
  let passwordValid = false;
  if (/^[a-zA-Z\d]{8,12}$/.test(password)) {
    passwordValid = true;
  }
  return {
    ...state,
    query: { ...state.query, password },
    valid: { ...state.valid, passwordValid },
  };
};

const changeCheckbox = (state: TState): TState => {
  return {
    ...state,
    query: { ...state.query, check: !state.query.check },
    valid: { ...state.valid, checkValid: !state.valid.checkValid },
  };
};

const initialAll = (): TState => {
  return initialState;
};

const formSubmit = (state: TState): TState => {
  const valid = { ...state.valid };
  if (
    !Object.values(valid).includes(false) &&
    !Object.values(valid).includes(null)
  ) {
    return initialState;
  } else {
    for (let ele in valid) {
      if (valid[ele] === null) {
        valid[ele] = false;
      }
    }
    return { ...state, valid };
  }
};

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.CHANGE_NAME:
      return changeName(state, action.payload);
    case EAction.CHANGE_EMAIL:
      return changeEmail(state, action.payload);
    case EAction.CHANGE_PASSWORD:
      return changePassword(state, action.payload);
    case EAction.CHANGE_CHECKBOX:
      return changeCheckbox(state);
    case EAction.INITIAL_ALL:
      return initialAll();
    case EAction.FORM_SUBMIT:
      return formSubmit(state);
    default:
      return state;
  }
};
