import { css } from 'styled-components';
const theme = {
  colors: {
    primary: '#1877f2',
  },
  mixin: {
    page: css`
      min-height: calc(100vh - 30px);
      padding: 2rem 1rem;
      background-color: #f0f2f5;
    `,
  },
  todoList: {
    color: '#1877f2',
    boxShadow: '0 0 0 2px #1877f2',
  },
};
export default theme;
