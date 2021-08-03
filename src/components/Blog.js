import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Segment, Grid, Card, Image, Divider, Header } from 'semantic-ui-react'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
        }
      }
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.nodes

  return (
    <Segment vertical style={{padding: '0em 6em', borderBottom: "none"}}>
      <Divider horizontal>
        <Header as='h2'>
          Blog
        </Header>
      </Divider>
      <Grid centered>
        {posts.map(post => (
          <Grid.Row key={post.id} columns={1}>
            <Card href={post.frontmatter.slug}>
              { post.frontmatter.img && <Image src={post.frontmatter.img} floated='left'/> }
              <Card.Content textAlign="left">
                <Card.Header>{post.frontmatter.title}</Card.Header>
                <Card.Meta>{post.frontmatter.date}</Card.Meta>
                <Card.Description dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }} />
              </Card.Content>
            </Card>
          </Grid.Row>
        ))}
      </Grid>
    </Segment>
  )
}

export default Blog
