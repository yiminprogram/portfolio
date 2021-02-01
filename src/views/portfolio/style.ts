import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PortfolioDiv = styled.div`
  ${(p) => p.theme.mixin.page};
  padding: 5rem 0 15rem 0;
`;

export const Banner = styled.div`
  margin: 0 auto;
  padding: 5rem 1rem 0 1rem;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 650px;
`;

export const Image = styled.div`
  flex: 0 1 200px;
  margin-bottom: 1rem;

  > img {
    width: 100%;
  }
`;
export const Info = styled.p`
  flex: 0 1 100%;
  text-align: center;
  font-size: 1rem;
  line-height: 2;
`;

export const List = styled.ul`
  max-width: 1300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 5rem 0;
  margin: 0 auto;
`;

export const CardDiv = styled.li`
  flex: 0 1 300px;
  margin: 1rem;
  text-align: center;
`;

export const CardLink = styled(Link)`
  color: #333;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
`;

export const CardWebLink = styled.a`
  color: #333;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
`;

export const CardImg = styled.div`
  margin-bottom: 1rem;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 15px #e0e0e0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
