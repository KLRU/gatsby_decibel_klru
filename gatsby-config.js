const dotenv = require('dotenv');
const queries = require("./src/utils/algolia");

if(process.env.NODE_ENV  !== 'production'){
  dotenv.config();
}

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: "Decibel ATX",
    description:
      "Austin's Locally Produced Resource for News and Events Presented by AustinPBS, KLRU-TV.",
    author: `Decibel ATX`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options:{
        name: `Decibel ATX`,
        short_name: `Decibel`,
        start_url: `/`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: '#fff',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
     resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        },
      },
      `gatsby-plugin-styled-components`,
  ],
}
