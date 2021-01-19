import React from 'react';
import { useRouteMatch } from 'react-router-dom';
//components
import { ImageHover } from '../../../image/Index';
//types
import { TProps } from '../../type';
//style
import { ComponentLink, Container, ImageContainer, Title } from '../../style';

const CardComponents: React.FC<TProps> = ({ path, project, screenshot }) => {
  const match = useRouteMatch();
  const { url } = match;
  return (
    <Container>
      <ComponentLink to={`${url}${path}`}>
        <ImageContainer>
          <ImageHover src={screenshot} />
        </ImageContainer>
        <Title>{project}</Title>
      </ComponentLink>
    </Container>
  );
};

export default CardComponents;
