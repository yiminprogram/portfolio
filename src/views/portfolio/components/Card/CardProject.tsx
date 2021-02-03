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

const CardPortfolio: FC<TProps> = ({ imageSrc, project, path, github }) => {
  return (
    <Card>
      <article>
        <Link to={`/portfolio/react${path}`}>
          <CardImg>
            <ImageHover src={imageSrc} />
          </CardImg>
        </Link>
        <CardTitle>{project}</CardTitle>
        <CardInfo>
          <CardInfoLink>
            <a target="_blank" rel="noopener noreferrer" href={path}>
              <span>
                <Language />
              </span>
              作品
            </a>
          </CardInfoLink>
          <CardInfoLink>
            <a target="_blank" rel="noopener noreferrer" href={github}>
              <span>
                <GitHub />
              </span>
              程式碼
            </a>
          </CardInfoLink>
        </CardInfo>
      </article>
    </Card>
  );
};

export default CardPortfolio;
