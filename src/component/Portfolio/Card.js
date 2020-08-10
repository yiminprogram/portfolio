import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../sass/component/Portfoliio/card.module.scss';
import III from '../../image/HomePage1.jpg';
import AQI from '../../image/AQISearch.jpg';
const Card = () => {
  return (
    <div className={style.container}>
      <Link className={style.card}>
        <div className={style.content}>
          <h1>結訓專案</h1>
          <div className={style.bgImg} style={{ backgroundImage: `url(${III})` }}></div>
        </div>
      </Link>
      <Link className={style.card}>
        <div className={style.content}>
          <h1>空氣品質查詢網站</h1>
          <div className={style.bgImg} style={{ backgroundImage: `url(${AQI})` }}></div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
