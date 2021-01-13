import React, { FC, ReactElement, useEffect, useState } from 'react';
//style
import { LoginPage } from './style';
//components
import UserForm from './containers/UserForm';
import LoginInfo from './containers/LoginInfo';
//context api
import loginContext from './ContextAPI';
//components
import { ToastsError, ToastsSuccess } from '../../components/Toasts/Index';
//type
import { TToasts } from './type';
//functions
import { ScrollTop } from '../../functions/function';

const toastsShow = (e: string): ReactElement | null => {
  switch (e) {
    case 'signIn':
      return <ToastsSuccess>登入成功</ToastsSuccess>;
    case 'signUp':
      return <ToastsSuccess>註冊成功</ToastsSuccess>;
    case 'signInError':
      return <ToastsError>登入失敗，請輸入正確郵件信箱以及密碼</ToastsError>;
    case 'signUpError':
      return <ToastsError>註冊失敗，請輸入正確郵件信箱以及密碼</ToastsError>;
    default:
      return null;
  }
};
const Login: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [toasts, setToasts] = useState<TToasts>({ open: false, info: '' });
  useEffect(() => {
    const loginState = localStorage.getItem('isLogin');
    if (loginState) {
      setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts({ open: false, info: '' });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [toasts]);
  const handleLogin = (isLogin: boolean): void => {
    setIsLogin(isLogin);
  };
  const handleToasts = ({
    open,
    info,
  }: {
    open: boolean;
    info: string;
  }): void => {
    setToasts({ open, info });
  };
  ScrollTop();
  return (
    <LoginPage>
      {toastsShow(toasts.info)}
      <loginContext.Provider value={{ handleLogin, handleToasts }}>
        {isLogin ? <LoginInfo /> : <UserForm />}
      </loginContext.Provider>
    </LoginPage>
  );
};

export default Login;
