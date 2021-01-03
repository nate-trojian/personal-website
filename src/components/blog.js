import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <section id="blog-posts">
        <p>
          No blog posts found
          </p>
      </section>
    )
  }

  return (
    <section id="blog-posts">
      <Container>
        {posts.map(post => (
          <Row>
            <Col>
              <h3>{post.frontmatter.title}</h3>
              <p dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }} />
              <small className="text-muted">{post.frontmatter.date}</small>
            </Col>
            <Col>
              <img alt="test"></img>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Blog
