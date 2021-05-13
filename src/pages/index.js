import React from "react"
import { graphql } from "gatsby"
import RecipeLink from "../components/RecipeLink"
import Layout from '../components/Layout';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Recipes = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <RecipeLink key={edge.node.id} recipe={edge.node} />)

  return (
    <Layout>
      <div className="recipes-index">
        {Recipes}
      </div>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
