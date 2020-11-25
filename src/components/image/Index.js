import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(p) => (p.load ? 'none' : 'initial')};
`;

const Index = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const complete = () => {
    setLoading(false);
  };
  return (
    <Fragment>
      <Img src={src} alt="error" load={loading} onLoad={complete} />
      {loading && <Skeleton variant="rect" height="100%" width="100%" animation="wave" />}
    </Fragment>
  );
};

export default Index;
