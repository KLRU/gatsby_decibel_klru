import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
//import TagCards from '../components/TagCards/tagCards';
import Container from '../components/Container/Container';
import SmallContainer from '../components/Container/SmallContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Pagination from '../components/Paginate/Paginate'
import BlackPlayButton from '../images/BlackPlayButton.png'

const AllPostDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: 20px auto;
  align-content:center;
  justify-items:center;
  .postCard{
    width:100%;
    .imageHolder{
      width:100%; 
      height:0;
      padding-bottom: 56.25%;
      position:relative;
      img{
        position:absolute;
        width:100%;
        height:100%;
        border:none;
      }
    }
    .infoHolder{
      h2{
        margin:5px 0;
      }
      p{
        margin:0;
      }
    }
  }


`

const ArchiveTemplate =({data, pageContext}) =>{
  const archivePosts = data.allContentfulPost.edges;
  const tags2 = data.allContentfulTag.edges;

  function AddPlayButton(){
    if(archivePosts.featuredVideo){
      return <span><img src={BlackPlayButton} alt={'Play Button'}/></span>
    }else{
      return <span></span>
    }
  }
  return(
    <Container>
       <Header>
      <TagList>
         {tags2.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
          <Link to={'/topics'}><p>+ More Topics</p></Link>
      </TagList>
      </Header>
      <SmallContainer>
        <h1>Archive</h1>
      <AllPostDiv>
      {archivePosts.map(({node:archivePost})=>(
      <div className='postCard'>
        <div className='imageHolder'>
          <img src={archivePost.heroImage.fluid.src} alt={archivePost.heroImage.title} />
        </div>
        <div className ='infoHolder'>
          <Link to={`/${archivePost.tags[0].slug}/${archivePost.slug}`}>
          <h2><AddPlayButton />{archivePost.title}</h2>
          <p>{archivePost.publishDate}</p>
          </Link>
        </div>
      </div>
      ))} 
      </AllPostDiv>
      <Pagination pageContext={pageContext} />
    </SmallContainer>
    <Footer />
    </Container>
  )
}

export const query = graphql`
query ($skip: Int!, $limit: Int!){
  allContentfulPost(
    sort: { fields: [publishDate], order: DESC }
    skip: $skip
    limit: $limit
  ){
    edges{
      node{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY") 
        body{
            childMarkdownRemark {
              excerpt(
                format: HTML
                pruneLength: 140)
            }
        }
        heroImage{
          title
         fluid{
            src
          }
        }
        featuredVideo{
          title
          embedCode
          source
        }
        tags{
          id
          slug
          title
          
        }
      }
    }
  },
  allContentfulTag(
    limit: 10
    sort: { fields: title, order: ASC}
  ){
    edges {
      node {
        title
        slug
      }
    }
  },
}
`


export default ArchiveTemplate;