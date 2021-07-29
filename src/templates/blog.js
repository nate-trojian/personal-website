import React from "react"
import { Link, graphql } from "gatsby"

import Seo from '../components/Seo'
import Footer from '../components/Footer'

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  return (
    <div id="global-wrapper">
      <Seo />
      <article className="blog-post">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <nav className="blog-post-nav">
        <ul className="blog-post-nav-bar">
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`