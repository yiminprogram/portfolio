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

export const FormGroup = styled.div<TValidation>`
  position: relative;

  > label {
    font-size: 1.3rem;
    font-weight: 700;
    position: absolute;
    left: 3%;
    top: 13%;
    display: inline-flex;
    align-items: center;

    > span {
      margin-left: 0.5rem;
    }
  }

  > input {
    font-size: 1.3rem;
    width: 100%;
    padding: 1rem;
    padding-left: 7rem;
    border: none;
    background-color: #f0f0f0;
    border-radius: 5px;

    &:focus {
      outline: none;
      background-color: transparent;
      box-shadow: 0 0 5px #aaa;
    }
  }

  .message {
    font-size: 1rem;
    color: ${(p) => (p.validation ? correct : error)};
    display: flex;
    align-items: center;
    padding: 1rem;

    > span {
      margin: 0 0.5rem;
    }

    .icon {
      visibility: ${(p) => (p.validation === null ? 'hidden' : 'visible')};
    }
  }
`;
