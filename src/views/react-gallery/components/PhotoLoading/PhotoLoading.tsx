import React, { Fragment, useState } from 'react';
//components
import Skeleton from '@material-ui/lab/Skeleton';
//style
import styled from 'styled-components';

type TImageProps = {
  src: string;
  alt: string;
  variant: 'circle' | 'rect' | 'text' | undefined;
  color: string;
  fit: string;
};

type TStyle = {
  load: boolean;
  fit: string;
};

const Image = styled.img<TStyle>`
  width: 100%;
  height: 100%;
  object-fit: ${(p) => p.fit};
  display: ${(p) => (p.load ? 'none' : 'initial')};
`;

const PhotoLoading = ({ src, alt, variant, color, fit }: TImageProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const completeLoad = (): void => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Image
        load={loading}
        src={src}
        alt={alt}
        onLoad={completeLoad}
        fit={fit}
      />
      {loading && (
        <Skeleton
          style={{ backgroundColor: color }}
          variant={variant}
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
    </Fragment>
  );
};

export default PhotoLoading;
