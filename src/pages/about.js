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
      <div>
      <h2><Link to={`/about/${bioEntry.slug}`}>{bioEntry.bioName}</Link></h2>
      <img src={bioEntry.bioImage.fluid.src}/>
      <p dangerouslySetInnerHTML={{__html:bioEntry.bioText.childMarkdownRemark.html}}></p>
      </div>
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