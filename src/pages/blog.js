import React from 'react';
import { graphql } from 'gatsby';
import '../styles/global.css'
import { Link } from 'gatsby';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';
import SEO from '../components/SEO';


const PageTitle = styled.h1`
  text-align:center;
`

const AllBlogsDiv = styled.div`
  display:grid;
  width: 100%;
  justify-items:center;
  margin: 10px auto;
  padding-bottom: 10px;
  border: 1px solid rgba(0, 57, 70, .25);
  box-shadow: 0px 2px 4px rgba(0, 57, 70, .25);
  
  h2{
    margin:10px 0 0 0;
    font-size:30px;
  }
  p{
    margin-top:0;
  }
  img{
    width:70%;
  }
  .blogBody{
    width:70%;
    margin-top:20px;
    font-size:22px;
  }
  a{
    button{
      border: 1px solid rgba(0, 57, 70, .5);
    font-size:16px;
  }
  }
  
`


const BlogPage = ({data}) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  const [ ...tags ] = data.allContentfulTag.edges;
  

  return(
    <Container>
       <SEO 
      title="Judy's Journal"/>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
            <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
      <PageTitle>Judy's Journal</PageTitle>
      {blogPosts.map(({node:blogPost}) =>(
        <AllBlogsDiv>
        <h2 key={blogPost.id}>{blogPost.title}</h2>
        <p>{blogPost.date}</p>
        <img src={blogPost.image.fluid.src}  alt={blogPost.image.title}/>
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
        tags{
          id
          title
          slug
        }
        image{
          title
          description
          fluid{
            src
          }
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