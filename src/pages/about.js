import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
//import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
//import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
//import BioGrid from '../components/BioElements/BioGrid';
//import BioItem from '../components/BioElements/BioItem';

//function DisplayPageElement(pageElement) {
  //switch (pageElement.__typename) {
    //case 'ContentfulBiographyElement':
    //return<ContentfulBiographyElement key={pageElement.id} {...pageElement} />

    //case 'ContentfulPhotoElement':
     //return <ContentfulPhotoElement key={pageElement.id} {...pageElement} />

   // case 'ContentfulTextElement':
     //return <ContentfulTextElement key={pageElement.id} {...pageElement} />

    //case 'ContentfulVideoElement':
      //return <ContentfulVideoElement key={pageElement.id} {...pageElement} />

    //default:
      //return <div className="no_block_type" />
  //}
//}

function DisplayBiographies(pageElement){
  switch (pageElement.__typename){
    case 'ContentfulBiographyElement':
    return<ContentfulBiographyElement key={pageElement.id} {...pageElement} />

    default:
      return <div className="no_block_type" />
  }
}

const VideoDiv = styled.div`
    width:80%; 
    margin: 20px auto;
    height:0;
    padding-bottom:56.25%;
    position:relative;
      iframe{
        position:absolute;
        width:100%;
        height:100%;
        border:none;
      }
`

const BioDiv =styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 30px;
  box-sizing:border-box;
  margin-bottom:50px;
  .imageHolder{
    height:0;
    padding-bottom:56.25%;
    position:relative;
    img{
      position:absolute;
      width:100%;
      height:100%;
      border:none;
      
    }
  }
`

const BioItem = styled.div`
    width:100%;
    padding:25px;
    box-sizing:border-box;
    border: 1px solid #003946;
    //border: 1px solid #ccc;
`

const AboutPage = ({ data, pageContext }) => {
  const { title } = data.contentfulPage;
  const [ ...tags ] = data.allContentfulTag.edges;
  const [...bios] = data.allContentfulBiographyElement.edges;
  const videoIntro = data.contentfulVideoElement;
 
  return (
    <Container>
       <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
      </TagList>
      </Header>
      
      <VideoDiv> 
      {/* <h1 style={{textAlign: 'center'}}>{videoIntro.title}</h1> */}
      <iframe src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${videoIntro.embedCode}/`}/>
      </VideoDiv>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <BioDiv>
      {bios.map(({node:bio})=>(
        <BioItem>
        <div className='imageHolder'>
        <img src={`https:${bio.bioImage.file.url}`} alt={bio.bioName}/>
        </div>
        <h2>{bio.bioName}</h2>
        <p dangerouslySetInnerHTML={{__html:bio.bioText.childMarkdownRemark.html}}></p>
        </BioItem>
      ))}   
      </BioDiv>
  <Footer />
    </Container>
  )
};

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "about" }) {
      title
      pageElements {
        ... on ContentfulTextElement {
          childContentfulTextElementBodyTextNode {
            childMarkdownRemark {
              html
            }
          }
          id
        }
        ... on ContentfulBiographyElement {
          id
          bioImage {
            title
            file {
              url
            }
          }
          bioName
          bioText {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulVideoElement {
          id
          source
          embedCode
          title
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
    allContentfulBiographyElement{
      edges{
        node{
          bioName
          bioImage{
            file{
              url
            }
          }
          bioText{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    },
    contentfulVideoElement(title:{eq:"About Decibel"}){
      title
      embedCode
      source
    }
  }
`

export default AboutPage;

