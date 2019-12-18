//import graphql from 'gatsby';


const postQuery= `query{
  allContentfulPost{
    edges{
      node{
        title
        slug
        id
        body {
          childMarkdownRemark {
            html
          }
        }
        tags {
          title
          slug
        }
      }
    }
  }
}`



const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
    data.allContentfulPost.edges.map(edge => edge.node),
    indexName: 'Posts'
    
  }
]


module.exports = queries