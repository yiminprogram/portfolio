import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 2rem;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1.1rem;
  padding: 0.5rem 3rem 0.5rem 1.5rem;
  height: 35px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 5px 1px #ccc;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #1877f2;
  }
`;
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
