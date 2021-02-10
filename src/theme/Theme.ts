import { css } from 'styled-components';

const theme = {
  colors: {
    primary: '#527afe',
    hover: '#3463fe',
    light: '#809efe',
  },
  boxShadow: {
    card: '0 0 10px 1px #ddd',
  },
  mixin: {
    page: css`
      min-height: 100vh;
      margin-top: 50px;
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
