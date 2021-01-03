exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/blog.js`)

    const result = await graphql(`
    {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            nodes {
                id
                frontmatter {
                    slug
                }
            }
        }
    }`)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`, result.errors)
        return
    }

    const posts = result.data.allMarkdownRemark.nodes

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id
            const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
            createPage({
                path: post.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: post.frontmatter.slug,
                    id: post.id,
                    previousPostId,
                    nextPostId,
                },
            })
        })
    }
}

// https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/gatsby-node.js
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
      }
      type Fields {
        slug: String
      }
    `)
}
