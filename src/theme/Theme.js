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
    logo: css`
      flex: 0 1 600px;
      padding: 1.5rem;
      transition: 0.5s all ease;
      > img {
        width: 100%;
        object-fit: cover;
      }
    `,
  },
};
export default theme;
