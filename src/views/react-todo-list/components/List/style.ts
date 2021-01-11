import styled from 'styled-components';

export const ListDiv = styled.section``;

export const Category = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  margin: 2rem 0;
  color: ${(props) => props.color};
  border-bottom: 2px solid #ddd;
  font-size: 1.3rem;
  font-weight: 700;

  > span {
    margin-left: 1rem;
  }
`;
