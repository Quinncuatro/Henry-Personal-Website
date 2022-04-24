import React from "react";
import { Link } from "gatsby";

export default ({ post }) => (
  <div>
    <h3><Link to={ post.fields.slug }>{ post.frontmatter.title }</Link></h3>
  </div>
)