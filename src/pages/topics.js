import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import '../styles/global.css';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components'

const AllTopicsWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
 justify-items:center;
 div{
   padding: 20px;
   border: 1px solid #ccc;
   margin-bottom: 20px;
   img{
     object-fit:cover;
     width: 250px;
     height: 200px;
   }
 }



`

const TopicsPage = ({ data }) => {
  const allTopics=data.allContentfulTag.edges;
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
      <h1>All Topics</h1>
      <AllTopicsWrapper>
      {allTopics.map(({node:allTopic}) => (
        <div>
        <img src={allTopic.image.fluid.src} alt={allTopic.title} />
        <h2 key={allTopic.id}><Link to={`/${allTopic.slug}`}>{allTopic.title}</Link></h2>
        </div>
      ))}
      </AllTopicsWrapper>
      <Footer/>
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
