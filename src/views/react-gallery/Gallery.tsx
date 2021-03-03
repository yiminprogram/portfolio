import React from 'react';
//style
import { GalleryPage, ImageList, ImageListItem, ImageWrapper } from './style';
//image
import Burger from 'src/assets/image/foods/burger.jpg';
import Lighthouse from 'src/assets/image/lighthouse.jpg';
const Gallery = () => {
  return (
    <GalleryPage>
      <ImageList>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={true}>
          <ImageWrapper>
            <img src={Lighthouse} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={true}>
          <ImageWrapper>
            <img src={Lighthouse} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={true}>
          <ImageWrapper>
            <img src={Lighthouse} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={true}>
          <ImageWrapper>
            <img src={Lighthouse} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
        <ImageListItem vertical={false}>
          <ImageWrapper>
            <img src={Burger} alt="burger" />
          </ImageWrapper>
        </ImageListItem>
      </ImageList>
    </GalleryPage>
  );
};

export default Gallery;
