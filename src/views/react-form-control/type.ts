export type TNameProps = {
  name: string;
  valid: boolean | null;
  dispatch: React.Dispatch<TAction>;
};

export type TEmailProps = {
  email: string;
  valid: boolean | null;
  dispatch: React.Dispatch<TAction>;
};

export type TPasswordProps = {
  password: string;
  valid: boolean | null;
  dispatch: React.Dispatch<TAction>;
};

export type TCheckProps = {
  check: boolean;
  valid: boolean | null;
  dispatch: React.Dispatch<TAction>;
};

export type TState = {
  query: TQuery;
  valid: TValid;
};

export type TQuery = {
  name: string;
  email: string;
  password: string;
  check: boolean;
};

export type TValid = {
  nameValid: boolean | null;
  emailValid: boolean | null;
  passwordValid: boolean | null;
  checkValid: boolean | null;
  [key: string]: boolean | null;
};

type TChangeName = {
  type: EAction.CHANGE_NAME;
  payload: string;
};

type TChangeEmail = {
  type: EAction.CHANGE_EMAIL;
  payload: string;
};

type TChangePassword = {
  type: EAction.CHANGE_PASSWORD;
  payload: string;
};

type TChangeCheckbox = {
  type: EAction.CHANGE_CHECKBOX;
};

type TInitial = {
  type: EAction.INITIAL_ALL;
};

type TSubmit = {
  type: EAction.FORM_SUBMIT;
};

export type TAction =
  | TChangeName
  | TChangeEmail
  | TChangePassword
  | TChangeCheckbox
  | TInitial
  | TSubmit;

export enum EAction {
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_CHECKBOX = 'CHANGE_CHECKBOX',
  INITIAL_ALL = 'INITIAL_ALL',
  FORM_SUBMIT = 'FORM_SUBMIT',
}
