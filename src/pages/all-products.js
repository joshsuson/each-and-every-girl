import React, { useContext } from 'react';
import { Layout, Filters } from '../components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const { products, collections } = useContext(ProductContext);
  return (
    <Layout>
      <h4>{products.length} Products</h4>
      <Content>
        <Filters />
      </Content>
    </Layout>
  );
}
