import React from 'react';
import { graphql } from 'gatsby';
import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import BioElementsBotttomDiv from '../components/BioElements/BioElementsBottomDiv'
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';

function determinePageElement(pageElement) {
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
}

const AboutPage = ({ data, pageContext }) => {
  const { title, pageElements: [...pageElements] } = data.contentfulPage;
  const [ ...tags ] = data.allContentfulTag.edges;
  const h1Style ={
    textAlign:'center'
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
  <BioElementsBotttomDiv>
    <div className='bioElementEntryDiv'>
      {pageElements.map((pageElement) => {
        return determinePageElement(pageElement);
      })}
    </div>
  </BioElementsBotttomDiv>
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
    }
  }
`

export default AboutPage;

