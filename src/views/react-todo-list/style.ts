import styled from 'styled-components';

const style = {
  color: '#1877f2',
  boxShadow: '0 0 0 2px #39915f',
  marginBottom: '2rem',
};

export const TodoList = styled.div`
  ${(props) => props.theme.mixin.page}
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #39915f;
`;

export const Container = styled.div`
  flex: 0 1 600px;
  margin: 5rem 0;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: ${style.marginBottom};
  font-size: 2.5rem;
  font-weight: 700;
`;

export const UserInput = styled.form`
  margin-bottom: ${style.marginBottom};
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: ${style.marginBottom};
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  background-color: #f0f0f0;
  &:focus {
    outline: none;
    box-shadow: ${style.boxShadow};
  }
`;

export const InputContent = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  padding: 1rem;
  margin-bottom: ${style.marginBottom};
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  background-color: #f0f0f0;

  &:focus {
    outline: none;
    box-shadow: ${style.boxShadow};
  }
`;

export const Btn = styled.div`
  text-align: center;
  margin-bottom: ${style.marginBottom};
  > button {
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;
    background-color: #39915f;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 5px;
  }
`;
