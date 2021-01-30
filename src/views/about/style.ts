import styled from 'styled-components';
//image
import Wallpaper from 'src/assets/image/wallpaper.jpg';

type TPercentage = {
  percentage: string;
  scroll: boolean;
};

export const AboutDiv = styled.div`
  ${(p) => p.theme.mixin.page};
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 5rem;
  background-image: url(${Wallpaper});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000aa;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
`;

export const Introduce = styled.article`
  color: #333;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 5rem auto;
  padding: 2rem;
  line-height: 2;
  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 30px;
    text-indent: 30px;
  }
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const Skill = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 auto 5rem auto;
`;

export const Language = styled.div`
  flex: 0 1 400px;
  color: ${(p) => p.color};
  margin: 0 2rem 5rem 2rem;
  display: flex;
  align-items: center;

  > span {
    flex: 1;
    font-size: 1.5rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;
export const Bar = styled.div<TPercentage>`
  flex: 2;
  > div {
    width: ${({ scroll, percentage }) => (scroll ? `${percentage}` : 0)};
    height: 20px;
    background: linear-gradient(150deg, #51aded, #5761e0);
    border-radius: 20px;
    transition: 1s linear;
  }
`;

export const Contact = styled.div`
  max-width: 1000px;
  margin: 0 auto 5rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export const ContactImg = styled.div`
  flex: 0 1 500px;
  padding: 3.5rem;
  > img {
    width: 100%;
  }
`;
export const ContactInfo = styled.div`
  flex: 0 1 500px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 5rem;
  color: #333;

  > h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;
export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  > span {
    margin-left: 0.5rem;
    white-space: nowrap;
  }
`;
