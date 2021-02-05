import React from 'react';
import { JumboWrapper, Title, JumboButton } from './styles';
import BackgroundImage from 'gatsby-background-image';

export const Jumbotron = ({ backgroundImage }) => {
  return (
    <JumboWrapper>
      <Title>
        Making Each and Every Girl Feel <span>Beautiful</span>
      </Title>
      <JumboButton to="productSection" smooth={true}>
        Find your perfect earring
      </JumboButton>
    </JumboWrapper>
  );
};
