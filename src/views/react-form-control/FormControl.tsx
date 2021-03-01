import React, { FC, useEffect, useReducer, MouseEvent } from 'react';
//style
import {
  FormPage,
  Content,
  Form,
  Title,
  Wallpaper,
  ButtonGroup,
} from './style';
//components
import FormName from './components/FormName';
import FormEmail from './components/FormEmail';
import FormPassword from './components/FormPassword';
import FormCheck from './components/FormCheck';
//reducer
import { reducer, initialState } from './reducer';
//type
import { EAction } from './type';

const FormControl: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  const submit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch({ type: EAction.FORM_SUBMIT });
  };
  const initial = (): void => {
    dispatch({ type: EAction.INITIAL_ALL });
  };
  return (
    <FormPage>
      <Wallpaper>
        <h1>表單處理</h1>
      </Wallpaper>
      <Content>
        <Title>表單處理</Title>
        <Form>
          <FormName
            dispatch={dispatch}
            name={state.query.name}
            valid={state.valid.nameValid}
          />
          <FormEmail
            dispatch={dispatch}
            email={state.query.email}
            valid={state.valid.emailValid}
          />
          <FormPassword
            dispatch={dispatch}
            password={state.query.password}
            valid={state.valid.passwordValid}
          />
          <FormCheck
            dispatch={dispatch}
            check={state.query.check}
            valid={state.valid.checkValid}
          />
          <ButtonGroup>
            <button type="button" onClick={initial}>
              清除全部
            </button>
            <button type="submit" onClick={submit}>
              送出表單
            </button>
          </ButtonGroup>
        </Form>
      </Content>
    </FormPage>
  );
};

export default FormControl;
