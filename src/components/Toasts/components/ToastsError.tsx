import React from 'react';
//style
import * as Toasts from '../style';
//icon
import { ErrorOutline } from '@material-ui/icons';

const ToastsError: React.FC = ({ children }) => {
  return (
    <Toasts.Toasts bgc="#ffcdd2" text="#b71c1c">
      <ErrorOutline />
      <Toasts.Title>{children}</Toasts.Title>
    </Toasts.Toasts>
  );
};

export default ToastsError;
