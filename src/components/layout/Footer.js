import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const FooterWrapper = styled.div`
  ${tw`py-12 shadow-inner`}
  background-color: var(--primary-color);
  text-align: center;
  margin-top: auto;
`
const FooterHeading = styled.h3`
  font-size: 3rem;
  font-style: italic;
  color: hsla(9, 84%, 28%, 0.75);
  padding: 0;
  margin: 1rem 0 1.5rem 0;
`

const FooterNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 1.5rem;
  li {
    padding: 0;
    font-size: 2rem;
    list-style-position: inside;
    a {
      text-decoration: none;
      padding: 2rem;
      color: hsla(9, 84%, 28%, 0.75);
      :hover {
        color: var(--accent-color);
      }
    }
  }
`

const CopyrightParagraph = styled.p`
  font-size: 1.5rem;
  color: hsla(9, 84%, 28%, 0.75);
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterHeading>Making every girl feel beautiful</FooterHeading>
      <FooterNav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </FooterNav>
      <CopyrightParagraph>
        &copy; Each and Every Girl 2020 | Designed and Built by Josh Suson
      </CopyrightParagraph>
    </FooterWrapper>
  )
}
