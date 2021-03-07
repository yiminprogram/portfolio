import React, { useEffect, useReducer } from 'react';
//style
import { GalleryPage, ImageList, Logo } from './style';
//components
import ImageCard from './components/ImageCard';
import DataLoad from './components/DataLoad';
import ImageInfo from './components/ImageInfo';
//type
import { EAction } from './type';
//image
import UnsplashLogo from 'src/assets/image/logo/unsplash-logo.svg';
//reducer
import { reducer, initialState } from './reducer';
//function
import { fetchPhotos } from './function/fetchPhotos';
import { fetchPhoto } from './function/fetchPhoto';

const Gallery = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPhotos().then((data) => {
      dispatch({ type: EAction.GET_PHOTOS, payload: data });
    });
  }, []);
  useEffect(() => {
    if (state.currentID !== '') {
      fetchPhoto(state.currentID).then((data) => {
        dispatch({ type: EAction.GET_PHOTO, payload: data });
      });
    }
  }, [state.currentID]);
  return (
    <GalleryPage>
      {state.isDataLoad ? (
        <DataLoad />
      ) : (
        <ImageList>
          {state.photos.map((ele) => (
            <ImageCard
              key={ele.id}
              id={ele.id}
              src={ele.src}
              altDescription={ele.altDescription}
              blurImage={ele.blurImage}
              height={ele.height}
              vertical={ele.vertical}
              color={ele.color}
              dispatch={dispatch}
            />
          ))}
        </ImageList>
      )}
      {state.isShowInfo && (
        <ImageInfo {...state.currentPhoto} dispatch={dispatch} />
      )}
      <Logo>
        <span className="logo">
          <img src={UnsplashLogo} alt="unsplash-logo" />
        </span>
      </Logo>
    </GalleryPage>
  );
};

export default Gallery;
