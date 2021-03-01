import React, { ChangeEvent, FC, Fragment } from 'react';
//style
import { FormLabel, FormInput, FormMessage, FormGroup } from '../style';
//icons
import { Email, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TEmailProps, EAction } from '../type';

const FormEmail: FC<TEmailProps> = ({ dispatch, email, valid }) => {
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: EAction.CHANGE_EMAIL, payload: value });
  };
  return (
    <FormGroup>
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
    </FormGroup>
  );
};

export default FormEmail;
