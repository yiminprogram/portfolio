import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
//components
import Wellcome from '../../containers/login-user-info/Index';
import { ToastsError, ToastsSuccess } from '../../components/Toasts/Index';
//material-ui
import Checkbox from '@material-ui/core/Checkbox';
//functions
import { ScrollTop } from '../../functions/Index';

const color = {
  signIn: '#1e88e5',
  signUp: '#43a047',
  hoverSignIn: '#1565c0',
  hoverSignUp: '#2e7d32',
};

const userInfo = {
  email: 'test@email.com',
  password: 'test',
};

const toastsShow = (e) => {
  switch (e) {
    case true:
      return <ToastsSuccess>登入成功</ToastsSuccess>;
    case false:
      return <ToastsError>信箱或密碼輸入錯誤</ToastsError>;
    default:
      return null;
  }
};

const Container = styled.div`
  ${(props) => props.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  flex: 0 1 400px;
  height: 450px;
  perspective: 1000px;
  position: relative;
`;

const CardSignIn = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #bbdefb;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  transition: 1s;
  transform: ${(p) => (p.flip ? 'none' : 'rotateY(180deg)')};
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const CardSignUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #c8e6c9;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  transition: 1s;
  transform: ${(p) => (p.flip ? 'rotateY(180deg)' : 'rotateY(360deg)')};
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavBtn = styled.button`
  cursor: pointer;
  color: #fff;
  padding: 0.8rem 1rem;
  background-color: ${(p) => (p.bgc ? p.bgc : 'transparent')};
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Submit = styled.button`
  cursor: pointer;
  padding: 0.6rem 0;
  font-size: 1.2rem;
  color: #fff;
  background-color: ${(p) => p.bgc};
  border: none;
  border-radius: 10px;
`;

const CheckGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  > input {
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
  }

  > label,
  input {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Index = () => {
  const [state, setState] = useState(true);
  const [toast, setToast] = useState(null);
  const [login, setLogin] = useState(false);
  const signInEmail = useRef();
  const signInPassword = useRef();
  const signUpEmail = useRef();
  const signUpPassword = useRef();
  const flipSignIn = (e) => {
    e.preventDefault();
    setState(true);
  };
  const flipSignUp = (e) => {
    e.preventDefault();
    setState(false);
  };
  const userSignIn = (e) => {
    e.preventDefault();
    const email = signInEmail.current;
    const password = signInPassword.current;
    if (email.value === userInfo.email && password.value === userInfo.password) {
      setLogin(true);
      setToast(true);
    } else {
      setToast(false);
    }
    email.value = '';
    password.value = '';
  };
  const userSignUp = (e) => {
    e.preventDefault();
    const email = signUpEmail.current.value;
    const password = signUpPassword.current.value;
  };
  // toast
  useEffect(() => {
    console.log(toast);
    const timer = setTimeout(() => {
      setToast(null);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [toast]);
  ScrollTop();
  return (
    <Container>
      {console.log('render')}
      {toastsShow(toast)}
      {login ? (
        <Wellcome setLogin={setLogin} />
      ) : (
        <Card>
          <CardSignIn flip={state}>
            <Nav flip={state} bgc={color.signIn}>
              <NavBtn bgc={color.signIn} onClick={flipSignIn}>
                登入
              </NavBtn>
              <NavBtn onClick={flipSignUp}>註冊</NavBtn>
            </Nav>
            <Form>
              <label htmlFor="email">信箱</label>
              <input id="email" type="email" ref={signInEmail} />
              <label htmlFor="passwords">密碼</label>
              <input id="passwords" type="password" ref={signInPassword} />
              <CheckGroup>
                <Checkbox />
                <label>記住我</label>
              </CheckGroup>
              <Submit
                type="submit"
                bgc={color.signIn}
                hover={color.hoverSignIn}
                onClick={userSignIn}
              >
                登入
              </Submit>
            </Form>
          </CardSignIn>
          <CardSignUp flip={state}>
            <Nav flip={state} bgc={color.signUp}>
              <NavBtn onClick={flipSignIn}>登入</NavBtn>
              <NavBtn bgc={color.signUp} onClick={flipSignUp}>
                註冊
              </NavBtn>
            </Nav>
            <Form>
              <label htmlFor="email">信箱</label>
              <input id="email" type="email" ref={signUpEmail} />
              <label htmlFor="passwords">密碼</label>
              <input id="passwords" type="password" ref={signUpPassword} />
              <CheckGroup>
                <Checkbox />
                <label>同意相關隱私權政策</label>
              </CheckGroup>
              <Submit
                type="submit"
                bgc={color.signUp}
                hover={color.hoverSignUp}
                onClick={userSignUp}
              >
                註冊
              </Submit>
            </Form>
          </CardSignUp>
        </Card>
      )}
    </Container>
  );
};

export default Index;
