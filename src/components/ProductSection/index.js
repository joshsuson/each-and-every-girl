import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';
import { ProductHeading, Divider, ProductSectionWrapper } from './styles';

export const ProductSection = () => {
  const { products } = useContext(ProductContext);

  return (
    <ProductSectionWrapper id="productSection">
      <ProductHeading>Current Collection</ProductHeading>
      <Divider />
      <ProductsGrid products={products} />
    </ProductSectionWrapper>
  );
};
