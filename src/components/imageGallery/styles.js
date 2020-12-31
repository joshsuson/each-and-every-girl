import styled from "styled-components"
import tw from "twin.macro"
import Img from "gatsby-image"

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    ${tw`rounded-3xl shadow-2xl mx-auto`}
  }

  > div:last-child {
    ${tw`my-12 grid grid-cols-3 gap-8`}
  }
`

export const MainImage = styled(Img)`
  ${tw`rounded-3xl`}
  height: 400px;
  picture > img {
    object-position: top center !important;
  }
`
