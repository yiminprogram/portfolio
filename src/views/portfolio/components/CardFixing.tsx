import React, { FC } from 'react';
//components
import { ImageHover } from 'src/components/image';
//style
import { CardDiv, CardImg, CardLink } from '../style';
//type
import { TProps } from '../type';
//image
import FixImg from 'src/assets/image/fixing.svg';

const CardFixing: FC<TProps> = ({ project, path }) => {
  return (
    <CardDiv>
      <CardLink to={`/portfolio/react${path}`}>
        <CardImg>
          <ImageHover src={FixImg} />
        </CardImg>
        <h1>{project}</h1>
      </CardLink>
    </CardDiv>
  );
};

export default CardFixing;
