import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export const CollectionTile = ({
  title,
  description,
  backgroundImage,
  destination,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <StyledLink to={destination}>Shop Now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
