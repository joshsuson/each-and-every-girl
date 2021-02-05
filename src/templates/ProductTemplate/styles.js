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

export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 1200px;

  @media (max-width: 834px) {
    margin: 40px 16px;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
`;

export const Title = styled.h1`
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
`;
