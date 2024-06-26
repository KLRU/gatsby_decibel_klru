import React from 'react';
import { graphql } from 'gatsby';
import '../styles/global.css'
import { Link } from 'gatsby'
import styled from 'styled-components';
import '../styles/global.css'
import Container from '../components/Container/Container';
import SmallContainer from "../components/Container/SmallContainer";
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom';
import SearchResults from "../components/Search/SearchResults";
import SEO from '../components/SEO';
import AlgoliaLogo from '../images/search-by-algolia-light-background.png';
import Footer from '../components/Footer/Footer';



const SearchDiv = styled.div`
width:100%;
display:grid;
.ais-SearchBox{
  width:100%;
  display:grid;
  //grid-template-columns: 70% 30%;
  padding:25px;
}
.ais-SearchBox-form{
  width:100%;
  font-size:30px;
}
.ais-SearchBox-input{
  width: 100%;
  height:30px;
  font-size: 30px;
  padding: 20px;
}
.ais-SearchBox-submit{
  padding:10px 20px;
  background-color: #fff;
  .ais-SearchBox-submitIcon{
    
  }
}

`

const SearchPage = ({data}) =>{
  const [ ...tags ] = data.allContentfulTag.edges;
  const posts = data.allContentfulPost.edges;
  const searchClient = algoliasearch('465BL44UJ0', '7e97084438ea03e0abf87df591b68438');
   
  return(
   <Container>
      <SEO 
      title="Search"/>
     <Header>
     <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <li className ="topicTag"><Link className="topicTagLink" to={'/topics'}>+ All Topics</Link></li>
      </TagList>
     </Header>
     <SmallContainer>
    <SearchDiv>
     <InstantSearch searchClient={searchClient} indexName="Decibel">
      <SearchBox>
      </SearchBox>
      <Hits hitComponent={SearchResults}>
      {posts.map(({node:post})=>(
        <SearchResults key={posts.id} {...post}/>
        ))}
      </Hits>
    </InstantSearch>
    <img src={AlgoliaLogo} alt="Search by Algolia"/>
    </SearchDiv>
      </SmallContainer>
      <Footer />

   </Container>
  )
}

export default SearchPage;


export const query = graphql`
query{
  allContentfulTag(
    limit: 10
    sort: { fields: title, order: ASC  }
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
        topicDescription{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  },
  allContentfulPost(
     sort: { fields: [publishDate], order: DESC }
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
          topicDescription{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    }
  }
}
`