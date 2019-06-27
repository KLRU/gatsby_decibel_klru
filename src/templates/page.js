import React from 'react';
import { graphql } from 'gatsby';

const PageTemplate = ({ data, pageContext }) => {
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
    }
  }
`

export default PageTemplate;
