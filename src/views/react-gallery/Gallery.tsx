import React, { useEffect, useReducer, useCallback, useRef } from 'react';
//style
import { GalleryPage, ImageList, Logo, Result, TopicList } from './style';
//components
import ImageCard from './components/ImageCard';
import DataLoad from './components/DataLoad';
import ImageInfo from './components/ImageInfo';
import Searchbar from './components/Searchbar';
import Category from './components/Category';
import TopicCard from './components/TopicCard';
//type
import { EAction, ECategory } from './type';
//image
import UnsplashLogo from 'src/assets/image/logo/unsplash-logo.svg';
//reducer
import { reducer, initialState } from './reducer';
//function
import { getPhotos } from './function/getPhotos';
import { getPhoto } from './function/getPhoto';
import { getSearchPhotos } from './function/getSearchPhotos';
import { getCollections } from './function/getCollections';
import { getTopics } from './function/getTopics';

const Gallery = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ob = useRef<undefined | IntersectionObserver>();
  const lastItem = useCallback(
    (item) => {
      if (ob.current) ob.current.disconnect();
      if (!state.isMore) return;
      ob.current = new IntersectionObserver((e) => {
        if (e[0].isIntersecting && !state.isDataLoad) {
          dispatch({ type: EAction.NEXT_PAGE });
        }
      });
      if (item) ob.current.observe(item);
    },
    [state.isDataLoad, state.isMore],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    switch (state.category) {
      case ECategory.PHOTOS:
        if (state.query === '') {
          getPhotos(state.page).then((data) => {
            dispatch({ type: EAction.GET_PHOTOS, payload: data });
          });
        } else {
          getSearchPhotos(state.query, state.page).then((data) => {
            dispatch({ type: EAction.GET_SEARCH_PHOTOS, payload: data });
          });
        }
        break;
      case ECategory.COLLECTIONS:
        // getPhotos().then(data=>{
        //   dispatch({type:EAction.GET_COLLECTIONS,payload:data});
        // })
        break;
      case ECategory.TOPICS:
        getTopics().then((data) => {
          dispatch({ type: EAction.GET_TOPICS, payload: data });
        });
        break;
      default:
        return;
    }
  }, [state.category, state.page, state.query]);

  useEffect(() => {
    if (state.currentID !== '') {
      getPhoto(state.currentID)
        .then((data) => {
          dispatch({ type: EAction.GET_PHOTO, payload: data });
        })
        .catch(() => alert('請稍後再試'));
    }
  }, [state.currentID]);
  return (
    <GalleryPage>
      <Category category={state.category} dispatch={dispatch} />
      <Searchbar category={state.category} dispatch={dispatch} />
      <Result>
        <h1>
          {state.query} {state.total && `(${state.total})`}
        </h1>
      </Result>
      {state.topics.length !== 0 && (
        <TopicList>
          {state.topics.map((ele) => (
            <TopicCard key={ele.id} {...ele} />
          ))}
        </TopicList>
      )}
      {state.photos.length !== 0 && (
        <ImageList>
          {state.photos.map((ele, idx) => {
            if (state.photos.length === idx + 1) {
              return (
                <ImageCard
                  key={idx}
                  dispatch={dispatch}
                  lastItem={lastItem}
                  {...ele}
                />
              );
            } else {
              return <ImageCard key={idx} dispatch={dispatch} {...ele} />;
            }
          })}
        </ImageList>
      )}
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
