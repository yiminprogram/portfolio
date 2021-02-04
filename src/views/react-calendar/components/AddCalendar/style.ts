import styled from 'styled-components';

export const AddCalendarDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #000000aa;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  flex: 0 1 500px;
  padding: 2rem;
  border-radius: 20px;
  background-color: #fff;

  > button {
    cursor: pointer;
    width: 100%;
    color: #fff;
    background-color: ${(p) => p.theme.colors.primary};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`;

export const Group = styled.div`
  margin-bottom: 1rem;

  > label {
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  > input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #e6e6e6;
    font-size: 1rem;
    font-family: inherit;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
    }
  }

  > textarea {
    width: 100%;
    height: 150px;
    padding: 1rem;
    resize: none;
    border: none;
    border-radius: 5px;
    background-color: #e6e6e6;
    font-size: 1rem;
    font-family: inherit;

    &:focus {
      outline: none;
    }
  }
`;
