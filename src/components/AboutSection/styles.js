import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export const AboutImg = styled(Img)`
  max-height: 600px;
  @media (max-width: 834px) {
    > picture {
      > img {
        object-position: top center !important;
      }
    }
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
  gap: 40px;
  max-width: 1200px;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const AboutContent = styled.div`
  & span {
    background-image: linear-gradient(
      43deg,
      #fadebc 0%,
      #fbbc8b 46%,
      #fe9567 100%
    );
    background-size: 100% 0.2em;
    background-repeat: no-repeat;
    background-position: 0 88%;
  }

  > ${StyledLink} {
    background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
    padding: 16px;
    margin: 24px 0;
    display: block;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    width: 50%;
    text-align: center;
    border-radius: 25px;
    box-shadow: 0 3px 10px hsla(18, 99%, 70%, 0.5);

    &:hover {
      box-shadow: 0 3px 15px hsla(18, 99%, 70%, 0.7);
    }
    @media (max-width: 834px) {
      margin: 24px auto;
      width: 85%;
      text-align: center;
    }
  }
  @media (max-width: 834px) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  margin: 0;
`;

export const Divider = styled.hr`
  width: 15%;
  text-align: left;
  margin: 24px 0;
`;

export const AboutDescription = styled.p`
  width: 85%;
  font-size: 1.1rem;
  line-height: 1.5;
  @media (max-width: 834px) {
    margin: 0 auto;
  }
`;
