import React from 'react';
import { graphql } from 'gatsby';
//import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
//import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
//import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
//import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import BioGrid from '../components/BioElements/BioGrid';
import BioItem from '../components/BioElements/BioItem';

/*function DeterminePageElement(pageElement) {
  switch (pageElement.__typename) {
    case 'ContentfulBiographyElement':
    return<ContentfulBiographyElement key={pageElement.id} {...pageElement} />

    case 'ContentfulPhotoElement':
     return <ContentfulPhotoElement key={pageElement.id} {...pageElement} />

    case 'ContentfulTextElement':
     return <ContentfulTextElement key={pageElement.id} {...pageElement} />

    case 'ContentfulVideoElement':
      return <ContentfulVideoElement key={pageElement.id} {...pageElement} />

    default:
      return <div className="no_block_type" />
  }
}*/

const AboutPage = ({ data, pageContext }) => {
  const { title, pageElements: [...pageElements] } = data.contentfulPage;
  const [ ...tags ] = data.allContentfulTag.edges;
  const [...bios] = data.allContentfulBiographyElement.edges;
  
  const h1Style ={
    textAlign:'center',
    width:'100%',
    margin:'0',
    padding: '20px 0'
  }
  return (
    <Container>
       <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
      </TagList>
      </Header>
      <h1 style={h1Style}>{title}</h1>
  {/* <BioElementsBotttomDiv>
    <div className='bioElementEntryDiv'>
      {pageElements.map((pageElement) => {
        return DeterminePageElement(pageElement);
      })}
    </div>

  </BioElementsBotttomDiv> */}

  {/* <DeterminePageElement key={pageElements.id} {...pageElements} />

  <BioElementsBotttomDiv>
    {bios.map(({node:bio})=>(
      <ContentfulBiographyElement key={bio.id} {...bio}/>
    ))}
  </BioElementsBotttomDiv> */}
  <BioGrid>
  {bios.map(({node:bio})=>(
     <BioItem key={bio.id} {...bio}/>
  ))}
  </BioGrid>
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
    }
  }
`

export default AboutPage;

