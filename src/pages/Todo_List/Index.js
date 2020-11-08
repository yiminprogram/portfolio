import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// Containers
import List from '../../containers/Todo-List/Index';
import {
  ToastsError,
  ToastsSuccess,
} from '../../components/Toasts/Index';

const TodoList = styled.div`
  ${(props) => props.theme.mixin.page}
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.todoList.color};
  font-size: 2rem;
  font-weight: 700;
`;

const UserInput = styled.form`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const InputTitle = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.theme.todoList.boxShadow};
  }
`;

const InputContent = styled.textarea`
  resize: none;
  width: 300px;
  height: 100px;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.theme.todoList.boxShadow};
  }
`;

const Btn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) =>
    props.theme.todoList.color};
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 10px;
`;

const toastsShow = (e) => {
  switch (e) {
    case 'success':
      return (
        <ToastsSuccess>待辦事項新增成功</ToastsSuccess>
      );
    case 'error':
      return <ToastsError>請輸入標題及內容</ToastsError>;
    default:
      return null;
  }
};

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState({
    open: false,
    info: '',
  });
  const todoTitle = useRef();
  const todoContent = useRef();
  // add Todo List Event
  const addTodo = (e) => {
    e.preventDefault();
    const time = new Date();
    if (
      todoTitle.current.value !== '' &&
      todoContent.current.value !== ''
    ) {
      const todo = {
        title: todoTitle.current.value,
        content: todoContent.current.value,
        time: `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`,
        done: false,
      };
      setTodos([todo, ...todos]);
      setShow({ open: true, info: 'success' });
      todoTitle.current.value = '';
      todoContent.current.value = '';
    } else {
      setShow({ open: true, info: 'error' });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow({ ...show, open: false, info: null });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  // Todo Event Change Done Status
  const todoDone = (time) => {
    const index = todos
      .map((ele) => ele.time)
      .indexOf(time);
    const newArray = [...todos];
    newArray[index] = {
      ...newArray[index],
      done: !newArray[index].done,
    };
    setTodos(newArray);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <TodoList>
      {toastsShow(show.info)}
      <Title>待辦事項</Title>
      <UserInput>
        <InputTitle
          type="text"
          ref={todoTitle}
          placeholder="標題"
        />
        <InputContent
          type="text"
          ref={todoContent}
          placeholder="內容"
        />
        <Btn onClick={addTodo} type="submit">
          新增待辦事項
        </Btn>
      </UserInput>
      <List todos={todos} todoDone={todoDone} />
    </TodoList>
  );
};

export default Index;
