import styled from 'styled-components';

export const Card = styled.li`
  flex: 0 1 300px;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px #ddd;
  }
`;

export const CardImg = styled.div`
  height: 250px;
  margin-bottom: 1rem;
  overflow: hidden;
`;
export const CardTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding: 0 1rem;
  line-height: 2;
`;

export const CardInfo = styled.div`
  padding: 1rem 1rem 0 1rem;
`;
export const CardInfoLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > span {
    margin-right: 0.5rem;
  }
  > a {
    margin-right: 1rem;
    color: #333333;
    /* text-decoration: none; */
  }
`;
