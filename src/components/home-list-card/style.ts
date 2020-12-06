import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
  margin: 3rem;
  flex: 0 1 300px;
`;

export const ComponentLink = styled(Link)`
  text-decoration: none;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
  color: #555;
  font-size: 20px;
  font-weight: 700;
`;
