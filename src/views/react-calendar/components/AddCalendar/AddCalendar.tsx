import React, { useContext, MouseEvent, FormEvent, useState, FC } from 'react';
//style
import { AddCalendarDiv, Form, InputGroup, TextAreaGroup } from './style';
//context
import Context from '../../context';
//type
import { EAction } from '../../type';

const convertDate = (currentDate: Date): string => {
  const initial = currentDate.toLocaleDateString().split('/');
  let year = initial[0];
  let month = Number(initial[1]) < 10 ? `0${initial[1]}` : initial[1];
  let date = Number(initial[2]) < 10 ? `0${initial[2]}` : initial[2];
  return `${year}-${month}-${date}`;
};

const AddCalendar: FC = () => {
  const {
    context: { currentDate },
    dispatch,
  } = useContext(Context);
  const date = convertDate(currentDate);
  const [time, setTime] = useState<string>(date);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const closeForm = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      dispatch({ type: EAction.SHOW_FORM });
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({
      type: EAction.ADD_NEW_CALENDAR,
      payload: { id: new Date(time), title, content },
    });
  };
  return (
    <AddCalendarDiv onClick={closeForm}>
      {console.log('form')}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label>
            時間
            <input
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
        </InputGroup>
        <InputGroup>
          <label>
            活動名稱
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </InputGroup>
        <TextAreaGroup>
          <label>
            活動內容
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
        </TextAreaGroup>
        <button type="submit">新增行事曆</button>
      </Form>
    </AddCalendarDiv>
  );
};

export default AddCalendar;
