import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import '../styles/global.css';
import Container from '../components/Container/Container';
import SmallContainer from "../components/Container/SmallContainer";
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components'
import SEO from '../components/SEO';


const AllTopicsWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
 justify-items:center;

`
const TopicCard = styled.div`
  padding: 20px;
   border: 1px solid rgba(0, 57, 70, .25);
   box-shadow: 0px 2px 3px rgba(0, 57, 70, .25);
   margin-bottom: 20px;
   img{
    object-fit:cover;
    width: 250px;
    height: 200px;
  }
    h2{
      margin-bottom:0;
     }
     p{
       margin:0;
     }
  }
`

const TopicsPage = ({ data }) => {
  const allTopics=data.allContentfulTag.edges;
  const [ ...tags ] = data.allContentfulTag.edges;
  return (
    <Container>
       <SEO 
      title="All Topics"/>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
          <SmallContainer>
      <h1>All Topics</h1>
      <AllTopicsWrapper>
      {allTopics.map(({node:allTopic}) => (
        <TopicCard>
        <div>
        <img src={allTopic.image.fluid.src} alt={allTopic.title} />
        </div>
        <h2 key={allTopic.id}><Link to={`/${allTopic.slug}`}>{allTopic.title}</Link></h2>
        <p>{allTopic.updatedAt}</p>
        </TopicCard>
      ))}
      </AllTopicsWrapper>
      </SmallContainer>
      <Footer/>
    </Container>
  )
};

export const query =graphql`
  query {
    allContentfulTag (
      sort: { fields: title, order: ASC }
      filter:{
        slug:{
          nin: ["episodes", "live", "decibel-dialogue"] 
        }
      }
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
          updatedAt(formatString: "MMMM YYYY")
        }
      }
    }
  }
`

export default TopicsPage;
