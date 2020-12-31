import React from "react"
import Img from "gatsby-image"
import { StyledThumbnail } from "./styles"

export default function ImageThumbnail({ image, onClick, isActive }) {
  const handleClick = () => {
    onClick(image)
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <StyledThumbnail
        fluid={image.localFile.childImageSharp.fluid}
        isActive={isActive}
      />
    </div>
  )
}
