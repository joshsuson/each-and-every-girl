/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import { Layout, ImageGallery, ProductQuantityAdder } from '../../components';
import { graphql } from 'gatsby';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from '../../context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props) {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [product, setProduct] = useState(null);
  const { getProductById } = useContext(CartContext);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    setSelectedVariant,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <Grid>
        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select
                    value={selectedVariant.id}
                    name="variant"
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map(variant => (
                      <option value={variant.id} key={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                  {!!selectedVariant && (
                    <>
                      <Price>${selectedVariant.price}</Price>
                      <ProductQuantityAdder
                        variantId={selectedVariant.id}
                        available={selectedVariant.available}
                      />
                    </>
                  )}
                </SelectWrapper>
              )}
            </>
          )}
        </div>
      </Grid>
    </Layout>
  );
}
