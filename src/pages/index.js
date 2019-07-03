import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/main.css'
import Container from '../components/Container/Container';
import TagList from '../components/TagList';
import MainStory from '../components/MainStory/MainStory';
import SecondaryStory from '../components/SecondaryStory/SecondaryStory';

const IndexPage = ({ data }) => {
  const { title, mainStory, secondaryStories: [...secondaryStories] } = data.allContentfulHomepage.edges[0].node;
  const [...tags] = data.allContentfulTag.edges;
  return (
    <Container>
      <h1>{title}</h1>
      <MainStory {...mainStory} key={mainStory.id} />
      {secondaryStories.map((secondaryStory) => {
        return <SecondaryStory {...secondaryStory} key={secondaryStory.id} />
      })}

      <TagList>
        {tags.map(({node:tag})=>(
          <li key={tag.id}><Link to={`/${tag.slug}/`}>{tag.title}</Link></li>
        ))}
      </TagList>
<<<<<<< HEAD
      
    <div>
      
      {posts.map(({node:post}) =>(
<<<<<<< HEAD
      <LatestNews>
        <div key={post.id}>
    
          <img className='latestNewsImage' src={post.heroImage.fluid.src} alt={post.title}/>
        
=======
        <div className="story" key={post.id}>
          <div className="storyImage">
            <img className='latestNewsImage' src={post.heroImage.fluid.src} alt={post.title} />
          </div>
>>>>>>> 0dd1325bca5b18e7e6317f9db33f06b218e77f27
          <div className='latestNewsText'>
            <h1><Link to={post.slug}>{post.title}</Link></h1>
            <p>{post.publishDate}</p>
            <p dangerouslySetInnerHTML={{__html:post.body.childMarkdownRemark.excerpt}}></p>
          </div>  
          </div> 
      </LatestNews>
      ))}
      
    </div>
=======
>>>>>>> e79a2a84a43c3c8a0ea5da31579f4485c69475cc
    </Container>
  )
};

export const query = graphql`
  query {
    allContentfulHomepage {
      edges {
        node {
          title
          mainStory {
            id
            body {
              body
            }
            tags {
              title
              slug
            }
            title
            slug
            heroImage {
              fluid {
                src
              }
              description
            }
          }
          secondaryStories {
            id
            body {
              body
            }
            heroImage {
              fluid {
                src
              }
              description
            }
            slug
            title
            tags {
              title
              slug
            }
          }
        }
      }
    }
    allContentfulTag(
      limit: 10
      sort: { fields: [post___publishDate], order: DESC }
    ){
      edges{
        node{
          title
          slug
          id
        }
      }
    }
  }
`

export default IndexPage;
