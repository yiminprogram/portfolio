import React, { FC } from 'react';
import { Link } from 'react-router-dom';
//components
import { Image } from 'src/components/image';
//style
import { CardList, Card, Content, Title, LinkBtn, Img } from './style';
//type
import { TProps } from '../../type';
//material ui
import { Language, GitHub } from '@material-ui/icons';
//image
import fixingImg from 'src/assets/image/fixing.svg';

const CardPortfolio: FC<TProps> = ({ imageSrc, project, path, github }) => {
  return (
    <CardList>
      <Card>
        <Img>
          <Image src={imageSrc === '' ? fixingImg : imageSrc} />
        </Img>
        <Content>
          <Title>
            <h1>{project}</h1>
          </Title>
          <LinkBtn>
            <Link className="portfolio-link" to={`/portfolio/react${path}`}>
              <span>
                <Language style={{ fontSize: '1.1rem' }} />
              </span>
              作品
            </Link>
            <a className="github-link" href={github}>
              <span>
                <GitHub style={{ fontSize: '1.1rem' }} />
              </span>
              程式碼
            </a>
          </LinkBtn>
        </Content>
      </Card>
    </CardList>
  );
};

export default CardPortfolio;
