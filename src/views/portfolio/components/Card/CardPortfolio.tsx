import React, { FC } from 'react';
import { Link } from 'react-router-dom';
//components
import { ImageHover } from 'src/components/image';
//style
import { Card, CardImg, CardTitle, CardInfoLink, CardInfo } from './style';
//type
import { TProps } from '../../type';
//material ui
import { Language, GitHub } from '@material-ui/icons';
//image
import FixingImg from 'src/assets/image/fixing.svg';

const CardPortfolio: FC<TProps> = ({ imageSrc, project, path, github }) => {
  return (
    <Card>
      <article>
        <Link to={`/portfolio/react${path}`}>
          <CardImg>
            <ImageHover src={imageSrc === '' ? FixingImg : imageSrc} />
          </CardImg>
        </Link>
        <CardTitle>{project}</CardTitle>
        <CardInfo>
          <CardInfoLink>
            <span>
              <Language />
            </span>
            <Link to={`/portfolio/react${path}`}>作品</Link>
          </CardInfoLink>
          <CardInfoLink>
            <span>
              <GitHub />
            </span>
            <a target="_blank" rel="noopener noreferrer" href={github}>
              程式碼
            </a>
          </CardInfoLink>
        </CardInfo>
      </article>
    </Card>
  );
};

export default CardPortfolio;
