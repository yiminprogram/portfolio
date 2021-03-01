import React, { FC, Fragment } from 'react';
//style
import { FormCheckbox, FormMessage } from '../style';
//icons
import {
  Cancel,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckCircle,
} from '@material-ui/icons';
//type
import { EAction, TCheckProps } from '../type';

const FormCheck: FC<TCheckProps> = ({ dispatch, check, valid }) => {
  const change = () => {
    dispatch({ type: EAction.CHANGE_CHECKBOX });
  };
  return (
    <FormCheckbox>
      <label>
        <span className="check-area">
          <input
            className="checkbox"
            type="checkbox"
            checked={check}
            onChange={change}
          />
          <CheckBox className="check" />
          <CheckBoxOutlineBlank className="blank" />
        </span>
        <span className="text">同意隱私權政策</span>
      </label>
      <FormMessage valid={valid}>
        {valid ? (
          <Fragment>
            <CheckCircle />
            <span>輸入完成</span>
          </Fragment>
        ) : (
          <Fragment>
            <Cancel />
            <span>請勾選</span>
          </Fragment>
        )}
      </FormMessage>
    </FormCheckbox>
  );
};

export default FormCheck;
