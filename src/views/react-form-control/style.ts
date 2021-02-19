import theme from 'src/theme/Theme';
import styled from 'styled-components';

type TValidation = {
  validation: null | boolean;
};

const { correct, error } = theme.colors;

export const FormPage = styled.div`
  ${(p) => p.theme.mixin.page};
`;

export const Form = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 5rem;

  > h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  > form {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled.div``;

export const FormLabel = styled.label`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: #f0f0f0;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 5px;

  > span {
    margin: 0 0.5rem;
  }

  > input {
    flex: 1;
    font-size: 1.3rem;
    padding: 1rem;
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;
export const FormMessage = styled.div<TValidation>`
  font-size: 1rem;
  color: ${(p) => (p.validation ? correct : error)};
  display: flex;
  align-items: center;
  padding: 1rem;
  visibility: ${(p) => (p.validation === null ? 'hidden' : 'visible')};

  > span {
    margin: 0 0.5rem;
  }
`;
