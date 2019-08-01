import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';

const BlogPage = ({data}) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  const [ ...tags ] = data.allContentfulTag.edges;

  return(
    <Container>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
      </TagList>
      </Header>
      {blogPosts.map(({node:blogPost}) =>(
        <h2 key={blogPost.id}>{blogPost.title}</h2>
      ))}
    </Container>
  )
}

export const query = graphql`
query{
  allContentfulBlogPost{
    edges{
      node{
        id
        title
      }
    }
  },
  allContentfulTag(
    limit: 10
    sort: { fields: [post___publishDate], order: DESC }
  ){
    edges {
      node {
        title
        slug
      }
    }
  }
}
`
export default BlogPage;