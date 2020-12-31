import styled from "styled-components"
import Img from "gatsby-image"
import tw from "twin.macro"

export const StyledThumbnail = styled(Img)`
  ${tw`rounded-2xl`}
  cursor: pointer;
  height: 150px;
  border: ${props =>
    props.isActive ? "3px solid var(--primary-color)" : "none"};
  box-shadow: ${props =>
    props.isActive ? "0px 8px 24px hsla(9, 84%, 68%, 0.2)" : "none"};
`
