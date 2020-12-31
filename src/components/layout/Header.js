import React from "react"
import { Link } from "gatsby"
import logo from "../../assets/images/eeg-svg.svg"
import styled from "styled-components"
import tw from "twin.macro"

const StyledImage = styled.img`
  ${tw`w-56`}
`
const HeaderWrapper = styled.div`
  ${tw`flex items-center py-12 px-20 shadow-lg`}
`

const StyledNav = styled.nav`
  margin-left: auto;

  a {
    font-size: 2.5rem;
    text-decoration: none;
    padding: 0 2rem;
    color: var(--black);
    text-transform: uppercase;
  }
  a:hover {
    color: var(--primary-color);
  }
`

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <StyledImage src={logo} />
        <StyledNav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/shop">Shop</Link>
        </StyledNav>
      </HeaderWrapper>
    </>
  )
}
