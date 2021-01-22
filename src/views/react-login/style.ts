import styled, { css } from 'styled-components';
//type
import { TCardProps } from './type';

const style = {
  primaryColor: '#3a4ea6',
  marginBottom: '2rem',
  card: css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2rem;
    border-radius: 5px;
    transition: 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    background-color: #ffffffbb;
  `,
  goSignInUp: css`
    display: flex;
    align-items: center;
    > button {
      cursor: pointer;
      margin-left: 1rem;
      padding: 0.3rem 1rem;
      border: 0;
      border-radius: 5px;
      font-size: 1rem;
      color: #fff;
      background-color: #3a4ea6;
    }
  `,
};

export const LoginPage = styled.div`
  ${(props) => props.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #3a4ea6, #853eb0);
`;

export const UserFormDiv = styled.div`
  flex: 0 1 400px;
  height: 450px;
  background-color: transparent;
  border-radius: 5px;
  perspective: 1000px;
  position: relative;
`;

export const CardSignInDiv = styled.div<TCardProps>`
  ${style.card};
  transform: ${({ hasAccount }) => (hasAccount ? 'none' : 'rotateY(180deg)')};
`;
export const CardSignUpDiv = styled.div<TCardProps>`
  ${style.card};
  transform: ${({ hasAccount }) =>
    hasAccount ? 'rotateY(180deg)' : 'rotateY(360deg)'};
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: ${style.marginBottom};
`;
export const Form = styled.form`
  margin-bottom: ${style.marginBottom};
  > label {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  > input {
    width: 100%;
    margin-bottom: ${style.marginBottom};
    padding: 0.8rem;
    font-size: 1rem;
    border: 0;
    border-radius: 5px;
    background-color: #f0f0f0;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #3a4ea6;
    }
  }
`;
export const SubmitBtn = styled.div`
  > button {
    cursor: pointer;
    width: 100%;
    letter-spacing: 5px;
    text-indent: 5px;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    border: 0;
    border-radius: 5px;
    color: #fff;
    background-color: ${style.primaryColor};
  }
`;

export const GoSignUp = styled.div`
  ${style.goSignInUp};
`;

export const GoSignIn = styled.div`
  ${style.goSignInUp};
`;

export const LoginInfoDiv = styled.div`
  flex: 0 1 400px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #ffffffbb;

  > h1 {
    margin-bottom: ${style.marginBottom};
    font-size: 2rem;
    font-weight: 700;
    color: #333;
  }

  > h2 {
    margin-bottom: ${style.marginBottom};
    font-size: 1.5rem;
  }
  > button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    letter-spacing: 5px;
    text-indent: 5px;
    font-size: 1rem;
    color: #fff;
    background-color: ${style.primaryColor};
    border: 0;
    border-radius: 5px;
  }
`;
