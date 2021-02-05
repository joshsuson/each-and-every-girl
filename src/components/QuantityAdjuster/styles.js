import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div {
    margin: auto 0;
    padding: 5px 10px;
  }
`;

export const AdjusterButton = styled.div`
  cursor: pointer;
  /* border: 1px solid black;
  font-weight: bold; */
  border: 3px solid transparent;
  background-image: linear-gradient(
    43deg,
    #fadebc 0%,
    #fbbc8b 46%,
    #fe9567 100%
  );
  background-origin: border-box;
  box-shadow: 2px 1000px 1px #fff inset, 0 0px 10px hsla(18, 99%, 70%, 0.5);

  &:hover {
    background-image: linear-gradient(
      43deg,
      #fe9567 0%,
      #fbbc8b 46%,
      #fadebc 100%
    );
  }
`;
