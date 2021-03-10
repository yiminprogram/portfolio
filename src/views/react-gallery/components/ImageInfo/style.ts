import styled from 'styled-components';

export const ImageInfoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;
export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  overflow: hidden;
  z-index: -1;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5) blur(10px);
  }
`;
export const Info = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-flow: row nowrap;
`;

export const Image = styled.div`
  flex: 2;
  padding: 2rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Detail = styled.div`
  flex: 1;
`;

export const DetailWrapper = styled.div`
  padding: 5rem 3rem;
  color: #fff;
  font-weight: 700;

  .user {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  .user-avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .download {
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;

    > h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    > span {
      font-size: 3rem;
      margin: 0 0.5rem;
    }
  }

  .time {
    text-align: right;
    margin-bottom: 3rem;
  }

  .tag {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 5rem;

    > span {
      padding: 1rem;
      margin: 0.5rem;
      background-color: #666;
      border-radius: 5px;
    }
  }

  .link-btn {
    text-align: center;

    > a {
      display: inline-flex;
      padding: 1rem 2rem;
      color: #fff;
      font-size: 1.5rem;
      text-decoration: none;
      background-color: ${(p) => p.theme.colors.primary};

      > span {
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: ${(p) => p.theme.colors.hover};
      }
    }
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 5%;
  color: #fff;
  background-color: #fff3;
  border: none;
  border-radius: 50%;
  padding: 1rem;

  &:hover {
    background-color: #fff6;
  }
`;
