import React from 'react';
import * as Card from '../style';
//components
import { ImageHover } from '../../image/Index';
//interface
import { IProps } from '../interface';

const ProjectCard: React.FC<IProps> = ({
  path,
  project,
  screenshot,
}) => {
  return (
    <Card.Container>
      <Card.ProjectLink href={path}>
        <Card.ImageContainer>
          <ImageHover src={screenshot} />
        </Card.ImageContainer>
        <Card.Title>{project}</Card.Title>
      </Card.ProjectLink>
    </Card.Container>
  );
};

export default ProjectCard;
