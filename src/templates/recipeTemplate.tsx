import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid = frontmatter.featuredImage?.childImageSharp?.fluid;

  return (
    <Layout>
      <div className="recipe-container">
        <div className="recipe">
          <h1>{frontmatter.title}</h1>
          {featuredImgFluid && <Img fluid={featuredImgFluid} className="featured-image" />}
          <div
            className="recipe-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
