import React, { ChangeEvent, FC, Fragment, useState } from 'react';
//style
import { FormLabel, FormInput, FormMessage } from '../style';
//icons
import { Email, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TPasswordProps, EAction } from '../type';

const FormPassword: FC<TPasswordProps> = ({ dispatch, password }) => {
  const [valid, setValid] = useState<boolean | null>(null);
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (/^[a-zA-Z\d]{8,12}$/.test(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
    dispatch({ type: EAction.CHANGE_PASSWORD, payload: value });
  };
  return (
    <div>
      <FormLabel>
        <Email
          style={{
            fontSize: '1.6rem',
          }}
        />
        <FormInput
          type="text"
          value={password}
          onChange={change}
          placeholder="密碼"
        />
      </FormLabel>
      <FormMessage valid={valid}>
        {valid ? (
          <Fragment>
            <CheckCircle />
            <span>輸入完成</span>
          </Fragment>
        ) : (
          <Fragment>
            <Cancel />
            <span>請輸入8~12位半形英文或數字</span>
          </Fragment>
        )}
      </FormMessage>
    </div>
  );
};

export default FormPassword;
