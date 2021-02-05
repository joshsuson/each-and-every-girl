import React from 'react';
import {
  ProductTileWrapper,
  Title,
  Description,
  Price,
  CardFooter,
  StyledImg,
  CardContent,
} from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export const ProductTile = ({
  title,
  imageFluid,
  description,
  minPrice,
  handle,
}) => {
  return (
    <ProductTileWrapper>
      <StyledImg fluid={imageFluid} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
      <CardFooter>
        <Price>from ${parseFloat(minPrice).toFixed(2)}</Price>
        <StyledLink to={`/products/${handle}`}>View Product</StyledLink>
      </CardFooter>
    </ProductTileWrapper>
  );
};
