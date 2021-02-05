import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { LayoutWrapper, Wrapper, FooterWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

export { Layout };
