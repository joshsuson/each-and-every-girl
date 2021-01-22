import React, { useContext } from 'react';
import { Layout, SEO, HomePageCollectionsGrid } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <SEO title="Home" description="Each and Every Girl Homepage" />
      <HomePageCollectionsGrid collections={collections} />
    </Layout>
  );
};

export default IndexPage;
