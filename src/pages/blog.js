import React from 'react'
import { graphql } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Seo from '../components/Seo'
import SocialFooter from '../components/SocialFooter'

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <div id="global-wrapper">
                <Seo />
                <p>
                    No blog posts found
                </p>
                <SocialFooter />
            </div>
        )
    }

    return (
        <div id="global-wrapper">
            <Seo />
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
            <SocialFooter />
        </div>
    )
}

export default Blog

export const pageQuery = graphql`
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
