import React from 'react';
import { useRouteMatch } from 'react-router-dom';
//components
import { ImgHover } from '../../components/image/Index';
//style
import * as Card from './style';
//image
import Home from '../../assets/image/screenshot/space-home.png';

export const ComponentCard = ({ path, project, screenshot }) => {
  const match = useRouteMatch();
  const { url } = match;
  return (
    <Card.Container>
      <Card.ComponentsLink to={`${url}${path}`}>
        <Card.ImageContainer>
          <ImgHover src={screenshot} />
        </Card.ImageContainer>
        <Card.Title>{project}</Card.Title>
      </Card.ComponentsLink>
    </Card.Container>
  );
};

export const ProjectCard = ({ path, project, screenshot }) => {
  return (
    <Card.Container>
      <Card.ProjectsLink href={path}>
        <Card.ImageContainer>
          <ImgHover src={screenshot} />
        </Card.ImageContainer>
        <Card.Title>{project}</Card.Title>
      </Card.ProjectsLink>
    </Card.Container>
  );
};
