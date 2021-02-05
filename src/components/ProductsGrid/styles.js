import styled from 'styled-components';

export const ProductsGridWrapper = styled.section`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  padding: 24px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
