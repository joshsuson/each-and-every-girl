import React from "react"
import "normalize.css"
import GlobalStyles from "../../styles/GlobalStyles"
import { Header } from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
