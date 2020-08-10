import React from 'react';
import style from '../../sass/component/Portfoliio/card.module.scss';
import III from '../../image/HomePage1.jpg';
import Search from '../../image/SpaceSearch.jpg';
import AQI from '../../image/AQISearch.jpg';
const Card = () => {
  return (
    <div className={style.container}>
      <a href="https://yiminprogram.github.io/ProjectWebSite/src/Homepage.html" className={style.card}>
        <div className={style.content}>
          <h1>結訓專案(首頁)</h1>
          <div className={style.bgImg} style={{ backgroundImage: `url(${III})` }}></div>
        </div>
      </a>
      <a href="https://yiminprogram.github.io/ProjectWebSite/src/SpaceSearch.html" className={style.card}>
        <div className={style.content}>
          <h1>結訓專案(搜尋頁面)</h1>
          <div className={style.bgImg} style={{ backgroundImage: `url(${Search})` }}></div>
        </div>
      </a>
      <a href="https://yiminprogram.github.io/react-tech-research/#/" className={style.card}>
        <div className={style.content}>
          <h1>空氣品質查詢網站</h1>
          <div className={style.bgImg} style={{ backgroundImage: `url(${AQI})` }}></div>
        </div>
      </a>
    </div>
  );
};

export default Card;
