import React from 'react';
import GitHub from '../image/GitHub.png';
import style from '../sass/component/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.mainFooter}>
      <h3>此網站由陳毅旻設計以及研發</h3>
      <a href="https://github.com/yiminprogram">
        <img src={GitHub} alt="error" />
      </a>
    </div>
  );
};

export default Footer;
