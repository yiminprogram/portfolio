import styled from 'styled-components';

export const Card = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-left: 10px solid #f50;
  border-radius: 0 10px 10px 0;

  > h1 {
    color: #f50;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  > time {
    font-size: 1.1rem;
    font-weight: 700;
    color: #f50;
    display: block;
    margin-bottom: 1rem;
  }
`;
