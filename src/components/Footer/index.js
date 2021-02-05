import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FooterHeading,
  FooterWrapper,
  StateImg,
  FooterHeader,
  FooterNav,
  Copyright,
} from './styles';
import { StyledLink } from '../StyledLink';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "eeg-nc.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <FooterWrapper>
      <FooterHeader>
        <StateImg fluid={data.file.childImageSharp.fluid} />
        <FooterHeading>Made with love in Concord, NC</FooterHeading>
      </FooterHeader>
      <FooterNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/mission">Our Mission</StyledLink>
        <StyledLink to="/faq">Contact</StyledLink>
        <StyledLink to="/policies">Policies</StyledLink>
      </FooterNav>
      <Copyright>© Each and Every Girl 2021 | All Rights Reserved</Copyright>
    </FooterWrapper>
  );
};
