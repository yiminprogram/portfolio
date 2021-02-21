import React, { ChangeEvent, FC, Fragment, useState } from 'react';
//style
import { FormLabel, FormInput, FormMessage } from '../style';
//icons
import { Email, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TEmailProps, EAction } from '../type';

const FormEmail: FC<TEmailProps> = ({ dispatch, email }) => {
  const [valid, setValid] = useState<boolean | null>(null);
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (/^[a-zA-Z\d]+@{1}[a-zA-Z\d]+\.+[a-zA-Z]{2,3}$/.test(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
    dispatch({ type: EAction.CHANGE_EMAIL, payload: value });
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
          value={email}
          onChange={change}
          placeholder="Email"
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
            <span>請輸入正確Email之格式，ex.xxx@xxx.xxx</span>
          </Fragment>
        )}
      </FormMessage>
    </div>
  );
};

export default FormEmail;
