import React from 'react';
import style from '../sass/page/about.module.scss';
import Photo from '../image/user-photo.png';
import Email from '../image/iconfinder-email.svg';
import Mobile from '../image/iconfinder-mobile.svg';
import GitHub from '../image/GitHub.png';
const About = () => {
  return (
    <div className={style.about}>
      <h1>關於我</h1>
      <div className={style.box}>
        <div className={style.card}>
          <div className={style.photo} style={{ backgroundImage: `url(${Photo})` }}></div>
          <h2>陳毅旻</h2>
          <p>
            您好，歡迎來到我的作品集網站，我名字是陳毅旻，於資策會應用程式設計師養成班受訓，經過636小時的專業訓練，研習期滿並經考試及格，熱愛程式撰寫，鑽研前端新技術研究，獲取更多程式的知識。
          </p>
          <div className={style.contact}>
            <img src={Email} alt="error" />
            <span>minwork1016@outlook.com</span>
            <img src={Mobile} alt="error" />
            <span>0930229965</span>
            <img src={GitHub} alt="error" />
            <span>yiminprogram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
