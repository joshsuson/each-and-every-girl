import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import { StyledLink } from '../StyledLink';
import Img from 'gatsby-image';

export const ProductTileWrapper = styled.div`
  display: grid;
  grid-template-rows: 295px 1fr auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  /* flex-direction: column; */
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  font-style: italic;
  padding-right: 20px;
  font-weight: bold;
  /* margin-top: auto; */
`;

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 16px 20px;
  align-items: center;
  /* margin-top: auto; */

  > ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    background-image: linear-gradient(
      43deg,
      #fadebc 0%,
      #fbbc8b 46%,
      #fe9567 100%
    );
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #fff inset, 0 3px 10px hsla(18, 99%, 70%, 0.5);
    text-decoration: none;
    padding: 0.5rem 3rem;
    text-align: center;
    font-weight: bold;
    color: black;
    max-height: 44px;

    &:hover {
      background-image: linear-gradient(
        43deg,
        #fe9567 0%,
        #fbbc8b 46%,
        #fadebc 100%
      );
    }
  }
`;

export const CardContent = styled.div``;

export const StyledImg = styled(Img)`
  height: auto;
  vertical-align: middle;
`;
