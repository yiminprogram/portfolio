import React, { useEffect, useState } from 'react';
//style
import { GalleryPage, ImageList, Logo } from './style';
//components
import ImageCard from './components/ImageCard';
//type
import { TImage } from './type';
//image
import UnsplashLogo from 'src/assets/image/logo/unsplash-logo.svg';

const randomColor = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Gallery = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [photos, setPhotos] = useState<TImage[]>([]);
  //test hide
  useEffect(() => {
    fetch('https://api.unsplash.com/photos?per_page=30&page=1', {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data: any[]) => {
        const photos: TImage[] = [];
        for (let i = 0; i < data.length; i++) {
          const id = data[i].id;
          const src = data[i].urls.regular;
          const altDescription = data[i].alt_description;
          const vertical = false;
          const borderColor = `rgb(${randomColor(1, 255)},${randomColor(
            1,
            255,
          )},${randomColor(1, 255)})`;
          photos.push({ id, src, altDescription, vertical, borderColor });
        }
        setPhotos(photos);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <GalleryPage>
      <ImageList>
        {photos.map((ele, idx) => (
          <ImageCard
            key={idx}
            id={ele.id}
            src={ele.src}
            altDescription={ele.altDescription}
            vertical={ele.vertical}
            borderColor={ele.borderColor}
          />
        ))}
      </ImageList>
      <Logo>
        <span className="text">Source By</span>
        <span className="logo">
          <img src={UnsplashLogo} alt="unsplash-logo" />
        </span>
      </Logo>
    </GalleryPage>
  );
};

export default Gallery;
