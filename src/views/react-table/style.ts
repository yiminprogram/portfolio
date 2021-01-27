import styled from 'styled-components';

export const ReactTableDiv = styled.div`
  ${(p) => p.theme.mixin.page};
  background: linear-gradient(150deg, #cc3b8a, #d6693e);
  padding: 5rem 1rem;
`;

export const SearchBarDiv = styled.div`
  max-width: 350px;
  margin: 3rem auto;
`;
export const InputGroup = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  > input {
    width: 100%;
    color: #fff;
    background-color: transparent;
    font-size: 1.3rem;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 5px;

    &::placeholder {
      color: #ffffffaa;
    }

    &:focus {
      outline: none;
      box-shadow: 5px 5px 10px #7a1f51;
    }
  }

  > button {
    cursor: pointer;
    position: absolute;
    top: 20%;
    right: 0;
    color: #fff;
    border: 0;
    background-color: transparent;
  }
`;

export const TableDiv = styled.div`
  max-width: 950px;
  margin: 0 auto;
  overflow-x: auto;

  table {
    width: 100%;
    color: #fff;
    border-collapse: collapse;

    tbody tr:hover {
      cursor: pointer;
      background-color: #ffffff33;
    }

    th,
    td {
      padding: 1rem 2rem;
      text-align: center;
      vertical-align: middle;
    }

    th {
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 700;
      background-color: #7a1f51bb;

      &:hover {
        background-color: #7a1f5188;
      }

      &:first-child {
        border-top-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
      }

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    td {
      font-size: 1.3rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;
