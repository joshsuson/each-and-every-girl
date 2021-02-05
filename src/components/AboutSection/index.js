import React from 'react';
import {
  AboutImg,
  AboutWrapper,
  AboutContent,
  AboutTitle,
  Divider,
  AboutDescription,
} from './styles';
import { StyledLink } from '../StyledLink';

export const AboutSection = ({ image }) => {
  return (
    <AboutWrapper>
      <AboutImg fluid={image} />
      <AboutContent>
        <AboutTitle>All About Me</AboutTitle>
        <Divider />
        <AboutDescription>
          Hi. My name is Addison. I'm a clay maker from Concord, North Carolina.
          When I'm not making earrings I spend all my time taking care of the{' '}
          <span>three most beautiful kiddos</span> you could ever imagine.{' '}
          <br />
          <br /> Before being a stay at home mom I was a property manager for
          apartment complexes. I found my <span>true passion</span> in being a
          stay at home mom. I found my creativity in molding clay into pieces of
          jewelry which is how I ended up here. <br />
          <br /> Passion and creativity are great and meaningful. But when I
          decided to start making <span>I wanted to have a mission.</span>{' '}
          That's when I realized that jewelry had the ability to take a girl who
          typically doesn't feel beautiful and make her feel beautiful. For me
          that's what making earrings is all about. Making each and every girl
          feel beautiful.
        </AboutDescription>
        <StyledLink to="/mission">Learn more about my mission</StyledLink>
      </AboutContent>
    </AboutWrapper>
  );
};
