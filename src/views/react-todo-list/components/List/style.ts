import styled from 'styled-components';

export const ListDiv = styled.section``;

export const Category = styled.div`
  margin-bottom: 2rem;
  color: ${(props) => props.color};
  font-size: 1.5rem;
  font-weight: 700;

  > span {
    margin-left: 1rem;
  }
`;
