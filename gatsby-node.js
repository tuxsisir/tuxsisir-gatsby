/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve('./src/templates/blogTemplate.js')
  const cheatsheetTemplate = require.resolve('./src/templates/cheatsheetTemplate.js')

  return graphql(`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "/src/blog-pages/"} }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      cheatsheets: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "/src/cheatsheet-pages/"} }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild('Error while running GraphQL query.')
    }
    // create blog pages with its own template
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
        // additional data can be passed via context
          slug: node.frontmatter.slug
        }
      })
    })
    // create cheatsheet pages with its own template
    result.data.cheatsheets.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: cheatsheetTemplate,
        context: {
        // additional data can be passed via context
          slug: node.frontmatter.slug
        }
      })
    })
  })
}
