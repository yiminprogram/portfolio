import React from 'react';
import style from '../sass/page/porfolio.module.scss';
import Card from '../component/Portfolio/Card';
const Portfolio = () => {
  return (
    <div className={style.portfolio}>
      <h1>作品集</h1>
      <hr />
      <Card />
    </div>
  );
};

export default Portfolio;
