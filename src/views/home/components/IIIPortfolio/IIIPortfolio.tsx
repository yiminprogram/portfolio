import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//style
import {
  Portfolio,
  Image,
  Info,
  InfoTitle,
  InfoContent,
  InfoLink,
} from './style';
//image
import Logo from 'src/assets/image/logo/static-profile.svg';

const IIIPortfolio = () => {
  const [hover, setHover] = useState<boolean>(false);
  const target = useRef<HTMLDivElement | null>(null);
  const scroll = (e: IntersectionObserverEntry[]): void => {
    if (e[0].isIntersecting) {
      setHover(true);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(scroll, { threshold: 0.25 });
    observer.observe(target.current as HTMLDivElement);
  }, []);
  return (
    <Portfolio ref={target}>
      <Image hover={hover}>
        <img src={Logo} alt="iii" />
      </Image>
      <Info>
        <InfoTitle hover={hover}>
          <h1>資策會結訓專案前端模板</h1>
        </InfoTitle>
        <InfoContent hover={hover}>
          <p>
            使用HTML、CSS以及jQuery搭配Bootstrap 4，設計結訓專案網站前端頁面
          </p>
        </InfoContent>
        <InfoLink hover={hover}>
          <Link to="/portfolio/iii">前往作品集 {'\u2192'}</Link>
        </InfoLink>
      </Info>
    </Portfolio>
  );
};

export default IIIPortfolio;
