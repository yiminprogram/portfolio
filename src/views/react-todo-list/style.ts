import styled from 'styled-components';

const style = {
  color: '#1877f2',
  boxShadow: '0 0 0 2px #1877f2',
};

export const TodoList = styled.div`
  ${(props) => props.theme.mixin.page}
`;

export const Container = styled.div`
  padding-top: 5rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  color: ${style.color};
  font-size: 2rem;
  font-weight: 700;
`;

export const UserInput = styled.form`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export const InputTitle = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;

  &:focus {
    outline: none;
    box-shadow: ${style.boxShadow};
  }
`;

export const InputContent = styled.textarea`
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
    box-shadow: ${style.boxShadow};
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  background-color: ${style.boxShadow};
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 10px;
`;
