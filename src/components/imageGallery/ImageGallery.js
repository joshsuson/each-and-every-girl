import React, { useState } from "react"
import Img from "gatsby-image"
import { ImageGalleryWrapper, MainImage } from "./styles"
import ImageThumbnail from "../imageThumbnail/ImageThumbnail"

export default function ImageGallery({ images }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(images[0])
  const handleClick = image => {
    setActiveImageThumbnail(image)
  }
  return (
    <ImageGalleryWrapper>
      <div>
        <MainImage
          fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
          objectPosition="top center"
        />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              image={image}
              onClick={handleClick}
              isActive={activeImageThumbnail.id === image.id}
            />
          )
        })}
      </div>
    </ImageGalleryWrapper>
  )
}
