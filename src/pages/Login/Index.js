import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.form`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Sign = styled.form`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Form = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  perspective: 1000px;

  &:hover ${Login} {
    transform: rotateY(180deg);
  }
  &:hover ${Sign} {
    transform: rotateY(360deg);
  }
`;

const Index = () => {
  return (
    <Container>
      <Form>
        {/* <Login>
          <h1>Sign up</h1>
          <label htmlFor="email">信箱</label>
          <input id="email" type="text" />
          <label htmlFor="passwords">帳號</label>
          <input id="passwords" type="text" />
        </Login>
        <Sign>
          <h1>Sign in</h1>
          <label htmlFor="email">信箱</label>
          <input id="email" type="text" />
          <label htmlFor="passwords">帳號</label>
          <input id="passwords" type="text" />
        </Sign> */}
      </Form>
    </Container>
  );
};

export default Index;
