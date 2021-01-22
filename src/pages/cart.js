import React from 'react';
import { Layout, CartContent, SEO } from '../components';

export default function CartPage() {
  return (
    <Layout>
      <SEO title="Cart" description="Each and Every Girl Shopping Cart" />
      <CartContent />
    </Layout>
  );
}
