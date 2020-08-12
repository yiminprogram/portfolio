import React from 'react';
import About from '../component/Homepage/About';
import Skill from '../component/Homepage/Skill';
import Portfolio from '../component/Homepage/Portfolio';
import Mouse from '../image/iconfinder-mouse.svg';
import style from '../sass/page/homepage.module.scss';

const HomePage = () => {
  return (
    <div className={style.homepage}>
      <div className={style.title}>
        <div>
          <h1>
            Hi，我是<span className={style.name}>陳毅旻</span>
          </h1>
          <h1>歡迎瀏覽我的作品集網站</h1>
        </div>
      </div>
      <div className={style.mouse}>
        <img src={Mouse} alt="error" />
      </div>
      <About />
      <Skill />
      <Portfolio />
    </div>
  );
};

export default HomePage;
