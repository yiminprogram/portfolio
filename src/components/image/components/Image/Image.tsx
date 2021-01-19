import React, { Fragment, useState } from 'react';
//components
import Skeleton from '@material-ui/lab/Skeleton';
//style
import * as Img from '../../style';
//interface
import { TProps } from '../../type';

const Image: React.FC<TProps> = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const complete = () => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Img.Image src={src} alt="error" load={loading} onLoad={complete} />
      {loading && (
        <Skeleton variant="rect" height="100%" width="100%" animation="wave" />
      )}
    </Fragment>
  );
};

export default Image;
