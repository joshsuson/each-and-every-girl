import React from 'react';
import { HeaderContainer, Logo, LogoImg } from './styles';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { Nav } from '../Nav';
import logo from '../../assets/images/EEG-Logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <LogoImg src={logo} alt="Each and Every Girl" />
      </Logo>
      <Nav />
      <Search />
      <Cart />
    </HeaderContainer>
  );
};
