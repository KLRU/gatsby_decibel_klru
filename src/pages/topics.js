import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import "../styles/main.css"
import Container from "../components/Container/Container"

const TopicsPage = ({data}) =>{
  const allTopics=data.allContentfulTag.edges
  return(
    <div>
      {/* <h1>About Page</h1> */}
    {allTopics.map(({node:allTopic})=>(
      <h2><Link to={`/topics/${allTopic.slug}`}>{allTopic.title}</Link></h2>
    ))}
    </div>
  )
}
export const query=graphql`
query{
  allContentfulTag(
    sort: { fields: [post___publishDate], order: DESC }
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