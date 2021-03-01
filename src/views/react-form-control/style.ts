import theme from 'src/theme/Theme';
import styled from 'styled-components';
//wallpaper
import wallpaper from 'src/assets/image/lighthouse.jpg';

type TValidation = {
  valid: null | boolean;
};

const { correct, error } = theme.colors;

export const FormPage = styled.div`
  ${(p) => p.theme.mixin.page};
  display: flex;
  overflow: hidden;
`;

export const Wallpaper = styled.div`
  padding: 3rem;
  flex: 0 1 30%;
  background: url(${wallpaper});
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 25px #333;
  position: relative;
  z-index: 0;

  > h1 {
    color: #fffa;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #0003;
    z-index: -1;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 0 1 70%;
  padding: 5rem 1rem;

  @media screen and (max-width: 992px) {
    flex: 0 1 100%;
  }
`;

export const Title = styled.h1`
  display: none;
  color: ${(p) => p.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const Form = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0 1rem;
  font-size: 1.3rem;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const FormMessage = styled.div<TValidation>`
  font-size: 1rem;
  color: ${(p) => (p.valid ? correct : error)};
  display: flex;
  align-items: center;
  padding: 1rem;
  visibility: ${(p) => (p.valid === null ? 'hidden' : 'visible')};

  > span {
    margin: 0 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  padding: 1rem;
  text-align: center;

  > button {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.primary};
    color: #fff;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
  }
`;

export const FormCheckbox = styled.div`
  margin-bottom: 2rem;

  label {
    padding-left: 1rem;
  }
  .check-area {
    position: relative;
    width: 24px;
    height: 24px;
  }
  .checkbox {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(1.3);
  }
  .check {
    position: absolute;
    top: 0;
    left: 0;
    color: ${(p) => p.theme.colors.primary};
    opacity: 0;
    transition: 0.1s;
  }
  .blank {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(p) => p.theme.colors.primary};
  }
  .text {
    font-size: 1.1rem;
    margin: 0 1.5rem;
  }
  .checkbox:checked + .check {
    opacity: 1;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
