import React from "react";
import { Link } from "gatsby";

export default ({ post }) => (
  <div>
    <h3><Link to={ post.fields.slug }>{ post.frontmatter.title }</Link></h3>
    <h5>Category: { post.frontmatter.category } || Date: { post.frontmatter.date }</h5>
    <p>{ post.excerpt }</p>
    <hr />
  </div>
)