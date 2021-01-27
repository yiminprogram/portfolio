import React, {
  FC,
  ChangeEvent,
  useState,
  MouseEvent,
  useContext,
} from 'react';
//style
import { CardSignUpDiv, Title, Form, SubmitBtn, GoSignIn } from '../../style';
//type
import { TUserInput, TCardProps } from '../../type';
//context api
import loginContext from '../../ContextAPI';

const CardSignUp: FC<TCardProps> = ({ hasAccount, setHasAccount }) => {
  const signUpDefaultValue: TUserInput = { email: '', password: '' };

  const [signUp, setSignUp] = useState<TUserInput>(signUpDefaultValue);
  const { handleToasts } = useContext(loginContext);
  const userSignUp = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (signUp.email !== '' && signUp.password !== '') {
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ email: signUp.email, password: signUp.password }),
      );
      handleToasts({ open: true, info: 'signUp' });
      setHasAccount!(true);
      setSignUp(signUpDefaultValue);
    } else {
      handleToasts({ open: true, info: 'signUpError' });
    }
  };
  return (
    <CardSignUpDiv hasAccount={hasAccount}>
      <Title>註冊</Title>
      <Form onSubmit={userSignUp}>
        <label>郵件信箱</label>
        <input
          type="email"
          value={signUp.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignUp({ ...signUp, email: e.target.value })
          }
        />
        <label>密碼</label>
        <input
          type="password"
          value={signUp.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignUp({ ...signUp, password: e.target.value })
          }
        />
        <SubmitBtn>
          <button type="submit">註冊</button>
        </SubmitBtn>
      </Form>
      <GoSignIn>
        <span>是否已註冊？</span>
        <button onClick={() => setHasAccount!(true)}>立即登入</button>
      </GoSignIn>
    </CardSignUpDiv>
  );
};

export default CardSignUp;
