import React, { ChangeEvent, FC, useState } from 'react';
//style
import { FormPage, Form, FormGroup } from './style';
//material ui
import { Person, Email, CheckCircle } from '@material-ui/icons';

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
  ONLYENGLISH = '請輸入英文a到z，或A到Z字元',
}

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
  const queryName = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[a-zA-Z]/;
    console.log(e.target.value);
    if (pattern.test(e.target.value)) {
      setMessage({ ...message, name: EMessage.CORRECT });
      setValidation({ ...validation, name: true });
    } else if (!pattern.test(e.target.value)) {
      setMessage({ ...message, name: EMessage.ONLYENGLISH });
      setValidation({ ...validation, name: false });
    }
    setQuery({ ...query, name: e.target.value });
  };
  return (
    <FormPage>
      <Form>
        <h1>表單驗證</h1>
        <form>
          <FormGroup validation={validation.name}>
            <input type="text" value={query.name} onChange={queryName} />
            <label>
              <Person style={{ fontSize: '1.6rem' }} />
              <span>姓名{validation.name}</span>
            </label>
            <div className="message">
              <span className="icon">
                <CheckCircle />
              </span>
              <span>{message.name}</span>
            </div>
          </FormGroup>
        </form>
      </Form>
    </FormPage>
  );
};

export default FormControl;
