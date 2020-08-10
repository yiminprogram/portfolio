import React from 'react';
import Photo from '../../image/user-photo.png';
import style from '../../sass/component/Homepage/about.module.scss';

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.info}>
        <h2>關於</h2>
        <p>
          您好，歡迎來到我的作品集網站，我名字是陳毅旻，於資策會應用程式設計師養成班受訓，經過636小時的專業訓練，研習期滿並經考試及格，熱愛程式撰寫，鑽研前端新技術研究，獲取更多程式的知識。
        </p>
      </div>
      <div className={style.myPhoto}>
        <img src={Photo} alt="error" />
      </div>
    </div>
  );
};

export default About;
