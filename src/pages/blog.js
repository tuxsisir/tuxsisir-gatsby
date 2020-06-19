import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import PostLink from '../components/post-link'
import Layout from '../components/layout'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Blog</h2>
      <p>
       You might find these mini blogs, short, well that's what mini blogs are but
        I want readers to stimulate their own thought process with the topics that I dive into.
      </p>
      {Posts}
    </Layout>
  )
}
export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/blog-pages/"} },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
