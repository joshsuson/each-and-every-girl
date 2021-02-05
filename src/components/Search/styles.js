import styled from 'styled-components';
import { Button } from '../Button';

export const SearchForm = styled.form`
  display: flex;
  margin-left: auto;

  @media (max-width: 834px) {
    margin-left: 0;
    grid-column: 1 / span 2;
    justify-self: center;
  }
`;

export const SearchButton = styled(Button)`
  border: none;
  color: white;
  background-color: #fe9567;
  background-image: linear-gradient(
    43deg,
    #fadebc 0%,
    #fbbc8b 46%,
    #fe9567 100%
  );
  transition: 10s;

  &:hover {
    border: none !important;
    background-color: #fe9567 !important;
    background-image: linear-gradient(
      43deg,
      #fe9567 0%,
      #fbbc8b 46%,
      #fadebc 100%
    ) !important;
  }
`;
