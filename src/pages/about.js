import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import "../styles/main.css"
import Container from "../components/Container/Container"

const AboutPage = ({data}) =>{
  const bioEntries=data.allContentfulBiographyElement.edges
  return(
    <div>
      <h1>About Page</h1>
    {bioEntries.map(({node:bioEntry})=>(
      <h2><Link to={bioEntry.slug}>{bioEntry.bioName}</Link></h2>
    ))}
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBiographyElement{
      edges{
        node{
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
    }
  }

`

export default AboutPage