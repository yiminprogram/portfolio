import React, { FC } from 'react';
//components
import { ImageHover } from 'src/components/image';
//style
import { CardDiv, CardImg, CardLink } from '../style';
//type
import { TProps } from '../type';

const CardPortfolio: FC<TProps> = ({ imageSrc, project, path }) => {
  return (
    <CardDiv>
      <CardLink to={`/portfolio/react${path}`}>
        <CardImg>
          <ImageHover src={imageSrc} />
        </CardImg>
        <h1>{project}</h1>
      </CardLink>
    </CardDiv>
  );
};

export default CardPortfolio;
