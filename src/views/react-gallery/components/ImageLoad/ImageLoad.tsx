import React, { Fragment, useState } from 'react';
//components
import Skeleton from '@material-ui/lab/Skeleton';
//style
import styled from 'styled-components';

type TLoading = {
  load: boolean;
};

type TProps = {
  src: string;
  alt: string;
};

const Image = styled.img<TLoading>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  /* position:absolute: */
  display: ${(p) => (p.load ? 'none' : 'initial')};
  visibility: ${({ load }) => (load ? 'hidden' : 'visible')};
  opacity: ${({ load }) => (load ? 0 : 1)};
`;

const ImageLoad = ({ src, alt }: TProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const complete = (): void => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Image src={src} alt={alt} onLoad={complete} load={loading} />
      {loading && (
        <Skeleton variant="rect" height="100%" width="100%" animation="wave" />
      )}
    </Fragment>
  );
};

export default ImageLoad;
