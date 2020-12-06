import React from 'react';
import * as Card from '../style';
import { useRouteMatch } from 'react-router-dom';
//components
import { ImgHover } from '../../image/Index';
//interface
import { IProps } from '../interface';

const ComponentCard: React.FC<IProps> = ({
  path,
  project,
  screenshot,
}) => {
  const match = useRouteMatch();
  const { url } = match;
  return (
    <Card.Container>
      <Card.ComponentLink to={`${url}${path}`}>
        <Card.ImageContainer>
          <ImgHover src={screenshot} />
        </Card.ImageContainer>
        <Card.Title>{project}</Card.Title>
      </Card.ComponentLink>
    </Card.Container>
  );
};

export default ComponentCard;
