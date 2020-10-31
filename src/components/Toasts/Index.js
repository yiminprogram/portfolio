import React from 'react';
import styled from 'styled-components';
import {
  CheckCircleOutline,
  ErrorOutline,
} from '@material-ui/icons';

const Toasts = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 350px;
  padding: 1rem;
  color: ${(props) => props.text};
  background-color: ${(props) => props.bgc};
  border-radius: 5px;

  > h1 {
    padding-left: 1rem;
  }
`;

export const ToastsSuccess = ({ children }) => {
  return (
    <Toasts bgc="#c8e6c9" text="#1b5e20">
      <CheckCircleOutline />
      <h1>{children}</h1>
    </Toasts>
  );
};

export const ToastsError = ({ children }) => {
  return (
    <Toasts bgc="#ffcdd2" text="#b71c1c">
      <ErrorOutline />
      <h1>{children}</h1>
    </Toasts>
  );
};
