import React, { FC, useContext } from 'react';
//style
import { LoginInfoDiv } from '../../style';
//context api
import loginContext from '../../ContextAPI';

const LoginInfo: FC = () => {
  const { handleLogin } = useContext(loginContext);
  const logOut = () => {
    localStorage.clear();
    handleLogin(false);
  };
  return (
    <LoginInfoDiv>
      <h1>Wellcome</h1>
      <h2>登入信箱：</h2>
      <h2>{JSON.parse(localStorage.getItem('userInfo')!).email}</h2>
      <button onClick={logOut}>登出</button>
    </LoginInfoDiv>
  );
};

export default LoginInfo;
