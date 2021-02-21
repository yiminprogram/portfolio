import React, { ChangeEvent, FC, useState, Fragment } from 'react';
//style
import { FormLabel, FormInput, FormMessage } from '../style';
//icons
import { Person, CheckCircle, Cancel } from '@material-ui/icons';
//type
import { TNameProps, EAction } from '../type';

const FormName: FC<TNameProps> = ({ dispatch, name }) => {
  const [valid, setValid] = useState<boolean | null>(null);
  const change = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (/^[a-zA-Z\d]{8,12}$/.test(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
    dispatch({ type: EAction.CHANGE_NAME, payload: value });
  };
  return (
    <div>
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
    </div>
  );
};

export default FormName;
