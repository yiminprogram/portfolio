import React, { FC } from 'react';
import { Link } from 'react-router-dom';
//style
import { AboutDiv } from './style';

const About: FC = () => {
  return (
    <AboutDiv>
      <div className="about-title">
        <h1>關於我</h1>
        <Link to="/about">進一步了解</Link>
      </div>
      <div className="window">
        <div className="bar">
          <span className="close-btn"></span>
          <span className="zoom-btn"></span>
          <span className="full-btn"></span>
        </div>
        <div className="workspace">
          <div className="info">
            <div className="item item-1">
              <div className="image"></div>
              <div className="text">
                <div className="text-1"></div>
                <div className="text-2"></div>
              </div>
            </div>
            <div className="item item-2">
              <div className="image"></div>
              <div className="text">
                <div className="text-1"></div>
                <div className="text-2"></div>
              </div>
            </div>
            <div className="item item-3">
              <div className="image"></div>
              <div className="text">
                <div className="text-1"></div>
                <div className="text-2"></div>
              </div>
            </div>
          </div>
          <div className="chart">
            <div className="circle">
              <div className="quarter"></div>
            </div>
          </div>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;
