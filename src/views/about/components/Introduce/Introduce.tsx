import React, { useRef } from 'react';
//style
import {
  Introduce as IntroduceDiv,
  IntroduceContent,
  NeonBorder,
} from '../../style';

const Introduce = () => {
  const border = useRef<HTMLDivElement | null>(null);
  window.addEventListener('mousemove', (e) => {
    if (border.current) {
      let x = e.clientX / 10 - 110;
      let y = e.clientY / 10 - 60;

      border.current.style.transform = `translate(${x}px,${y}px)`;
    }
  });
  return (
    <IntroduceDiv>
      <IntroduceContent>
        您好，我叫陳毅旻，近期於資策會應用程式設計師就業養成班經過636小時的專業訓練，研習期滿並經考試及格，結訓專案網站負責的內容範圍包含利用HTML、CSS以及Javascript進行前端設計，後利用C#進行後端資料存取。自我鑽研React以及Vue前端技術，並利用React以及Vue製作出一些小型的網站作品以及網站元件。
        <NeonBorder ref={border} />
      </IntroduceContent>
    </IntroduceDiv>
  );
};

export default Introduce;
