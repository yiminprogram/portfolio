import styled from 'styled-components';

const style = {
  color: '#1877f2',
  boxShadow: '0 0 0 2px #369e9e',
  marginBottom: '2rem',
};

export const TodoList = styled.div`
  ${(props) => props.theme.mixin.page}
  display:flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #369e9e, #39915f);
`;

export const Container = styled.div`
  flex: 0 1 700px;
  margin: 5rem 0;
  padding: 3rem 5rem;
  background-color: #ffffffbc;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: ${style.marginBottom};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
`;

export const UserInput = styled.form`
  margin-bottom: 3rem;
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: ${style.marginBottom};
  font-size: 1.3rem;
  border: 0;
  border-radius: 5px;
  background-color: #fff;
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
  font-size: 1.3rem;
  border: 0;
  border-radius: 5px;
  background-color: #fff;

  &:focus {
    outline: none;
    box-shadow: ${style.boxShadow};
  }
`;

export const Btn = styled.div`
  text-align: center;
  > button {
    cursor: pointer;
    font-size: 1.3rem;
    letter-spacing: 5px;
    color: #fff;
    background-color: #369e9e;
    padding: 0.8rem 1.3rem;
    border: 0;
    border-radius: 5px;
  }
`;
