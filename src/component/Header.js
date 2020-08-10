import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../image/corn.png';
import style from '../sass/component/header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <img src={LogoImg} alt="error" />
        </Link>
      </div>
      <div className={style.navbar}>
        <ul>
          <li>
            <Link to="/portfolio">作品集</Link>
          </li>
          <li>
            <Link to="/about">關於</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
