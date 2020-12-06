import React, { Fragment, useState } from 'react';
//components
import Skeleton from '@material-ui/lab/Skeleton';
//style
import * as Img from '../style';
//interface
import { IProps } from '../interface';

const ImageHover: React.FC<IProps> = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const complete = () => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Img.ImageHover
        src={src}
        alt="error"
        load={loading}
        onLoad={complete}
      />
      {loading && (
        <Skeleton
          variant="rect"
          height="100%"
          width="100%"
          animation="wave"
        />
      )}
    </Fragment>
  );
};

export default ImageHover;
