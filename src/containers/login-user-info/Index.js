import React from 'react';
import styled from 'styled-components';

const Wellcome = styled.div`
  flex: 0 1 500px;
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem;
  color: #fff;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 10px;

  > h1 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  > button {
    cursor: pointer;
    align-self: flex-end;
    color: #fff;
    background-color: #ff8a65;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: #ff7043;
    }
  }
`;

const Index = ({ setLogin }) => {
  return (
    <Wellcome>
      <h1>Wellcome , XXX</h1>
      <button
        onClick={() => {
          setLogin(false);
        }}
      >
        登 出
      </button>
    </Wellcome>
  );
};

export default Index;
