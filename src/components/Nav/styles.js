import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 12px;
  font-size: 1.25rem;
  color: black;

  &:hover {
    border-bottom: 2px solid hsl(18, 99%, 70%);
  }

  &[aria-current='page'] {
    border-bottom: 2px solid hsl(18, 99%, 70%);
  }

  @media (max-width: 834px) {
    font-size: 1rem;
  }
`;

export const NavContainer = styled.div`
  padding: 0px 16px;

  @media (max-width: 834px) {
    grid-column: 1 / span 2;
    justify-self: center;
    margin: 4px;
  }
`;
