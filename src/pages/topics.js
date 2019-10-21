import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import '../styles/global.css';
import Container from '../components/Container/Container';

const TopicsPage = ({ data }) => {
  const allTopics=data.allContentfulTag.edges;
  return (
    <Container>
      <h1>All Topics</h1>
      {allTopics.map(({node:allTopic}) => (
        <div>
        <img src={allTopic.image.fluid.src} alt={allTopic.title} />
        <h2 key={allTopic.id}><Link to={`/${allTopic.slug}`}>{allTopic.title}</Link></h2>
        </div>
      ))}
      <Link to='/'>Decibel Home</Link>
    </Container>
  )
};

export const query =graphql`
  query {
    allContentfulTag (
      sort: { fields: title, order: ASC }
    ){
      edges {
        node {
          title
          slug
          image{
            fluid{
              src
            }
          }
          id
        }
      }
    }
  }
`

export default TopicsPage;
