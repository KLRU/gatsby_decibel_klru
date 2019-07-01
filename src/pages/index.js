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
