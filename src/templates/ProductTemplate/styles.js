import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
`;
