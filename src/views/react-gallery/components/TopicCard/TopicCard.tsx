import React from 'react';
//styled
import styled from 'styled-components';
//components
import Photo from '../PhotoLoading';
//type
import { TTopics } from '../../type';

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  position: absolute;
  left: 5%;
  bottom: 8%;
  transition: 0.5s ease-in-out;
  z-index: 1;
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  left: 5%;
  bottom: -3%;
  border: none;
  color: #fff;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  opacity: 0;
  z-index: 1;
`;

const TopicCardContainer = styled.li`
  flex: 0 1 500px;
  height: 350px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    background-image: linear-gradient(transparent, #0008);
    opacity: 0;
    transition: 0.5s ease-in-out;
  }

  &:hover ${Title},&:active ${Title} {
    bottom: 23%;
  }

  &:hover ${Button},&:active ${Button} {
    opacity: 1;
    bottom: 5%;
  }

  &:hover::before {
    opacity: 1;
  }

  > article {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const TopicCard = ({ id, image, title }: TTopics) => {
  return (
    <TopicCardContainer>
      <article>
        <Photo src={image} alt={id} variant="rect" color="#ccc3" fit="cover" />
        <Title>{title}</Title>
        <Button>Go to Topic</Button>
      </article>
    </TopicCardContainer>
  );
};

export default TopicCard;
