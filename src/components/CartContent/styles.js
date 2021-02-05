import styled from 'styled-components';

export const CartWrapper = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  > h1 {
    > span {
      background-image: linear-gradient(
        43deg,
        #fadebc 0%,
        #fbbc8b 46%,
        #fe9567 100%
      );
      background-size: 100% 0.2em;
      background-repeat: no-repeat;
      background-position: 0 88%;
    }
  }

  @media (max-width: 834px) {
    margin: 40px 32px;
  }
`;

export const CartItem = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  > div {
    padding: 8px;

    &:first-child {
      > div:first-child {
        font-weight: bold;
      }
      > div:last-child {
        color: #999;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
`;

export const CartHeader = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  font-weight: bold;
  > div {
    padding: 8px;
  }
`;

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 40px;
  > div {
    padding: 8px;

    &:first-child {
      text-align: right;
    }
  }
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:last-child {
    text-align: right;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
  padding: 16px;
  cursor: pointer;
  margin: 24px auto;
  color: black;
  text-transform: uppercase;
  text-align: center;
  border: none;
  font-size: 1rem;
  border-radius: 25px;
  box-shadow: 0 3px 10px hsla(18, 99%, 70%, 0.5);

  &:hover {
    box-shadow: 0 3px 15px hsla(18, 99%, 70%, 0.7);
  }
  @media (max-width: 833px) {
    min-height: 70px;
  }
`;
