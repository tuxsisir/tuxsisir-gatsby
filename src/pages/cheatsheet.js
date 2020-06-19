import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import CheatSheetLink from '../components/cheatsheet-link'
import Layout from '../components/layout'

const CheatsheetPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Cheatsheets = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <CheatSheetLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Cheatsheets" />
      <h2>Cheatsheets</h2>
      <p>
        Here are some of my cheatsheets that I find useful to refer back.
      </p>
      <ul>
        {Cheatsheets}
      </ul>
    </Layout>
  )
}
export default CheatsheetPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/cheatsheet-pages/"} },
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
