import React from 'react';
//components
import { ImageHover } from '../../../image/Index';
//type
import { TProps } from '../../type';
//style
//style
import { ProjectLink, Container, ImageContainer, Title } from '../../style';

const CardProjects: React.FC<TProps> = ({ path, project, screenshot }) => {
  return (
    <Container>
      <ProjectLink href={path}>
        <ImageContainer>
          <ImageHover src={screenshot} />
        </ImageContainer>
        <Title>{project}</Title>
      </ProjectLink>
    </Container>
  );
};

export default CardProjects;
