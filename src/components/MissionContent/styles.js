import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;

  > h2:last-of-type {
    margin-top: 48px;
  }

  > ${StyledLink} {
    background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
    padding: 16px;
    margin: 24px auto;
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
  }
  @media (max-width: 833px) {
    width: 90%;
  }
`;

export const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0 32px;
  @media (max-width: 833px) {
    margin: 0;
  }
`;

export const Quote = styled.h3`
  width: 50%;
  margin: 40px auto;
  text-align: center;
  font-style: italic;
  line-height: 1.5;

  > span {
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

  @media (max-width: 833px) {
    width: 85%;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
`;

export const Divider = styled.hr`
  width: 10%;
  margin: 32px auto;
`;
