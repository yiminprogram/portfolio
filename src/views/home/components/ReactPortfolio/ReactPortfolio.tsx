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
import Logo from 'src/assets/image/logo/react-profile.svg';

const ReactPortfolio = () => {
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
        <img src={Logo} alt="react" />
      </Image>
      <Info>
        <InfoTitle hover={hover}>
          <h1>React 作品集</h1>
        </InfoTitle>
        <InfoContent hover={hover}>
          <p>
            利用React前端框架製作之網站元件作品集，使用react
            hook及context-api狀態管理，以及使用styled-components撰寫scss設計美化網站，搭配react-router-dom進行頁面轉換，導入typescript進行靜態型別檢查
          </p>
        </InfoContent>
        <InfoLink hover={hover}>
          <Link to="/portfolio/react">前往作品集</Link>
        </InfoLink>
      </Info>
    </Portfolio>
  );
};

export default ReactPortfolio;
