import React from 'react';
import { HeaderContainer } from './styles';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Each and Every Girl</Link>
      <Search />
      <Cart />
    </HeaderContainer>
  );
};
