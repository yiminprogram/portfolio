import React from 'react';
//style
import { ImageListItem, ImageWrapper } from './style';
//type
import { TImage } from '../../type';

const ImageCard = ({ src, altDescription, vertical, borderColor }: TImage) => {
  return (
    <ImageListItem vertical={vertical}>
      <ImageWrapper borderColor={borderColor}>
        <img src={src} alt={altDescription} />
      </ImageWrapper>
    </ImageListItem>
  );
};

export default ImageCard;
