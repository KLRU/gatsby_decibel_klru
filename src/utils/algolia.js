//import graphql from 'gatsby';


const postQuery= `query{
  allContentfulPost{
    edges{
      node{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        body{
          childMarkdownRemark{
            excerpt
          }
        }
        tags{
          id
          slug
          title
          
        }
      }
    }
  }
}`

// const tagQuery = `query{
//   allContentfulTag{
//     edges{
//       node{
//         id
//         title
//         slug
//       }
//     }
//   }
// }`



const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
    data.allContentfulPost.edges.map(edge => edge.node),
  },
  // {
  //   query: tagQuery,
  //   transformer: ({data}) => data.allContentfulTag.edges.map(edge=>edge.node),
  // }
]


module.exports = queries