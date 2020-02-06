//import paginate from 'gatsby-awesome-pagination';
const {paginate}= require('gatsby-awesome-pagination');
const path = require('path');


exports.createPages = async ({ actions, graphql }) =>{
  const { createPage } = actions;

  const loadPost = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost (
          sort: { fields: [publishDate] }
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
              tag: tag.slug,
              tagTitle: tag.title,
              slug: edge.node.slug,
            },
          })
        })

        // paginate({
        //   createPage,
        //   items: posts,
        //   itemsPerPage: 9,
        //   pathPrefix: '/archive',
        //   component: path.resolve('./src/templates/archive.js')
        // })
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

  const loadBlog = new Promise((resolve, reject) =>{
    graphql(`
      {
        allContentfulBlogPost{
          edges{
            node{
              slug
              date
              tags{
                title
                slug
              }
            }
          }
        }
      }
    `).then(result =>{
      const blogPosts = result.data.allContentfulBlogPost.edges

      blogPosts.forEach((edge) =>{
        createPage({
          path:`/${edge.node.slug}/`,
          component: path.resolve('./src/templates/blogTemplate.js'),
          context:{
            slug:edge.node.slug,
          },
        })
      })
      resolve()
    })
  })

  // const archiveAllPost = new Promise((resolve, reject)=>{
  //   graphql(
  //     `
  //     {
  //       allContentfulPost (
  //         sort: { fields: [publishDate] }
  //         limit: 1000
  //       ){
  //         edges {
  //           node {
  //             slug
  //             publishDate
  //             tags {
  //               title
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  //   ).then(result =>{
  //     const archivePosts = result.data.allContentfulPost.edges;
  //     paginate({
  //       createPage,
  //       items: archivePosts,
  //       itemsPerPage: 9,
  //       pathPrefix: '/archive',
  //       component: path.resolve('./src/templates/archive.js')
  //     })

  //   })
    
  // })
  await Promise.all([loadPost, loadTags, loadBlog])
};


