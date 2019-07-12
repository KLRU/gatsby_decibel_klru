import React from 'react';
import { graphql } from 'gatsby';
import BioElementsGrid from '../components/BioElements/BioElementsGrid'
import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import Container from '../components/Container/Container';

function determinePageElement(pageElement) {
  switch (pageElement.__typename) {
    case 'ContentfulBiographyElement':
      return <BioElementsGrid><ContentfulBiographyElement key={pageElement.id} {...pageElement} /></BioElementsGrid>

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

  return (
    <Container>
      <h1>{title}</h1>
      {pageElements.map((pageElement) => {
        return determinePageElement(pageElement);
      })}
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
    }
  }
`

export default AboutPage;

