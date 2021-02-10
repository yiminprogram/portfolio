import styled from 'styled-components';

export const AboutDiv = styled.div`
  ${(p) => p.theme.mixin.page};
  background-color: #000;
  margin: 0;
  padding-bottom: 30rem;
  position: relative;
  z-index: 0;
`;

export const Title = styled.div`
  height: 400px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  padding-top: 8rem;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 10px;
    text-indent: 10px;
    color: #f0f0f0;
  }
`;

export const Introduce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const IntroduceContent = styled.p`
  max-width: 800px;
  background-color: #222;
  color: #f0f0f0;
  font-size: 1.1rem;
  margin: 0 auto;
  padding: 3rem;
  line-height: 2;
  text-align: center;
  position: relative;
`;

export const NeonBorder = styled.span`
  display: block;
  position: absolute;
  width: 105%;
  height: 105%;
  left: 0%;
  top: 0%;
  border: 5px solid #ff3bf8;
  box-shadow: 0 0 15px #ff3bf8;
  transform: translate(30px, 30px);
  z-index: -1;
`;

export const Skill = styled.div`
  margin: 0 auto 10rem auto;
  padding: 5rem;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const Code = styled.div`
  flex: 0 1 200px;
  height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem;
  background-color: #222;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: ${(p) => p.color};
    box-shadow: ${({ color }) => `0 0 15px 5px ${color}`};
  }

  &:hover > h2 {
    color: #000;
    text-shadow: ${({ color }) => `0 0 3px ${color}`};
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #666;
    transition: 0.5s;
  }
`;
