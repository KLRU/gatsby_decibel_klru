import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';

const PageTitle = styled.h1`
  text-align:center;
`

const AllBlogsDiv = styled.div`
  display:grid;
  justify-items:center;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 4px #eee;
  width: 1100px;
  h2{
    margin:10px 0 0 0;
    font-size:30px;
  }
  p{
    margin-top:0;
  }
  .blogBody{
    width:800px;
    margin-top:20px;
    font-size:22px;
  }
  a{
    button{
    border: 1px solid #000;
    font-size:16px;
  }
  }
  
`


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
      <PageTitle>Decibel Blog</PageTitle>
      {blogPosts.map(({node:blogPost}) =>(
        <AllBlogsDiv>
        <h2 key={blogPost.id}>{blogPost.title}</h2>
        <p>{blogPost.date}</p>
        <img src={blogPost.images[0].fluid.src} />
        <p className='blogBody' dangerouslySetInnerHTML={{__html:blogPost.blogPostBody.childMarkdownRemark.excerpt}}></p>
        <Link to={`/${blogPost.slug}`}><button>Read More</button></Link>
        </AllBlogsDiv>
      ))}

      <Footer/>
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
        slug
        author
        date(formatString: "MMMM D, YYYY")
        blogPostBody{
          childMarkdownRemark{
            html
            excerpt(
              format: HTML
              pruneLength: 600)
          }
        }
        images{
          fluid{
            src
          }
        }
        tags{
          id
          title
          slug
        }
      }
    }
  },
  allContentfulTag(
    limit: 10
    sort: { fields: title, order: ASC }
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