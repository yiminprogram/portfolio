import styled from 'styled-components';

type TChecked = {
  isChecked: boolean;
};

export const Page = styled.div<TChecked>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000000d6;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(p) => (p.isChecked ? 'visiable' : 'hidden')};
`;

export const Info = styled.div`
  flex: 0 1 600px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;

  > h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 30px;
    margin-bottom: 2rem;
  }

  > button {
    cursor: pointer;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 30px;
    color: #fff;
    background-color: #34b776;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 0;

    &:hover {
      background-color: #278b59;
    }

    &:active {
      background-color: #34b776;
    }
  }
`;

export const Image = styled.div`
  max-width: 65%;
  margin: 0 auto 3rem auto;

  > img {
    width: 100%;
  }
`;
