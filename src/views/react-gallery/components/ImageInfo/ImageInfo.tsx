import React, { useState } from 'react';
//style
import {
  ImageInfoContainer,
  BackgroundImage,
  Info,
  Image,
  Detail,
  DetailWrapper,
  CloseBtn,
} from './style';
//type
import { TPhoto, TDispatch, EAction } from '../../type';
//icon
import { GetApp, ExitToApp, Close } from '@material-ui/icons';
//components
import PhotoLoading from '../PhotoLoading';
import InfoLoading from '../InfoLoading';

const ImageInfo = ({
  blurImage,
  photo,
  dispatch,
  userName,
  userPhoto,
  download,
  time,
  tags,
  website,
}: TPhoto & TDispatch) => {
  const [loading, setloading] = useState(true);
  return (
    <ImageInfoContainer>
      <CloseBtn onClick={() => dispatch({ type: EAction.TOGGLE_INFO })}>
        <Close />
      </CloseBtn>
      <BackgroundImage>
        <img src={blurImage} alt="error" />
      </BackgroundImage>
      <Info>
        <Image>
          <PhotoLoading
            src={photo}
            alt="error"
            variant="rect"
            color="#ccc2"
            fit="contain"
          />
        </Image>
        <Detail>
          {loading && <InfoLoading />}
          <DetailWrapper load={loading}>
            <div className="user">
              <span className="user-avatar">
                <img
                  src={userPhoto}
                  alt="user"
                  onLoad={() => setloading(false)}
                />
              </span>
              <span>{userName}</span>
            </div>
            <div className="download">
              <h3>Total Download</h3>
              <span>
                <GetApp style={{ fontSize: '3rem' }} />
              </span>
              <span>{download}</span>
            </div>
            <div className="time">
              <time>{time}</time>
            </div>
            <div className="tag">
              {tags.map(
                (ele, idx) =>
                  idx <= 5 && <span key={idx}>{`#${ele.title}`}</span>,
              )}
            </div>
            <div className="link-btn">
              <a target="_blank" rel="noopener noreferrer" href={website}>
                <span>Open in Unsplash</span>
                <ExitToApp />
              </a>
            </div>
          </DetailWrapper>
        </Detail>
      </Info>
    </ImageInfoContainer>
  );
};

export default ImageInfo;
