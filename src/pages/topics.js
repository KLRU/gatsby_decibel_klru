import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import "../styles/main.css"
import Container from "../components/Container/Container"

const TopicsPage = ({data}) =>{
  const allTopics=data.allContentfulTag.edges
  return(
    <div>
    
    {allTopics.map(({node:allTopic})=>(
      <h2><Link to={`/${allTopic.slug}`}>{allTopic.title}</Link></h2>
    ))}

    <Link to='/'>Decibel Home</Link>
    </div>
  )
}
export const query=graphql`
query{
  allContentfulTag(
    sort: { fields: title, order: ASC }
    
  ){
    edges{
      node{
        title
        slug
      }
    }
  }
}
`

export default TopicsPage