import styled from 'styled-components';
import { Button } from '../Button';

export const ProductQuantityAdderWrapper = styled.div`
  margin-top: 20px;
  > strong {
    display: block;
    margin-bottom: 10px;
  }

  > form {
    display: flex;
  }
`;

export const StyledButton = styled(Button)`
  border: 3px solid transparent;
  background-image: linear-gradient(
    43deg,
    #fadebc 0%,
    #fbbc8b 46%,
    #fe9567 100%
  );
  background-origin: border-box;
  box-shadow: 2px 1000px 1px #fff inset, 0 3px 10px hsla(18, 99%, 70%, 0.5);

  &:hover {
    border: 3px solid transparent !important;
    color: black !important;
    background-image: linear-gradient(
      43deg,
      #fe9567 0%,
      #fbbc8b 46%,
      #fadebc 100%
    ) !important;
    box-shadow: 2px 1000px 1px #fff inset, 0 3px 10px hsla(18, 99%, 70%, 0.5) !important;
  }
`;
