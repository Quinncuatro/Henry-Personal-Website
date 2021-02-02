import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer"

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!data) return null;
    return (
      <Layout>
        <div>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          <a href="../../blog">&#8656; Back to Posts</a>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
