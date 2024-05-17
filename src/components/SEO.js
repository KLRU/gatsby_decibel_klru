import React from 'react'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from "@reach/router"

const SEO = ({title, description, image, canonicalUrl}) =>{
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
  
  const { pathname } = useLocation();
  const defaultCanonicalUrl = `https://decibelatx.org${pathname}`;
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image
  
  return(
    <Helmet
    htmlAttributes={{
      lang: `en`,
    }}
    title={title}
    defaultTitle={site.siteMetadata.title}
    titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta property='og:image' content={metaImage}/>
      <meta property='og:description' content={metaDescription}/>
      <link rel="canonical" href={canonicalUrl || defaultCanonicalUrl} />

    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
}

export default SEO;