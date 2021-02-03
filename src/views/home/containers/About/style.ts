import styled, { keyframes } from 'styled-components';

const circleRotate = keyframes`
to{
  transform:rotate(0);
}
from{
  transform:rotate(360deg)
}
`;

const imageGrow = keyframes`
50%{
  width:100%;
  height:100%;
  border-radius:0;
}
`;

const textGrow = keyframes`
50%{
  width:100%;
}
`;

export const AboutDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto 10rem auto;
  padding: 1rem;

  .about-title {
    margin-bottom: 2rem;
    text-align: center;

    > h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    > a {
      display: inline-block;
      color: ${(p) => p.theme.colors.primary};
      text-decoration: none;
      font-size: 1rem;
      font-weight: 700;
      padding-bottom: 0.2rem;

      &:hover {
        box-shadow: 0 2px 0 ${(p) => p.theme.colors.primary};
      }
    }
  }

  .window {
    width: 100%;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ddd;
    overflow: hidden;
  }

  .bar {
    width: 100%;
    height: 50px;
    background: linear-gradient(#f6f6f6, #e6e6e6);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > span {
      cursor: pointer;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-left: 1rem;
    }
  }

  .close-btn {
    background-color: #ed6a5f;
    :hover {
      background-color: #e83f30;
    }
  }

  .zoom-btn {
    background-color: #f5be4e;
    :hover {
      background-color: #f2ab1c;
    }
  }

  .full-btn {
    background-color: #62c555;
    :hover {
      background-color: #48ab3b;
    }
  }

  .workspace {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .info {
    flex: 1;
    height: 100%;
    padding: 5rem 0 5rem 3rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .item {
    height: 100px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .image {
    width: 85px;
    height: 85px;
    border-radius: 10px;
    background-color: #eaeaea;
    margin-right: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 0%;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(p) => p.theme.colors.primary};
    }
  }

  .item-1 .image::before {
    animation: ${imageGrow} 2s infinite ease-in-out;
  }

  .item-2 .image::before {
    animation: ${imageGrow} 2s infinite ease-in-out;
    animation-delay: 0.5s;
  }

  .item-3 .image::before {
    animation: ${imageGrow} 2s infinite ease-in-out;
    animation-delay: 1s;
  }

  .text {
    width: 300px;
    height: 85px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    > div {
      height: 20px;
      border-radius: 5px;
      background-color: #eaeaea;
    }
  }

  .text-1 {
    width: 300px;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 100%;
      background-color: ${(p) => p.theme.colors.primary};
    }

    @media screen and (max-width: 850px) {
      width: 200px;
    }
  }

  .item-1 .text-1::before {
    animation: ${textGrow} 3s infinite ease-in-out;
  }

  .item-2 .text-1::before {
    animation: ${textGrow} 3s infinite ease-in-out;
    animation-delay: 0.5s;
  }

  .item-3 .text-1::before {
    animation: ${textGrow} 3s infinite ease-in-out;
    animation-delay: 1s;
  }

  .text-2 {
    width: 180px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 100%;
      background-color: ${(p) => p.theme.colors.primary};
    }

    @media screen and (max-width: 850px) {
      width: 100px;
    }
  }

  .item-1 .text-2::before {
    animation: ${textGrow} 3s infinite ease-in-out;
  }

  .item-2 .text-2::before {
    animation: ${textGrow} 3s infinite ease-in-out;
    animation-delay: 0.5s;
  }

  .item-3 .text-2::before {
    animation: ${textGrow} 3s infinite ease-in-out;
    animation-delay: 1s;
  }

  .chart {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .circle {
    width: 300px;
    height: 300px;
    background-color: #eaeaea;
    border-radius: 50%;
    position: relative;
  }

  .quarter {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: ${circleRotate} 5s ease-in-out infinite;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 50%;
      height: 50%;
      border-top-right-radius: 100%;
      background-color: ${(p) => p.theme.colors.primary};
      box-shadow: 0 0 15px #999;
    }
  }
`;
