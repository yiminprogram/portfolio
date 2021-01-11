import React, {
  FC,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
//style
import {
  Btn,
  Container,
  InputContent,
  InputTitle,
  Title,
  TodoList,
  UserInput,
} from './style';
//functions
import { ScrollTop } from '../../functions/function';
//components
import List from './components/List';
import { ToastsError, ToastsSuccess } from '../../components/Toasts/Index';
//type
import { TShow, TTodo } from './type';

const toasts = (e: string): ReactElement | null => {
  switch (e) {
    case 'success':
      return <ToastsSuccess>待辦事項新增成功</ToastsSuccess>;
    case 'error':
      return <ToastsError>請輸入標題及內容</ToastsError>;
    default:
      return null;
  }
};

const Index: FC = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [show, setShow] = useState<TShow>({
    open: false,
    info: '',
  });
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoContent, setTodoContent] = useState<string>('');

  // add Todo List Event
  const addTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const time = new Date();
    if (todoTitle !== '' && todoContent !== '') {
      const todo = {
        title: todoTitle,
        content: todoContent,
        time: `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`,
        done: false,
      };
      setTodos([todo, ...todos]);
      setShow({ open: true, info: 'success' });
      setTodoTitle('');
      setTodoContent('');
    } else {
      setShow({ open: true, info: 'error' });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow({ ...show, open: false, info: '' });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  // Todo Event Change Done Status
  const todoDone = (time: string) => {
    const index = todos.map((ele) => ele.time).indexOf(time);
    const newArray = [...todos];
    newArray[index] = {
      ...newArray[index],
      done: !newArray[index].done,
    };
    setTodos(newArray);
  };
  ScrollTop();
  return (
    <TodoList>
      <Container>
        {toasts(show.info)}
        <Title>待辦事項</Title>
        <UserInput>
          <InputTitle
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            placeholder="標題"
          />
          <InputContent
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
            placeholder="內容"
          />
          <Btn onClick={addTodo} type="submit">
            新增待辦事項
          </Btn>
        </UserInput>
        <List todos={todos} todoDone={todoDone} />
      </Container>
    </TodoList>
  );
};

export default Index;
