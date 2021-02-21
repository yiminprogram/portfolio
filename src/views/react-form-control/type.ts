export type TNameProps = {
  name: string;
  dispatch: React.Dispatch<TAction>;
};
export type TEmailProps = {
  email: string;
  dispatch: React.Dispatch<TAction>;
};
export type TPasswordProps = {
  password: string;
  dispatch: React.Dispatch<TAction>;
};

export type TQuery = {
  name: string;
  email: string;
  password: string;
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

type TInitial = {
  type: EAction.INITIAL_ALL;
};

export type TAction = TChangeName | TChangeEmail | TChangePassword | TInitial;

export enum EAction {
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  INITIAL_ALL = 'INITIAL_ALL',
}
