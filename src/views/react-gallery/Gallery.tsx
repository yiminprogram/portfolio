import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react';
//style
import {
  GalleryPage,
  GalleryDiv,
  Title,
  ImageCard,
  CardWrapper,
  Card,
  PageButton,
} from './style';
//background image
import burger from 'src/assets/image/foods/burger.jpg';
import sandwich from 'src/assets/image/foods/sandwich.jpg';
//material ui
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
type TFoods = {
  id: number;
  name: string;
  image: string;
};

const imageDate: TFoods[] = [
  { id: 1, name: 'burger', image: burger },
  { id: 2, name: 'sandwich', image: sandwich },
  { id: 3, name: 'burger', image: burger },
  { id: 4, name: 'sandwich', image: sandwich },
  { id: 5, name: 'burger', image: burger },
  { id: 6, name: 'sandwich', image: sandwich },
  { id: 7, name: 'burger', image: burger },
  { id: 8, name: 'sandwich', image: sandwich },
];

const Gallery: FC = () => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [instance, setInstance] = useState<number>(330);
  const cardList = useRef<HTMLDivElement | null>(null);
  const prevButton = () => {
    if (instance <= 330) {
      setInstance((p) => p + 330);
    }
  };
  const nextButton = () => {
    if (instance * -1 <= (imageDate.length - 2) * 330)
      setInstance((p) => p - 330);
  };
  useEffect(() => {
    window.scrollTo(0, 50);
    if (cardList.current) {
      setInstance(cardList.current.clientWidth / 2 - 150);
    }
  }, []);
  return (
    <GalleryPage>
      <GalleryDiv style={{ backgroundImage: `url(${burger})` }}>
        <Title>
          <h1>漢堡</h1>
          <h1>漢堡</h1>
          <h1>漢堡</h1>
        </Title>
        <ImageCard>
          <CardWrapper ref={cardList} index={instance}>
            {imageDate.map((ele) => (
              <Card style={{ backgroundImage: `url(${ele.image})` }}></Card>
            ))}
          </CardWrapper>
          <PageButton>
            <button onClick={prevButton}>
              <span>
                <ArrowLeft />
              </span>
            </button>
            <span>1/10</span>
            <button onClick={nextButton}>
              <ArrowRight />
            </button>
          </PageButton>
        </ImageCard>
      </GalleryDiv>
    </GalleryPage>
  );
};

export default Gallery;
