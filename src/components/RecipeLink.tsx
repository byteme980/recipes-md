import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

const RecipeLink = ({ recipe }) => (
  <div className="recipe-link">
    {/* might need to change to a normal img tag */}
    {recipe.frontmatter.imageUrl && <img src={recipe.frontmatter.imageUrl} />}
    <Link to={recipe.frontmatter.slug}>
      {recipe.frontmatter.title}
    </Link>
  </div>
)

export default RecipeLink;
