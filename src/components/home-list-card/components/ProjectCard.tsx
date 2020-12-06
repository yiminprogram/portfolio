import React from 'react';
import * as Card from '../style';
//components
import { ImgHover } from '../../image/Index';
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
          <ImgHover src={screenshot} />
        </Card.ImageContainer>
        <Card.Title>{project}</Card.Title>
      </Card.ProjectLink>
    </Card.Container>
  );
};

export default ProjectCard;
