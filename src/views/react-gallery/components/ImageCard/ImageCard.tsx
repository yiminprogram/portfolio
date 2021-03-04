import React from 'react';
//style
import { ImageListItem, ImageWrapper } from './style';
//type
import { TImage } from '../../type';
//components
import ImageLoad from '../ImageLoad';

const ImageCard = ({ src, altDescription, color, height }: TImage) => {
  return (
    <ImageListItem height={height}>
      <ImageWrapper color={color}>
        <ImageLoad src={src} alt={altDescription} />
      </ImageWrapper>
    </ImageListItem>
  );
};

export default ImageCard;
