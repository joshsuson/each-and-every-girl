import React from 'react';
import {
  Layout,
  SEO,
  Jumbotron,
  ProductSection,
  AboutSection,
} from 'components';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="Each and Every Girl Homepage" />
      <Jumbotron backgroundImage={data.backgroundImage.childImageSharp.fluid} />
      <ProductSection />
      <AboutSection image={data.addison.childImageSharp.fluid} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "jumbobg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    addison: file(relativePath: { eq: "addison.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
