import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid'
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import MainStory from '../components/MainStory/MainStory';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import SecondaryStory from '../components/SecondaryStory/SecondaryStory';
import SecondaryStoryGrid from '../components/SecondaryStory/SecondaryStoryGrid'
import LatestNews from '../components/LatestNews/LatestNews';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual'

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const { title, mainStory, secondaryStories: [...secondaryStories] } = data.allContentfulHomepage.edges[0].node;
  const [ ...tags ] = data.allContentfulTag.edges;
  return (
    <Container>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
      <h1>{mainStory.tags[0].title} is Decibel's Topic of the Month</h1>
      <HeroGrid>
      <MainStory {...mainStory} key={mainStory.id} /> 
      {/* <SecondaryStoryGrid>
      {secondaryStories.map((secondaryStory) => {
        return<SecondaryStory { ...secondaryStory } key={secondaryStory.id} />
      })}</SecondaryStoryGrid> */}
      </HeroGrid>
     <LatestNews>
        <LatestNewsList>
         {posts.map(({node:post})=>(
           <LatestNewsItem key={posts.id} {...post}/>
         ))}
        </LatestNewsList> 
    </LatestNews>     
    <TexasMutual /> 
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query {
    allContentfulPost( 
      sort: { fields: [publishDate], order: DESC }
      filter:{
        tags:{
          elemMatch:{
            featuredTopic: {eq: true}
          }
        }
      }
     ) {
      edges {
        node {
          title
          slug
          id
          heroImage {
            fluid {
              src
            }
          }
          publishDate(formatString: "MMMM DD, YYYY")
          featuredVideo {
            title
            embedCode
            source
          }
          body {
            childMarkdownRemark {
              html
              excerpt(
                format: HTML
                pruneLength: 140)
            }
          }
          tags {
            title
            slug
            featuredTopic
          }
          featured
        }
      }
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC  }
    ){
      edges {
        node {
          title
          slug
        }
      }
    },
    allContentfulHomepage {
      edges {
        node {
          title
          mainStory {
            id
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            heroImage {
              fluid {
                src
              }
              description
            }
            featuredVideo{
              embedCode
              source
            }
            body {
              childMarkdownRemark {
                html
                excerpt(
                  format: HTML
                  pruneLength: 140)
              }
            }
            tags {
              title
              slug
            }
          }
          secondaryStories {
            id
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            heroImage {
              fluid {
                src
              }
              description
            }
            body {
              body
            }
            tags {
              title
              slug
              featuredTopic
            }
          }
        }
      }
    }
  }
`

export default IndexPage;