import { css } from 'styled-components';
const theme = {
  colors: {
    primary: '#1877f2',
  },
  boxShadow: {
    card: '0 0 10px 1px #ddd',
  },
  mixin: {
    page: css`
      min-height: calc(100vh - 35.2px);
      padding: 50px 1rem 0 1rem;
      background-color: #fff;
    `,
    portfolio: css`
      width: 80%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 15rem;
    `,
  },
  todoList: {
    color: '#1877f2',
    boxShadow: '0 0 0 2px #1877f2',
  },
};
export default theme;
