import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from '../components/Header/Header'
import '../styles/main.css'
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid'
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import MainStory from '../components/MainStory/MainStory';
import SecondaryStory from '../components/SecondaryStory/SecondaryStory';
import SecondaryStoryGrid from '../components/SecondaryStory/SecondaryStoryGrid';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const { title, mainStory, secondaryStories: [...secondaryStories] } = data.allContentfulHomepage.edges[0].node;
  const [...tags] = data.allContentfulTag.edges;
  console.log(data);
  return (
    <Container>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
          <Link to={'/topics'}><p>+ More Topics</p></Link>
      </TagList>
      </Header>
      {/* <h1>{title}</h1> */}
      <HeroGrid>
      <MainStory {...mainStory} key={mainStory.id} />
      <SecondaryStoryGrid>
      {secondaryStories.map((secondaryStory) => {
        return <SecondaryStory {...secondaryStory} key={secondaryStory.id} />
      })}
      </SecondaryStoryGrid>
      </HeroGrid>
  
    <div>
      {/* <Link to={'/about'}>About Page</Link>
      <Link to={'/topics'}>Topics</Link> */}
      <LatestNewsList>
        <h2>Latest News</h2>
       {posts.map(({node:post})=>(
         <LatestNewsItem key={posts.id} {...post}/>
       ))}
      </LatestNewsList>


      
    </div>
    </Container>
  )
};

export const query = graphql`
query {
  allContentfulPost( sort: { fields: [publishDate], order: DESC }
  skip:3) {
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
        }
        featured
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
  },
  allContentfulHomepage {
    edges {
      node {
        title
        mainStory {
          id
          title
          slug
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
          }
        }
        secondaryStories {
          id
          title
          slug
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
          }
        }
      }
    }
  }
}
`

export default IndexPage;