import React, { Fragment, useState } from 'react';
//style
import styled from 'styled-components';

type TLoading = {
  load: boolean;
};

type TProps = {
  src: string;
  alt: string;
  blurImage: string;
  color: string;
};

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const BlurImage = styled.div<TLoading>`
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(10px);
  visibility: ${({ load }) => (load ? 'visible' : 'hidden')};
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: 0.5s;
  z-index: 2;
`;

const BlurBackGround = styled.div<TLoading>`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  visibility: ${({ load }) => (load ? 'visible' : 'hidden')};
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: 0.5s;
  background-image: ${(p) => `linear-gradient(${p.color},#ccc)`};
  z-index: 1;
`;

const PhotosLoading = ({ src, alt, blurImage, color }: TProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const complete = (): void => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Image src={src} alt={alt} onLoad={complete} />
      <BlurImage
        style={{ backgroundImage: `url(${blurImage})` }}
        load={loading}
      ></BlurImage>
      <BlurBackGround color={color} load={loading}></BlurBackGround>
    </Fragment>
  );
};

export default PhotosLoading;
