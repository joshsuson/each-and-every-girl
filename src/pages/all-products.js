import React, { useContext } from 'react';
import { Layout, Filters, ProductsGrid, SEO } from '../components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  /* display: grid; */
  gap: 20px;
  margin: 20px auto;
  margin-top: 20px;
  max-width: 1200px;

  @media (max-width: 834px) {
    margin: 20px 20px;
  }

  /* grid-template-columns: 1fr 3fr; */
`;

export default function AllProducts() {
  const { products } = useContext(ProductContext);
  // const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  // const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  // const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  // selectedCollectionIds.forEach(collectionId => {
  //   selectedCollectionIdsMap[collectionId] = true;
  // });

  // if (collections) {
  //   collections.forEach(collection => {
  //     collectionProductMap[collection.shopifyId] = {};

  //     collection.products.forEach(product => {
  //       collectionProductMap[collection.shopifyId][product.shopifyId] = true;
  //     });
  //   });
  // }

  // const filterByCategory = product => {
  //   if (Object.keys(selectedCollectionIdsMap).length) {
  //     for (let key in selectedCollectionIdsMap) {
  //       if (collectionProductMap[key]?.[product.shopifyId]) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }

  //   return true;
  // };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  };

  const filteredProducts = products
    // .filter(filterByCategory)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <SEO
        title="All Products"
        description="Products Page for Each and Every Girl"
      />
      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search Term: <strong>'{searchTerm}'</strong>
        </h3>
      )}

      <Content>
        {!!filteredProducts.length && (
          <h4>{filteredProducts.length} Products</h4>
        )}
        {/* <Filters /> */}
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Oh no! Nothing matches</span>{' '}
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              To help with your search why not try:
              <br />
              <br />
              <ul>
                <li>Checking your spelling</li>
                <li>Searching by the name of the earring</li>
                <li>Searching for something else</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
}
