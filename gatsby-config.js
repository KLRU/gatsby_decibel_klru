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
    title: "Decibel",
    description:
      "Austin's Locally Produced Resource for News and Events Presented by Austin PBS, KLRU-TV.",
    author: "Decibel",
    siteURL: "https://decibelatx.org/",
    image: "https://klru-images.s3.amazonaws.com/decibel/decibelshare.png"
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
              maxWidth: 800,
              backgroundColor: '#fff',
              linkImagesToOriginal: true,
              showCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
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
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-106288068-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
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

      {
        resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: "GTM-KSSZDX6",
            includeInDevelopment: true,
            enableWebVitalsTracking: true,
          },
      }, 
  ],
}
