import styled from 'styled-components';
import bg from '../../assets/images/jumbobg.jpg';
import { Link } from 'react-scroll';

export const JumboWrapper = styled.div`
  margin: 0;
  padding: 16px 0;
  box-sizing: border-box;
  background: linear-gradient(
      45deg,
      hsla(0, 0%, 0%, 0.2) 0%,
      hsla(0, 0%, 0%, 0.2) 100%
    ),
    url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 500px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  margin: 0;
  color: black;
  text-shadow: 0 0 15px hsla(0, 0%, 0%, 0.25);
  & span {
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

  @media (max-width: 833px) {
    font-size: 2rem;
  }
`;

export const JumboButton = styled(Link)`
  cursor: pointer;
  background: linear-gradient(43deg, #fadebc 0%, #fbbc8b 46%, #fe9567 100%);
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  width: 25%;
  padding: 12px;
  text-transform: uppercase;
  box-shadow: 0 0px 10px hsla(18, 99%, 70%, 0.8);
  border-radius: 25px;

  &:hover {
    box-shadow: 0 0px 13px hsla(18, 99%, 70%, 0.8);
  }

  @media (max-width: 833px) {
    width: 85%;
  }
`;
