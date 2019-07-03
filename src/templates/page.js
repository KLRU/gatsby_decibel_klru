import React from 'react';
import { graphql } from 'gatsby';
import ContentfulBiographyElement from '../components/PageElements/ContentfulBiographyElement';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';

function getBlockComponent(pageElement) {
  switch (pageElement.__typename) {
    case 'ContentfulBiographyElement':
      return <ContentfulBiographyElement key={pageElement.id} {...pageElement} />

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

const PageTemplate = ({ data, pageContext }) => {
  const { title, pageElements: [...pageElements] } = data.contentfulPage;

  return (
    <div>
      <h1>{title}</h1>
      {pageElements.map((pageElement) => {
        return getBlockComponent(pageElement);
      })}
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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

export default PageTemplate;
