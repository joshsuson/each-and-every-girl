import React from 'react';
import { FilterItemWrapper } from './styles';
import { Checkbox } from '../../Checkbox';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const FilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const searchTerm = qs.s;

  const handleClick = () => {
    let navigateTo = '/all-products';

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length && !searchTerm) {
      navigate(`${navigateTo}?c=${newIds.join(',')}`);
    } else if (newIds.length && searchTerm) {
      navigate(
        `${navigateTo}?c${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`
      );
    } else if (!newIds.length && searchTerm) {
      navigate(`${navigateTo}?s=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`${navigateTo}`);
    }
  };

  return (
    <FilterItemWrapper onClick={handleClick}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </FilterItemWrapper>
  );
};
