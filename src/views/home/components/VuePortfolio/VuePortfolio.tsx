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
import Logo from 'src/assets/image/logo/vue-profile.svg';

const VuePortfolio = () => {
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
      <Info>
        <InfoTitle hover={hover}>
          <h1>Vue 作品集</h1>
        </InfoTitle>
        <InfoContent hover={hover}>
          <p>
            利用Vue前端框架製作之網站元件作品集，利用vuex進行狀態管理，搭配vue-router進行頁面轉換
          </p>
        </InfoContent>
        <InfoLink hover={hover}>
          <Link to="/portfolio/vue">前往作品集</Link>
        </InfoLink>
      </Info>
      <Image hover={hover}>
        <img src={Logo} alt="vue" />
      </Image>
    </Portfolio>
  );
};

export default VuePortfolio;
