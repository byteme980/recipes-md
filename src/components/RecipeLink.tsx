import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

const RecipeLink = ({ recipe }) => (
  <div className="recipe-link">
    {recipe.frontmatter.imageUrl && <img src={recipe.frontmatter.imageUrl} />}
    <Link to={recipe.frontmatter.slug}>
      {recipe.frontmatter.title}
    </Link>
  </div>
)

export default RecipeLink;
