const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;

  // const loadPage = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulPage {
  //         edges {
  //           node {
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const pages = result.data.allContentfulPage.edges

  //     pages.forEach((page) => {
  //       createPage({
  //         path:`/${page.node.slug}/`,
  //         component: path.resolve(`./src/templates/page.js`),
  //         context:{
  //             slug: page.node.slug,
  //           },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  const loadPost = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost (
          sort: { fields: [publishDate], order:DESC }
          limit: 1000
        ){
          edges {
            node {
              slug
              publishDate
              tags {
                title
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges;

      posts.forEach((edge) => {
        edge.node.tags.forEach((tag) => {
          createPage({
            path: `/${tag.slug}/${edge.node.slug}/`,
            component: path.resolve(`./src/templates/post.js`),
            context:{
              slug: edge.node.slug,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) =>{
    graphql(`
      {
        allContentfulTag{
          edges{
            node{
              slug
              post{
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges

      tags.forEach((edge) =>{
        createPage({
          path: `/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context:{
            slug:edge.node.slug
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPage, loadPost, loadTags])
}

//   const loadBioPage = new Promise((resolve, reject)=>{
//     graphql(`
//     {
//       allContentfulBiographyElement{
//         edges{
//            node{
//               bioName
//               slug
//               bioImage{
//                 fluid{
//                   src
//                   }
//                 }
//               bioText{
//                 childMarkdownRemark{
//                   html
//                   }
//                 }
//               }
//             }
//           }
//         }
//     `).then(result =>{
//       const bioEntries = result.data.allContentfulBiographyElement.edges

//       bioEntries.forEach((edge)=>{
//         createPage({
//           path: `${edge.node.slug}`,
//           component: path.resolve(`./src/templates/bio.js`),
//           context:{
//             slug:edge.node.slug
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   return Promise.all([loadPost, loadTags, loadBioPage])
// }
