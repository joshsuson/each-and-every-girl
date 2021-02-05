import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchButton } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || [];

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Search"
      />
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </SearchForm>
  );
};
