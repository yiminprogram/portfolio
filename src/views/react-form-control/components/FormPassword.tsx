import React, { ChangeEvent, FC, Fragment } from 'react';
//style
import { FormLabel, FormInput, FormMessage, FormGroup } from '../style';
//icons
import { Email, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TPasswordProps, EAction } from '../type';

const FormPassword: FC<TPasswordProps> = ({ dispatch, password, valid }) => {
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: EAction.CHANGE_PASSWORD, payload: value });
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
    </FormGroup>
  );
};

export default FormPassword;
