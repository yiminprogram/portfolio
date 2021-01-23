import React, { Fragment, useState } from 'react';
//components
import Skeleton from '@material-ui/lab/Skeleton';
//style
import { Img } from '../style';
//type
import { TProps } from '../type';

const Image: React.FC<TProps> = ({ src }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const complete = (): void => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Img src={src} alt="error" load={loading} onLoad={complete} />
      {loading && (
        <Skeleton variant="rect" height="100%" width="100%" animation="wave" />
      )}
    </Fragment>
  );
};

export default Image;
