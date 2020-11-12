import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroBox = styled.div`
  display:grid;
  margin: 0 auto;
  grid-template-columns: 70% 30%;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  grid-gap:10px;
  width:100%;
  max-width:1200px;
  .mainStory{
    display:grid;
    width:100%; 
    height:0;
    padding-bottom: 54.5%;
    position:relative;
    @media screen and (max-width: 1050px){
      width:100%; 
      height:0;
      padding-bottom: 54.9%;
      position:relative;
    }
  }
  .mainStory img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
  .mainStory h2{
    position: absolute;
    bottom: 0;
    padding-left:10px;
    color: #fff;
    text-shadow: 2px 2px #000;
  }
  .sideColumn{
    display:grid;
    align-content: center;
    grid-gap: 10px;
  }
  .sideStory h2{
    position: absolute;
    bottom: 0;
    padding-left:10px;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
  }
  .sideStory{
    width:100%; 
    height:0;
    padding-bottom:62.25%;
    position:relative;
  }
  .sideStory img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
`

const Homepage = ({data, pageContext}) => {
  const pageContent = data.contentfulHomepage;
  //const story = data.allContentfulHomepage.edges;
  //const posts = pageContent.storyBlocks;
  
  
  return(
    <div>
      <h1>Homepage</h1>
      <HeroBox>
      <div className="mainStory">
      <Link to={`${pageContent.mainStory.tags[0].slug}/${pageContent.mainStory.slug}/`}>
        <img src={`https:${pageContent.mainStory.heroImage.file.url}`} alt={pageContent.mainStory.heroImage.title} />
        <h2>{pageContent.mainStory.title}</h2>
        </Link>
      </div>
      <div className='sideColumn'>
      <div className='sideStory'>
      <Link to={`${pageContent.sideStories[0].tags[0].slug}/${pageContent.sideStories[0].slug}/`}>
        <img src={`https:${pageContent.sideStories[0].heroImage.file.url}`} alt={pageContent.sideStories[0].heroImage.title} /> 
        <h2>{pageContent.sideStories[0].title}</h2>
        </Link>
      </div>
      <div className='sideStory'>
      <Link to={`${pageContent.sideStories[1].tags[0].slug}/${pageContent.sideStories[1].slug}/`}>
        <img src={`https:${pageContent.sideStories[1].heroImage.file.url}`} alt={pageContent.sideStories[1].heroImage.title} /> 
        <h2>{pageContent.sideStories[1].title}</h2>
      </Link>
      </div>
      </div>
    </HeroBox>
    </div>
  )
}

export const query = graphql`
  query{
    contentfulHomepage{
      title
      mainStory{
        title
        slug
        heroImage{
          file{
            url
          }
        }
        body {
          childMarkdownRemark {
                excerpt(
                  format: HTML
                  pruneLength: 140)
              }
            }
        tags{
          slug
          title
        }
      }
      sideStories{
        title
         slug
        heroImage{
          file{
            url
          }
        }
        body {
          childMarkdownRemark {
                excerpt(
                  format: HTML
                  pruneLength: 140)
              }
        }
        tags{
          slug
          title
        }
      }
    }
}
`

export default Homepage;