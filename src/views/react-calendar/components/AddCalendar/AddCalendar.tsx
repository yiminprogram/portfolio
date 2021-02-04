import React, { useContext, MouseEvent, FormEvent, useState } from 'react';
//style
import { AddCalendarDiv, Form, Group } from './style';
//context
import Context from '../../context';
//type
import { EAction } from '../../type';

const AddCalendar = () => {
  const [time, setTime] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { dispatch } = useContext(Context);
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
      <Form onSubmit={handleSubmit}>
        <Group>
          <label>時間</label>
          <input
            type="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Group>
        <Group>
          <label>活動名稱</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Group>
        <Group>
          <label>活動內容</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </Group>
        <button type="submit">新增行事曆</button>
      </Form>
    </AddCalendarDiv>
  );
};

export default AddCalendar;
