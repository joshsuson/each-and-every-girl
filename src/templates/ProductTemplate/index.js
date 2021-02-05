/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  SEO,
} from '../../components';
import { graphql } from 'gatsby';
import {
  Grid,
  SelectWrapper,
  Price,
  Wrapper,
  StyledButton,
  Title,
} from './styles';
import CartContext from '../../context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { BsFillCaretLeftFill } from 'react-icons/bs';

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
      <Wrapper>
        <SEO
          title={props.data.shopifyProduct.title}
          description={props.data.shopifyProduct.description}
        />
        <StyledButton onClick={() => navigate(-1)}>
          <BsFillCaretLeftFill size="1.5rem" />
          Back to products
        </StyledButton>
        <Grid>
          <div>
            <ImageGallery
              selectedVariantImageId={selectedVariant?.image.id}
              images={props.data.shopifyProduct.images}
            />
          </div>
          <div>
            <Title>
              <span>{props.data.shopifyProduct.title}</span>
            </Title>
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
                  </SelectWrapper>
                )}
                {!!selectedVariant && (
                  <>
                    <Price>${selectedVariant.price}</Price>
                    <ProductQuantityAdder
                      variantId={selectedVariant.id}
                      available={selectedVariant.available}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </Grid>
      </Wrapper>
    </Layout>
  );
}
