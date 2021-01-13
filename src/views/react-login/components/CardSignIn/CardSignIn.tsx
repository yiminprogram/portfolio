import React, {
  FC,
  MouseEvent,
  ChangeEvent,
  useState,
  useContext,
} from 'react';
//style
import { CardSignInDiv, Title, Form, SubmitBtn, GoSignUp } from '../../style';
//type
import { TUserInput, TCardProps } from '../../type';
//context api
import loginContext from '../../ContextAPI';

const CardSignIn: FC<TCardProps> = ({ hasAccount, setHasAccount }) => {
  const signInDefaultValue: TUserInput = { email: '', password: '' };

  const [signIn, setSignIn] = useState<TUserInput>(signInDefaultValue);
  const { handleLogin, handleToasts } = useContext(loginContext);

  const userSignIn = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localUserInfo = localStorage.getItem('userInfo');
    let userInfo: TUserInput;
    if (localUserInfo) {
      userInfo = JSON.parse(localUserInfo);
      if (
        signIn.email === userInfo.email &&
        signIn.password === userInfo.password
      ) {
        handleToasts({ open: true, info: 'signIn' });
        setSignIn(signInDefaultValue);
        handleLogin(true);
        localStorage.setItem('isLogin', 'true');
      } else {
        handleToasts({ open: true, info: 'signInError' });
      }
    } else {
      handleToasts({ open: true, info: 'signInError' });
    }
  };
  return (
    <CardSignInDiv hasAccount={hasAccount}>
      <Title>登入</Title>
      <Form onSubmit={userSignIn}>
        <label>郵件信箱</label>
        <input
          type="email"
          value={signIn.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignIn({ ...signIn, email: e.target.value })
          }
        />
        <label>密碼</label>
        <input
          type="password"
          value={signIn.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignIn({ ...signIn, password: e.target.value })
          }
        />
        <SubmitBtn>
          <button type="submit">登入</button>
        </SubmitBtn>
      </Form>
      <GoSignUp>
        <span>是否還未註冊？</span>
        <button onClick={() => setHasAccount!(false)}>立即註冊</button>
      </GoSignUp>
    </CardSignInDiv>
  );
};

export default CardSignIn;
