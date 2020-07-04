/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const notesPostTemplate = require.resolve('./src/templates/notesTemplate.js')
  const cheatsheetTemplate = require.resolve('./src/templates/cheatsheetTemplate.js')

  return graphql(`
    {
      notes: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "/src/notes-pages/"} }
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
    // create notes pages with its own template
    result.data.notes.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: notesPostTemplate,
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
