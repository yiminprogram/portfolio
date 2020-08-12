import React, { useRef, useEffect, useState } from 'react';
import AQI from '../../image/AQISearch.jpg';
import III from '../../image/HomePage1.jpg';
import { Link } from 'react-router-dom';
import style from '../../sass/component/Homepage/portfolio.module.scss';
const Portfolio = () => {
  const rCard = useRef();
  const lCard = useRef();
  const [robstate, setRobstate] = useState(false);
  const [lobstate, setLobstate] = useState(false);
  const scrollRCallback = (e) => {
    if (e[0].isIntersecting) {
      setRobstate(true);
    }
  };
  const scrollLCallback = (e) => {
    if (e[0].isIntersecting) {
      setLobstate(true);
    }
  };
  useEffect(() => {
    const observerR = new IntersectionObserver(scrollRCallback, {
      threshold: [0.25],
    });
    const observerL = new IntersectionObserver(scrollLCallback, {
      threshold: [0.25],
    });
    observerR.observe(rCard.current);
    observerL.observe(lCard.current);
  }, []);
  return (
    <div className={style.portfolio}>
      <div className={`${style.topProject} ${robstate ? style.slideRight : ''}`} ref={rCard}>
        <div className={style.cardImg}>
          <img src={III} alt="error" />
        </div>
        <div className={style.cardInfo}>
          <h1>結訓專案</h1>
          <ul>
            <li>首頁模板</li>
            <li>查詢頁面模板</li>
          </ul>
          <Link to="/portfolio" className={style.linkBtn}>
            作品集列表
          </Link>
        </div>
      </div>
      <div className={`${style.bottomProject} ${lobstate ? style.slideLeft : ''}`} ref={lCard}>
        <div className={style.cardInfo}>
          <h1>空氣品質查詢(AQI)</h1>
          <ul>
            <li>ReactJS</li>
            <li>React Hook</li>
            <li>styled components</li>
          </ul>
          <Link to="/portfolio" className={style.linkBtn}>
            作品集列表
          </Link>
        </div>
        <div className={style.cardImg}>
          <img src={AQI} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
