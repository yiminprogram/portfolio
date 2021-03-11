import React from 'react';
//style
import styled from 'styled-components';
//component
import Skeleton from '@material-ui/lab/Skeleton';
const Container = styled.div`
  padding: 5rem 3rem;

  span {
    display: inline-block;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  .username {
    flex: 2;
    margin-left: 1rem;
  }
`;

const InfoLoading = () => {
  return (
    <Container>
      <div className="user">
        <span>
          <Skeleton
            style={{ backgroundColor: '#ccc5' }}
            width="50px"
            height="50px"
            variant="circle"
            animation="wave"
          />
        </span>
        <span className="username">
          <Skeleton
            style={{ backgroundColor: '#ccc5' }}
            width="100%"
            height="35px"
            variant="rect"
            animation="wave"
          />
        </span>
      </div>
      <div>
        <Skeleton
          style={{ backgroundColor: '#ccc5' }}
          width="100%"
          height="150px"
          variant="rect"
          animation="wave"
        />
      </div>
      <div>
        <Skeleton
          style={{ backgroundColor: '#ccc5' }}
          width="100%"
          height="150px"
          variant="rect"
          animation="wave"
        />
      </div>
      <div>
        <Skeleton
          style={{ backgroundColor: '#ccc5' }}
          width="100%"
          height="50px"
          variant="rect"
          animation="wave"
        />
      </div>
    </Container>
  );
};

export default InfoLoading;
