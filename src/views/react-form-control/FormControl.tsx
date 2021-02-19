import React, { ChangeEvent, FC, useState } from 'react';
//style
import { FormPage, Form, FormGroup, FormLabel, FormMessage } from './style';
//material ui
import { Person, Email, Lock, CheckCircle } from '@material-ui/icons';

type TQuery = {
  name: string;
  email: string;
  password: string;
};
type Tvalidation = {
  name: null | boolean;
  email: null | boolean;
  password: null | boolean;
};
enum EMessage {
  CORRECT = '輸入完成',
  NAMEERROR = '請輸入8~12位半形英文或數字，勿包含其他特殊符號',
  EMAILERROR = '請輸入正確Email之格式，ex.xxx@xxx.xxx',
  PASSWORDERROR = '請輸入8~12位半形英文或數字',
}

type TPatter = {
  namePattern: RegExp;
  emailPattern: RegExp;
  passwordPattern: RegExp;
};

const patterns: TPatter = {
  namePattern: /^[a-zA-Z\d]{8,12}$/,
  emailPattern: /^[a-zA-Z\d]+@{1}[a-zA-Z\d]+\.+[a-zA-Z]{2,3}$/,
  passwordPattern: /^[a-zA-Z\d]{8,12}$/,
};

const initialQuery: TQuery = { name: '', email: '', password: '' };

const initialValidation: Tvalidation = {
  name: null,
  email: null,
  password: null,
};

const FormControl: FC = () => {
  const [query, setQuery] = useState<TQuery>(initialQuery);
  const [validation, setValidation] = useState(initialValidation);
  const [message, setMessage] = useState<TQuery>(initialQuery);
  const queryName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (patterns.namePattern.test(value)) {
      setMessage({ ...message, name: EMessage.CORRECT });
      setValidation({ ...validation, name: true });
    } else {
      setMessage({ ...message, name: EMessage.NAMEERROR });
      setValidation({ ...validation, name: false });
    }
    setQuery({ ...query, name: value });
  };
  const queryEmail = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (patterns.emailPattern.test(value)) {
      setMessage({ ...message, email: EMessage.CORRECT });
      setValidation({ ...validation, email: true });
    } else {
      setMessage({ ...message, email: EMessage.EMAILERROR });
      setValidation({ ...validation, email: false });
    }
    setQuery({ ...query, email: value });
  };
  const queryPassword = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (patterns.passwordPattern.test(value)) {
      setMessage({ ...message, password: EMessage.CORRECT });
      setValidation({ ...validation, password: true });
    } else {
      setMessage({ ...message, password: EMessage.EMAILERROR });
      setValidation({ ...validation, password: false });
    }
    setQuery({ ...query, password: value });
  };
  return (
    <FormPage>
      <Form>
        <h1>表單驗證</h1>
        <form>
          <FormGroup>
            <FormLabel>
              <Person
                style={{
                  fontSize: '1.6rem',
                }}
              />
              <input
                type="text"
                value={query.name}
                onChange={queryName}
                placeholder="姓名"
              />
            </FormLabel>
            <FormMessage validation={validation.name}>
              <span>
                <CheckCircle />
              </span>
              <span>{message.name}</span>
            </FormMessage>
          </FormGroup>
          <FormGroup>
            <FormLabel>
              <Email
                style={{
                  fontSize: '1.6rem',
                }}
              />
              <input
                type="text"
                value={query.email}
                onChange={queryEmail}
                placeholder="Email"
              />
            </FormLabel>
            <FormMessage validation={validation.email}>
              <span>
                <CheckCircle />
              </span>
              <span>{message.email}</span>
            </FormMessage>
          </FormGroup>
          <FormGroup>
            <FormLabel>
              <Lock
                style={{
                  fontSize: '1.6rem',
                }}
              />
              <input
                type="text"
                value={query.password}
                onChange={queryPassword}
                placeholder="密碼"
              />
            </FormLabel>
            <FormMessage validation={validation.password}>
              <span>
                <CheckCircle />
              </span>
              <span>{message.password}</span>
            </FormMessage>
          </FormGroup>
        </form>
      </Form>
    </FormPage>
  );
};

export default FormControl;
