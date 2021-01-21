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
  height: 650px;
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

export const InfoCard = styled.div`
  flex: 0 1 500px;
  text-align: center;
  color: #ececec;
`;
export const Image = styled.div`
  max-width: 300px;
  margin: 0 auto 2rem auto;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
    filter: brightness(1.2);
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 5rem;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1rem;
`;

export const Introduce = styled.div`
  font-size: 1.1rem;
  max-width: 1000px;
  margin: 0 auto 5rem auto;
  padding: 2rem;
  line-height: 3;
  text-align: center;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const Code = styled.span`
  color: ${(p) => p.color};
  font-weight: 700;
`;

export const Skill = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  margin: 0 auto 5rem auto;
  padding: 1rem;
`;

export const Language = styled.div`
  flex: 0 1 500px;
  color: ${(p) => p.color};
  margin: 0 2rem 5rem 2rem;
  display: flex;
  align-items: center;

  > span {
    flex: 2;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const Bar = styled.div<TPercentage>`
  flex: 3;
  > div {
    width: ${({ scroll, percentage }) => (scroll ? `${percentage}` : 0)};
    height: 20px;
    background: linear-gradient(150deg, #cc208eaa, #6713d2aa);
    border-radius: 20px;
    transition: 1s linear;
  }
`;
