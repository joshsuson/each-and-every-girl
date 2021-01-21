import React, { useContext } from 'react';
import { Layout, SEO, HomePageCollectionsGrid } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <HomePageCollectionsGrid collections={collections} />
    </Layout>
  );
};

export default IndexPage;
