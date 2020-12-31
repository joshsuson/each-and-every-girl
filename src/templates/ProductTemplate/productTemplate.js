import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import { Grid } from "./productStyles"
import ImageGallery from "../../components/imageGallery/ImageGallery"

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default function ProductTemplate(props) {
  return (
    <Layout>
      <Grid>
        <div>
          <ImageGallery images={props.data.shopifyProduct.images} />
        </div>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
        </div>
      </Grid>
    </Layout>
  )
}
