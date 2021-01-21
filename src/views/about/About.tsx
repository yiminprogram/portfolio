import React, { useEffect, useRef, useState } from 'react';
//style
import {
  AboutDiv,
  Info,
  InfoCard,
  Image,
  Name,
  Introduce,
  Title,
  Skill,
  Language,
  Bar,
  Code,
} from './style';
//image
import Photo from 'src/assets/image/user-photo.png';
//data
import data from 'src/assets/data/skill.json';

const About = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const target = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (target.current) {
      const observer = new IntersectionObserver(
        (e) => {
          if (e[0].isIntersecting) {
            setScroll(true);
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(target.current);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutDiv>
      <Info>
        <InfoCard>
          <Title>關於我</Title>
          <Image>
            <img src={Photo} alt="error" />
          </Image>
        </InfoCard>
      </Info>
      <Introduce>
        <p>
          您好，我叫<Name>陳毅旻</Name>
          ，近期於資策會應用程式設計師就業養成班經過636小時的專業訓練，研習期滿並經考試及格，結訓專案網站負責的內容範圍包含利用
          <Code color="#dd4b25">HTML</Code>、<Code color="#0055a3">CSS</Code>
          以及<Code color="#efd81d">Javascript</Code>
          進行前端設計，後利用C#進行後端資料存取。自我鑽研
          <Code color="#53c1de">React.js</Code>
          以及<Code color="#41b883">Vue.js</Code>前端技術，並利用
          <Code color="#53c1de">React.js</Code>以及
          <Code color="#41b883">Vue.js</Code>
          製作出一些小型的網站作品。在此附上線上個人履歷資料以及GitHub線上作品集，誠懇期盼能有機會獲取面試機會，非常感謝您的撥冗閱讀。
        </p>
      </Introduce>
      <Skill ref={target}>
        {data.map((ele) => (
          <Language color={ele.color}>
            <span>{ele.language}</span>
            <Bar scroll={scroll} percentage={ele.percentage}>
              <div></div>
            </Bar>
          </Language>
        ))}
      </Skill>
    </AboutDiv>
  );
};

export default About;
