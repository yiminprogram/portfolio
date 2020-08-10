import React from 'react';
import Tool from '../../image/iconfinder-tool.svg';
import style from '../../sass/component/Homepage/skill.module.scss';

const Skill = () => {
  return (
    <div className={style.skill}>
      <div className={style.tool}>
        <div>
          <img src={Tool} alt="error" />
        </div>
      </div>
      <div className={style.info}>
        <div className={style.right}>
          <ul className={style.list}>
            <li>HTML</li>
            <li>Javascript(ES6)</li>
            <li>jQuery</li>
            <li>Github</li>
            <li>MVC</li>
          </ul>
        </div>
        <div className={style.left}>
          <ul className={style.list}>
            <li>CSS/SCSS</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>C#</li>
            <li>MSSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
