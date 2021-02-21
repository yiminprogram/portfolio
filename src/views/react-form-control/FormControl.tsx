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
//reducer
import { reducer, initialQuery } from './reducer';
//type
import { EAction } from './type';

const FormControl: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialQuery);
  useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  const submit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
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
          <FormName dispatch={dispatch} name={state.name} />
          <FormEmail dispatch={dispatch} email={state.email} />
          <FormPassword dispatch={dispatch} password={state.password} />
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
