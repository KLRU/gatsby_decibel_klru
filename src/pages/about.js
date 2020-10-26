import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import '../styles/global.css'
import { Link } from 'gatsby';
//import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import SmallContainer from "../components/Container/SmallContainer";
import SEO from '../components/SEO';


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



const VideoDiv = styled.div`
    width:100%; 
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
  width: 100%;
  margin: 20px auto;
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
    //border: 1px solid rgba(0, 57, 70, .25);
    box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
    //border: 1px solid #ccc;
`

const AboutPage = ({ data, pageContext }) => {
  //const { title } = data.contentfulPage;
  const [ ...tags ] = data.allContentfulTag.edges;
  const [...bios] = data.allContentfulBiographyElement.edges;
  const videoIntro = data.contentfulVideoElement;
 
  return (
    <Container>
      <SEO 
      title="About Us"/>
       <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
            <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
      <SmallContainer>
      <h1 style={{textAlign: 'center'}}>About Decibel</h1>
      <VideoDiv> 
      {/* <h1 style={{textAlign: 'center'}}>{videoIntro.title}</h1> */}
      {/* <iframe src={`https://www.youtube.com/embed/${videoIntro.embedCode}/`} title={videoIntro.title}/> */}
      <ContentfulVideoElement {...videoIntro}/>
      </VideoDiv>
    
      <BioDiv>
      {bios.map(({node:bio})=>(
        <BioItem>
        <div className='imageHolder'>
        <img src={`https:${bio.bioImage.file.url}`} alt={bio.bioName}/>
        </div>
        <h2>{bio.bioName}</h2>
        <div dangerouslySetInnerHTML={{__html:bio.bioText.childMarkdownRemark.html}}></div>
        </BioItem>
      ))}   
      </BioDiv>
      </SmallContainer>
  <Footer />
    </Container>
  )
};

export const query = graphql`
  query {
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

