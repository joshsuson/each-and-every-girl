import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }
  {
    allShopifyProduct {
      edges {
        node {
          ...ShopifyProductFields
          ...ProductTileFields
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
