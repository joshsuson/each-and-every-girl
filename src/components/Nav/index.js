import React from 'react';
import { NavLink, NavContainer } from './styles';

export const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mission">Our Mission</NavLink>
      <NavLink to="/faq">Contact</NavLink>
    </NavContainer>
  );
};
