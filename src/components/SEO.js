import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({title, description, image}) =>{
  const {site} = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            title
            description
            image
            
          }
        }
      }
    `
  )

  
  return(
    <Helmet
    htmlAttributes={{
      lang: `en`,
    }}
    title={title}
    defaultTitle={site.siteMetadata.title}
    titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="image" content={site.siteMetadata.image} />
    </Helmet>
  )
}

export default SEO;