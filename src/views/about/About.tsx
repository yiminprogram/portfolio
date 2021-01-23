import React, { FC, useEffect, useRef, useState } from 'react';
//style
import {
  AboutDiv,
  Info,
  Name,
  Introduce,
  Title,
  Skill,
  Language,
  Bar,
  Contact,
  ContactImg,
  ContactInfo,
  ContactContent,
} from './style';
//data
import data from 'src/assets/data/skill.json';
//image
import EmailImg from 'src/assets/image/email.svg';
//icons
import { Email, GitHub, Language as Portfolio } from '@material-ui/icons';

const About: FC = () => {
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
        <Title>關於我</Title>
      </Info>
      <Introduce>
        <h1>簡介</h1>
        <p>
          您好，我叫<Name>陳毅旻</Name>
          ，近期於資策會應用程式設計師就業養成班經過636小時的專業訓練，研習期滿並經考試及格，結訓專案網站負責的內容範圍包含利用HTML、CSS以及Javascript進行前端設計，後利用C#進行後端資料存取。自我鑽研React以及Vue前端技術，並利用React以及Vue製作出一些小型的網站作品。在此附上線上個人履歷資料以及GitHub線上作品集，誠懇期盼能有機會獲取面試機會，非常感謝您的撥冗閱讀。
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
      <Contact>
        <ContactImg>
          <img src={EmailImg} alt="error" />
        </ContactImg>
        <ContactInfo>
          <h1>聯絡資訊</h1>
          <ContactContent>
            <Email />
            <span>minwork1016@outlook.com</span>
          </ContactContent>
          <ContactContent>
            <GitHub />
            <span>https://github.com/yiminprogram</span>
          </ContactContent>
          <ContactContent>
            <Portfolio />
            <span>https://yiminprogram.github.io/portfolio/</span>
          </ContactContent>
        </ContactInfo>
      </Contact>
    </AboutDiv>
  );
};

export default About;
