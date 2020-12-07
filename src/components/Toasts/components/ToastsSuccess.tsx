import React from 'react';
//style
import * as Toasts from '../style';
//icon
import { CheckCircleOutline } from '@material-ui/icons';

const ToastsSuccess: React.FC = ({ children }) => {
  return (
    <Toasts.Toasts bgc="#c8e6c9" text="#1b5e20">
      <CheckCircleOutline />
      <Toasts.Title>{children}</Toasts.Title>
    </Toasts.Toasts>
  );
};

export default ToastsSuccess;
