import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const color = {
  signIn: '#1e88e5',
  signUp: '#43a047',
  hoverSignIn: '#1565c0',
  hoverSignUp: '#2e7d32',
};

const Container = styled.div`
  ${(props) => props.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  flex: 0 1 400px;
  height: 450px;
  perspective: 1000px;
  position: relative;
`;

const SignIn = styled.form`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #bbdefb;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  transition: 1s;
  transform: ${(p) =>
    p.flip ? 'none' : 'rotateY(180deg)'};
  transform-style: preserve-3d;
  backface-visibility: hidden;

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

const SignUp = styled.form`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #c8e6c9;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  transition: 1s;
  transform: ${(p) =>
    p.flip ? 'rotateY(180deg)' : 'rotateY(360deg)'};
  transform-style: preserve-3d;
  backface-visibility: hidden;

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
  background-color: ${(p) =>
    p.bgc ? p.bgc : 'transparent'};
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Submit = styled.button`
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

const Index = () => {
  const [state, setState] = useState(true);
  const flipSignIn = (e) => {
    e.preventDefault();
    setState(true);
  };
  const flipSignUp = (e) => {
    e.preventDefault();
    setState(false);
  };
  return (
    <Container>
      <Form>
        <SignIn flip={state}>
          <Nav flip={state} bgc={color.signIn}>
            <NavBtn bgc={color.signIn} onClick={flipSignIn}>
              登入
            </NavBtn>
            <NavBtn onClick={flipSignUp}>註冊</NavBtn>
          </Nav>
          <label htmlFor="email">信箱</label>
          <input id="email" type="text" />
          <label htmlFor="passwords">密碼</label>
          <input id="passwords" type="text" />
          <CheckGroup>
            <Checkbox />
            <label>記住我</label>
          </CheckGroup>
          <Submit
            bgc={color.signIn}
            hover={color.hoverSignIn}
          >
            登入
          </Submit>
        </SignIn>
        <SignUp flip={state}>
          <Nav flip={state} bgc={color.signUp}>
            <NavBtn onClick={flipSignIn}>登入</NavBtn>
            <NavBtn bgc={color.signUp} onClick={flipSignUp}>
              註冊
            </NavBtn>
          </Nav>
          <label htmlFor="email">信箱</label>
          <input id="email" type="text" />
          <label htmlFor="passwords">密碼</label>
          <input id="passwords" type="text" />
          <CheckGroup>
            <Checkbox />
            <label>同意相關隱私權政策</label>
          </CheckGroup>
          <Submit
            bgc={color.signUp}
            hover={color.hoverSignUp}
          >
            註冊
          </Submit>
        </SignUp>
      </Form>
    </Container>
  );
};

export default Index;
