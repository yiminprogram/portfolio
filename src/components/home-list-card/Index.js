import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/image/screenshot/Login.png';

const Card = styled.article`
  margin: 2rem 1rem;
  flex: 0 1 300px;
`;
const CardLink = styled(Link)`
  text-decoration: none;
`;
const Image = styled.div`
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #bbb;
  overflow: hidden;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
`;

const Index = ({ path, project, screenshot }) => {
  return (
    <Card>
      <CardLink to={path}>
        <Image>
          <img src={screenshot} alt="error" />
        </Image>
        <Title>{project}</Title>
      </CardLink>
    </Card>
  );
};

export default Index;
