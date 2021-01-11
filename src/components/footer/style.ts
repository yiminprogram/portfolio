import styled from 'styled-components';

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 1.1rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;

export const GitHubLogo = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: 0;
  > img {
    height: 20px;
  }
  > span {
    margin-left: 1rem;
  }
`;
