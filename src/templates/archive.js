import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const ArchiveTemplate =({data}) =>{
  //archivePosts = data.allContentfulPost.edges;
  return(
    <div>
    {/* {archivePosts.map(({node:archivePost})=>(
      <div>{archivePost.title}</div>
    ))} */}
    </div>
  )
}

export const query = graphql`
query{
  allContentfulPost(
    sort: { fields: [publishDate], order: DESC }
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
  }
}
`


export default ArchiveTemplate;