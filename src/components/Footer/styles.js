import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export const FooterWrapper = styled.div`
  background-color: #21282d;
  padding: 16px;
`;

export const FooterHeader = styled.div`
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 65%;

  @media (max-width: 833px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const StateImg = styled(Img)`
  width: 200px;
`;

export const FooterHeading = styled.div`
  color: white;
  font-size: 2rem;
  @media (max-width: 833px) {
    font-size: 1.25rem;
  }
`;

export const FooterNav = styled.div`
  width: 65%;
  justify-content: center;
  margin: 24px auto;
  display: flex;
  gap: 16px;

  > ${StyledLink} {
    color: hsla(208, 14%, 48%, 1);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: hsla(208, 14%, 68%, 1);
    }
    @media (max-width: 833px) {
      font-size: 0.6rem;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0;
  color: hsla(208, 14%, 48%, 0.5);
  font-size: 0.75rem;
`;
