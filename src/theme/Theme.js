import { css } from 'styled-components';
const theme = {
  colors: {
    primary: '#1877f2',
  },
  mixin: {
    page: css`
      min-height: calc(100vh - 30px);
      padding: 3rem 1rem;
      background-color: #fff;
      /* background: linear-gradient(10deg, #1e6aa5, #63bd98); */
    `,
  },
  todoList: {
    color: '#1877f2',
    boxShadow: '0 0 0 2px #1877f2',
  },
};
export default theme;
