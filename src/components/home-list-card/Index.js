import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import Home from '../../assets/image/screenshot/space-home.png';
//components
import Img from '../../components/image/Index';

const Card = styled.article`
  margin: 3rem;
  flex: 0 1 300px;
`;

const ComponentsLink = styled(Link)`
  text-decoration: none;
`;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 3px;
  box-shadow: ${(p) => p.theme.boxShadow.card};
  overflow: hidden;
  /* > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  } */
`;

const Title = styled.h1`
  text-align: center;
  color: #555;
  font-size: 20px;
  font-weight: 700;
`;

export const ComponentCard = ({ path, project, screenshot }) => {
  const match = useRouteMatch();
  const { url } = match;
  return (
    <Card>
      <ComponentsLink to={`${url}${path}`}>
        <Image>
          <Img src={screenshot} />
        </Image>
        <Title>{project}</Title>
      </ComponentsLink>
    </Card>
  );
};

export const ProjectCard = ({ path, project, screenshot }) => {
  return (
    <Card>
      <ProjectLink href={path}>
        <Image>
          <Img src={screenshot} />
        </Image>
        <Title>{project}</Title>
      </ProjectLink>
    </Card>
  );
};
