import React from 'react'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'

const BioTemplate  = ({data}) =>{
  const{
    bioName,
    bioImage,
    slug,
  }=data.contentfulBiographyElement
  return(
    <div>
      <h1>{bioName}</h1>
      <img src={bioImage.fluid.src}/>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!){
    contentfulBiographyElement(slug: { eq: $slug }){
      id
      bioName
      slug
      bioImage{
        fluid{
          src
        }
      }
      bioText{
        childMarkdownRemark{
             html
           }
      }
    }
  }
`
export default BioTemplate