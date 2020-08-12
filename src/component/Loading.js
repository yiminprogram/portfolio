import React from 'react';
import style from '../sass/component/loading.module.scss';
import Img from '../image/mateial-loading.svg';

const Loading = () => {
  return (
    <div className={style.container}>
      <img className={style.loading} src={Img} alt="error" />
    </div>
  );
};

export default Loading;
