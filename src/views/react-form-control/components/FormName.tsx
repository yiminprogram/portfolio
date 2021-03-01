import React, { ChangeEvent, FC, Fragment } from 'react';
//style
import { FormLabel, FormInput, FormMessage, FormGroup } from '../style';
//icons
import { Person, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TNameProps, EAction } from '../type';

const FormName: FC<TNameProps> = ({ dispatch, name, valid }) => {
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: EAction.CHANGE_NAME, payload: value });
  };
  return (
    <FormGroup>
      <FormLabel>
        <Person
          style={{
            fontSize: '1.6rem',
          }}
        />
        <FormInput
          type="text"
          value={name}
          onChange={change}
          placeholder="姓名"
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
            <span>請輸入8~12位半形英文或數字，勿包含其他特殊符號</span>
          </Fragment>
        )}
      </FormMessage>
    </FormGroup>
  );
};

export default FormName;
