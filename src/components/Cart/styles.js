import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;

  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 834px) {
    grid-column: 1 / span 2;
    justify-self: center;
  }
`;
