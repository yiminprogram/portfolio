import React from 'react';
//style
import { ImageListItem, ImageWrapper } from './style';
//type
import { TPhotos, TDispatch, EAction } from '../../type';
//components
import ImageLoad from '../ImageLoad';

const ImageCard = ({
  id,
  src,
  altDescription,
  blurImage,
  height,
  vertical,
  color,
  dispatch,
  lastItem,
}: TPhotos & TDispatch) => {
  const getPhoto = () => {
    dispatch({ type: EAction.CURRENT_PHOTO, payload: id });
  };
  return (
    <ImageListItem
      ref={lastItem}
      vertical={vertical}
      height={height}
      onClick={getPhoto}
    >
      <ImageWrapper color={color}>
        <ImageLoad
          src={src}
          alt={altDescription}
          blurImage={blurImage}
          color={color}
        />
      </ImageWrapper>
    </ImageListItem>
  );
};

export default ImageCard;
