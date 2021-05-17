import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const { imageUrl } = frontmatter;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="recipe-container">
        <div className="recipe">
          <h1>{frontmatter.title}</h1>
          {imageUrl && <img src={imageUrl} className="featured-image" />}
          <div
            className="recipe-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        imageUrl
      }
    }
  }
`;
