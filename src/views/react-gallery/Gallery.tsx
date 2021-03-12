import React, { useEffect, useReducer, useCallback, useRef } from 'react';
//style
import { GalleryPage, ImageList, Logo, Result } from './style';
//components
import ImageCard from './components/ImageCard';
import DataLoad from './components/DataLoad';
import ImageInfo from './components/ImageInfo';
import Searchbar from './components/Searchbar';
//type
import { EAction } from './type';
//image
import UnsplashLogo from 'src/assets/image/logo/unsplash-logo.svg';
//reducer
import { reducer, initialState } from './reducer';
//function
import { fetchPhotos } from './function/fetchPhotos';
import { fetchPhoto } from './function/fetchPhoto';
import { fetchSearch } from './function/fetchSearch';

const Gallery = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ob = useRef<undefined | IntersectionObserver>();
  const lastItem = useCallback(
    (item) => {
      if (state.isDataLoad) return;
      if (ob.current) ob.current.disconnect();
      // if (state.query && ob.current) ob.current.disconnect();
      ob.current = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) {
          if (state.query !== '') {
            dispatch({ type: EAction.NEXT_SEARCH_PAGE });
          } else {
            dispatch({ type: EAction.NEXT_PAGE });
          }
        }
      });
      if (item) ob.current.observe(item);
    },
    [state.isDataLoad, state.query],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (state.query !== '') {
      fetchSearch(state.query, state.searchPage).then((data) =>
        dispatch({ type: EAction.GET_PHOTOS, payload: data }),
      );
    } else {
      fetchPhotos(state.page).then((data) => {
        dispatch({ type: EAction.GET_PHOTOS, payload: data });
      });
    }
  }, [state.page, state.query, state.searchPage]);

  useEffect(() => {
    if (state.currentID !== '') {
      fetchPhoto(state.currentID).then((data) => {
        dispatch({ type: EAction.GET_PHOTO, payload: data });
      });
    }
  }, [state.currentID]);
  return (
    <GalleryPage>
      <Searchbar dispatch={dispatch} />
      <Result>
        <h1>{state.query}</h1>
      </Result>
      <ImageList>
        {state.photos.map((ele, idx) => {
          if (state.photos.length === idx + 1) {
            return (
              <ImageCard
                key={idx}
                id={ele.id}
                src={ele.src}
                altDescription={ele.altDescription}
                blurImage={ele.blurImage}
                height={ele.height}
                vertical={ele.vertical}
                color={ele.color}
                dispatch={dispatch}
                lastItem={lastItem}
              />
            );
          } else {
            return (
              <ImageCard
                key={idx}
                id={ele.id}
                src={ele.src}
                altDescription={ele.altDescription}
                blurImage={ele.blurImage}
                height={ele.height}
                vertical={ele.vertical}
                color={ele.color}
                dispatch={dispatch}
              />
            );
          }
        })}
      </ImageList>
      {state.isDataLoad && <DataLoad />}
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
