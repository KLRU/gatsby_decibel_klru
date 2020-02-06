import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const ArchiveTemplate =({data}) =>{
  archivePosts = data.allContentfulPost.edges;
  return(
    <div></div>
  )
}

export const query = graphql`
query{
  allContentfulPost {
    edges {
      node {
        id
        title
        slug
        heroImage {
          fluid {
            src
          }
        }
      }
    }
  }
}


`


export default ArchiveTemplate;