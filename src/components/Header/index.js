import React from 'react';
import { HeaderContainer } from './styles';
import { Cart } from '../Cart';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Each and Every Girl</h1>
      <Cart />
    </HeaderContainer>
  );
};
