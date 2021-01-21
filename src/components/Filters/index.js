import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { FilterItem } from './FilterItem';
import { FiltersWrapper } from './styles';

export const Filters = () => {
  const { collections } = useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <FilterItem
          key={collection.shopifyId}
          title={collection.title}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
};
