import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  /* box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.75); */
  @media (max-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`;

export const Logo = styled(Link)`
  width: 10%;
  @media (max-width: 834px) {
    grid-column: 1 / span 2;
    justify-self: center;
  }
`;
export const LogoImg = styled.img`
  width: 100%;
`;
