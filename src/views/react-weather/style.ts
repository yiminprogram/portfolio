import styled from 'styled-components';

const style = {
  marginBottom: '2rem',
  primary: '#3a79b0',
};

export const WeatherPage = styled.div`
  ${(p) => p.theme.mixin.page};
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #3a79b0, #3ab0a8);
`;

export const SearchForm = styled.form`
  flex: 0 1 400px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #ffffffbb;

  > h1 {
    color: #333;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: ${style.marginBottom};
  }

  > input {
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    margin-bottom: ${style.marginBottom};
    border: 0;
    border-radius: 5px;
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0.5rem 1rem;
  letter-spacing: 5px;
  font-size: 1.3rem;
  color: #fff;
  background-color: ${style.primary};
  border: 0;
  border-radius: 5px;
`;

export const WeatherInfoDiv = styled.div`
  flex: 0 1 500px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    flex: 0 1 400px;
  }
`;

export const Info = styled.div`
  flex: 1;

  padding: 1.5rem;

  > h1,
  > h2 {
    color: #333;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  > h1 {
    font-size: 2.5rem;
  }
  > h2 {
    font-size: 1.5rem;
  }
  > h3 {
    color: #aaa;
    font-size: 1rem;
  }
`;
export const WeatherImg = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;

  > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    letter-spacing: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background-color: #3ab0a8;
    box-shadow: 5px 5px 5px #555;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
    border: 0;
    border-radius: 5px;

    > span {
      margin-left: 1rem;
    }
  }
`;
