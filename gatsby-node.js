/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve('./src/templates/blogTemplate.js')

  const blogs = graphql(`
    {
      allMarkdownRemark(
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
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
        // additional data can be passed via context
          slug: node.frontmatter.slug
        }
      })
    })
  })

  const cheatsheetTemplate = require.resolve('./src/templates/cheatsheetTemplate.js')
  const cheatsheets = graphql(`
    {
      allMarkdownRemark(
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
      return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([blogs, cheatsheets])
}
