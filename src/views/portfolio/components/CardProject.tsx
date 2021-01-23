import React, { FC } from 'react';
//components
import { ImageHover } from 'src/components/image';
//style
import { CardDiv, CardImg, CardWebLink } from '../style';
//type
import { TProps } from '../type';

const CardProject: FC<TProps> = ({ imageSrc, project, path }) => {
  return (
    <CardDiv>
      <CardWebLink href={path}>
        <CardImg>
          <ImageHover src={imageSrc} />
        </CardImg>
        <h1>{project}</h1>
      </CardWebLink>
    </CardDiv>
  );
};

export default CardProject;
