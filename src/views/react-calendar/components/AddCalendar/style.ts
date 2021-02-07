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
  border-radius: 10px;
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

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  > label {
    color: #666;
    font-size: 1.3rem;
    font-weight: 700;
    transition: 0.5s;

    &:focus-within {
      color: ${(p) => p.theme.colors.primary};
    }

    > input {
      color: #666;
      width: 100%;
      font-size: 1rem;
      padding: 1rem;
      margin: 1rem 0;
      border: 2px solid #ddd;
      border-radius: 5px;
      transition: 0.5s;

      &:focus {
        color: ${(p) => p.theme.colors.primary};
        outline: none;
        border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
      }
    }
  }
`;
export const TextAreaGroup = styled.div`
  margin-bottom: 1rem;

  > label {
    color: #666;
    font-size: 1.3rem;
    font-weight: 700;
    transition: 0.5s;

    &:focus-within {
      color: ${(p) => p.theme.colors.primary};
    }

    > textarea {
      width: 100%;
      height: 200px;
      resize: none;
      color: #666;
      font-size: 1rem;
      font-family: inherit;
      padding: 1rem;
      margin: 1rem 0;
      border: 2px solid #ddd;
      border-radius: 5px;
      transition: 0.5s;

      &:focus {
        color: ${(p) => p.theme.colors.primary};
        outline: none;
        border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
      }
    }
  }
`;
