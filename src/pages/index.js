import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import RecipeLink from '../components/RecipeLink';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const recipesByType = useMemo(() => {
    const map = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
      dessert: [],
    };
    edges.forEach((edge) => {
      const mealType = edge.node.frontmatter.mealType;

      if (!Object.keys(map).includes(mealType)) {
        console.error(
          `unknown mealType for recipe ${edge.node.frontmatter.mealType}`
        );
        return;
      }

      map[mealType].push(edge);
    });
    return map;
  }, [edges]);

  const recipeTypesToRender = Object.keys(recipesByType).filter(
    (type) => recipesByType[type].length > 0
  );

  return (
    <Layout>
      <SEO title="All recipes" />
      <div className="recipes-index">
        {recipeTypesToRender.map((mealType) => {
          return (
            <section key={mealType}>
              <h2>{mealType}</h2>
              {recipesByType[mealType].map((edge) => (
                <RecipeLink key={edge.node.id} recipe={edge.node} />
              ))}
            </section>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

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
            mealType
            imageUrl
          }
        }
      }
    }
  }
`;
